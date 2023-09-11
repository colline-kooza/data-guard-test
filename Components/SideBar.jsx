"use client";
import { CgMenuGridO } from "react-icons/cg";
import { FaCoins } from "react-icons/fa";
import { BsFileEarmarkPerson } from "react-icons/bs";
import Link from "next/link";
import { useCart } from "./ContextApi";
import { useState } from "react";

export default function SideBar() {
  const { pluginsEnabled } = useCart();
  const { setPluginsEnabled } = useCart();
  const [checked, setChecked] = useState(false);

  const [guard, setGuard] = useState("marketing");
  function changeMarketing() {
    setGuard("marketing");
  }
  function changeFinance() {
    setGuard("finance");
  }
  function changePersonel() {
    setGuard("personel");
  }
  return (
    <div className="flex max-full min-h-screen">
      <section className="bg-gray-400 h-[80vh] sm:min-h-[100vh]  lg:min-h-[100vh] w-[100%] sm:w-[100%] lg:w-[90%] flex flex-col justify-between ">
        <div className="data-header p-4 flex flex-col gap-5">
          <h2 className="text-[24px] font-[500]">
            Data
            <span className="text-[25px] text-red-400 font-[700]">Guard</span>
          </h2>
          <div className="data-icons flex flex-col gap-4">
            <Link
              href="/"
              onClick={changeMarketing}
              className={
                guard == "marketing"
                  ? "flex items-center gap-4 bg-yellow-50 border-red-700 border-l-4 "
                  : "flex items-center gap-2  "
              }
            >
              <CgMenuGridO />
              Marketing
            </Link>
            <Link
              href="/finance"
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
              href="/personnel"
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
          <div className="text-[8px] lg:text-[13px] sm:text-[13px] font-[600]">
            {pluginsEnabled == true ? (
              <h2>Plugins are Enabled</h2>
            ) : (
              <h2>Plugins are UnEnabled</h2>
            )}
          </div>
          <label
            onChange={() => setPluginsEnabled(!pluginsEnabled)}
            class="switch "
          >
            <input className="hidden" type="checkbox" />
            <span class="slider bg-green-800"></span>
          </label>
        </div>
      </section>
    </div>
  );
}
