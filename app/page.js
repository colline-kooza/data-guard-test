"use client";
import { useCart } from "@/Components/ContextApi";
import { useState } from "react";

export default function Guards() {
  const { pluginsEnabled } = useCart();
  const { data, setData, loading } = useCart();
  const Marketing = data?.filter((guard) => guard.marketing);

  const toggleDisabled = async (id) => {
    try {
      const updatedDataCopy = data?.map((guard) => {
        if (guard.id === id) {
          return { ...guard, isDisabled: !guard.isDisabled };
        }
        return guard;
      });
      const singleGuard = updatedDataCopy.find((guard) => guard.id === id);

      setData(updatedDataCopy);

      const response = await fetch(`http://localhost:3000/api/data/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ singleGuard }),
      });

      console.log(response);

      if (response.status === 200) {
        singleGuard.backgroundColor = "red";
      } else {
        console.error("Error updating data .");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col p-1 lg:p-7 gap-8 bg-gray-100 ">
      <h2 className="font-[700]">Marketing</h2>
      {loading ? (
        <span class="loader absolute top-[50%] right-[5rem] lg:right-[20rem] sm:right-[15rem]"></span>
      ) : (
        <div className="guard-container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pluginsEnabled &&
            Marketing?.map((guard) => {
              return (
                <div
                  key={guard.id}
                  className={`container flex flex-col gap-5 border-solid border-2 border-gray-400 rounded lg:w-[90%] h-full p-4 ${
                    guard.status === "ok" ? "border-solid border-red-400" : ""
                  }`}
                >
                  <div className="container-header flex justify-between">
                    <h2 className="text-[14px] font-[800]">{guard.title}</h2>
                    <label className="switch">
                      <input
                        className="hidden"
                        type="checkbox"
                        onChange={() => toggleDisabled(guard.id)}
                        checked={!guard.isDisabled}
                      />
                      <span className="slider bg-green-600"></span>
                    </label>
                  </div>
                  <p className="text-[12px] sm:text-[15px] lg:text-[15px]">
                    {guard.description}
                  </p>
                </div>
              );
            })}
          {!pluginsEnabled &&
            Marketing?.map((guard) => {
              return (
                <div
                  key={guard.id}
                  className="container flex flex-col gap-5 border-solid border-2 border-gray-200 rounded lg:w-[90%] h-full p-4"
                >
                  <div className="container-header flex justify-between">
                    <h2 className="text-[16px] text-gray-300 font-[800]">
                      {guard.title}
                    </h2>
                    <label class="switch">
                      <input
                        className="hidden"
                        type="checkbox"
                        disabled
                        onChange={() => toggleDisabled(guard.id)}
                      />
                      <span class="slider bg-green-200"></span>
                    </label>
                  </div>
                  <p className="text-[12px] sm:text-[15px] lg:text-[15px] text-gray-300">
                    {guard.description}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
