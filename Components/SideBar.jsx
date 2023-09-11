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
    <div className=" flex max-full min-h-screen">
      <section className="side-bar">
        <div className="data-header">
          <h2 className="h2 ">
            Data
            <span>Guard</span>
          </h2>
          <div className="data-icons">
            <Link
              href="/"
              onClick={changeMarketing}
              className={guard == "marketing" ? "active" : "unActive  "}
            >
              <CgMenuGridO />
              Marketing
            </Link>
            <Link
              href="/finance"
              onClick={changeFinance}
              className={guard == "finance" ? "active" : "unActive "}
            >
              <FaCoins />
              Finance
            </Link>
            <Link
              href="/personnel"
              onClick={changePersonel}
              className={guard == "personel" ? "active" : "unActive "}
            >
              <BsFileEarmarkPerson size={18} />
              Personnel
            </Link>
          </div>
        </div>
        <div className="main-Plugin">
          <div className="sub-plugin">
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
            <span id="main-slider" class="slider"></span>
          </label>
        </div>
      </section>
    </div>
  );
}
