"use client";
import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaCoins } from "react-icons/fa";
import { BsFileEarmarkPerson } from "react-icons/bs";
import Guards from "@/Components/Guards";
import { useCart } from "@/Components/ContextApi";
import Link from "next/link";

export default function page() {
  const { data } = useCart();
  const Marketing = data?.filter((guard) => guard.marketing);
  const Finance = data?.filter((guard) => guard.finance);
  const Personnel = data?.filter((guard) => guard.personnel);
  // console.log(Finance);
  const [guard, setGuard] = useState("marketing");
  function changeMarketing() {
    setGuard("marketing");
    console.log("button clicked");
  }
  function changeFinance() {
    setGuard("finance");
  }
  function changePersonel() {
    setGuard("personel");
  }

  return (
    <div className="flex w-full min-h-screen">
      <section className="bg-gray-300 w-[40%] h-[80vh] sm:min-h-[100vh]  lg:min-h-[100vh] sm:w-[35%] lg:w-[35%] flex flex-col justify-between ">
        <div className="data-header p-4 flex flex-col gap-5">
          <h2 className="text-[24px] font-[500]">
            Data<span className="text-[25px] font-[700]">Guard</span>
          </h2>
          <div className="data-icons flex flex-col gap-4">
            <Link
              href="#marketing"
              onClick={changeMarketing}
              className={
                guard == "marketing"
                  ? "flex items-center gap-2 bg-yellow-50 border-red-600 border-l-4 "
                  : "flex items-center gap-2  "
              }
            >
              <CgMenuGridO />
              Marketing
            </Link>
            <Link
              href="#finance"
              onClick={changeFinance}
              className={
                guard == "finance"
                  ? "flex items-center gap-2  bg-yellow-50 border-red-600 border-l-4 "
                  : "flex items-center gap-2  "
              }
            >
              <FaCoins />
              Finance
            </Link>
            <Link
              href="#Personnel"
              onClick={changePersonel}
              className={
                guard == "personel"
                  ? "flex items-center gap-2 bg-yellow-50 border-red-600 border-l-4 "
                  : "flex items-center gap-2  "
              }
            >
              <BsFileEarmarkPerson size={18} />
              Personnel
            </Link>
          </div>
        </div>
        <div className=" mb-8 flex items-center justify-center gap-3">
          <h3 className="text-[8px] lg:text-[13px] sm:text-[13px] font-[600]">
            All plugins disabled
          </h3>
          <label class="switch ">
            <input className="hidden" type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </section>
      <section className="">
        {guard == "marketing" ? (
          <Guards link="marketing" title="Marketing Plugins" data={Marketing} />
        ) : guard == "finance" ? (
          <Guards link="finance" title="Finance Plugins" data={Finance} />
        ) : (
          <Guards link="Personnel" title="Personnel Plugins" data={Personnel} />
        )}
      </section>
    </div>
  );
}
