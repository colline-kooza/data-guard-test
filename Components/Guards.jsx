import React, { useState } from "react";
import { useCart } from "./ContextApi";

export default function Guards({ data, title, link }) {
  const { pluginsEnabled } = useCart();
  const [isDisabled, setIsDisabled] = useState(false);
  function handleClick() {}

  return (
    <div
      id={link}
      className="flex min-h-screen flex-col p-3 lg:p-8 gap-8 bg-gray-100 "
    >
      <h2 className="font-[700]">{title}</h2>
      <div className="guard-container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pluginsEnabled &&
          data?.map((guard) => {
            return (
              <div
                key={guard.id}
                className="container flex flex-col gap-5 border-solid border-2 border-gray-400 rounded lg:w-[90%] h-full p-4"
              >
                <div className="container-header flex justify-between">
                  <h2 className="text-[16px] font-[800]">{guard.title}</h2>
                  <label class="switch ">
                    <input
                      className="hidden"
                      type="checkbox"
                      onChange={() => setIsDisabled(!isDisabled)}
                    />
                    <span class="slider bg-green-700"></span>
                  </label>
                </div>
                <p className="text-[12px] sm:text-[15px] lg:text-[15px]">
                  {guard.description}
                </p>
              </div>
            );
          })}
        {!pluginsEnabled &&
          data?.map((guard) => {
            return (
              <div
                key={guard.id}
                className="container flex flex-col gap-5 border-solid border-2 border-gray-200  rounded lg:w-[90%] h-full p-4 "
              >
                <div className="container-header flex justify-between">
                  <h2 className="text-[16px] text-gray-300 font-[800]">
                    {guard.title}
                  </h2>
                  <label class="switch ">
                    <input
                      className="hidden"
                      type="checkbox"
                      disabled="true"
                      cursor-not-allowed
                      onChange={() => setIsDisabled(!isDisabled)}
                    />
                    <span class="slider bg-gray-300"></span>
                  </label>
                </div>
                <p className="text-gray-300 text-[12px] sm:text-[15px] lg:text-[15px]">
                  {guard.description}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
