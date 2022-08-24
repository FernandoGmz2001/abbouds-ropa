import React from "react";
import { BsBox } from "react-icons/bs";
import Product from "../components/Product";
import Link from "next/link";

function dashboard() {
  return (
    <div className="flex">
      <div className="w-[10%] h-[100vh] px-5 py-3">
        <div className="bg-mainFucsia h-full flex justify-center items-center rounded-xl">
          <BsBox className="text-white text-2xl" />
        </div>
      </div>
      <div className="w-[90%] p-5">
        <div className="pb-5">
          <button className="bg-mainFucsia text-white px-3 py-2 rounded">
            <Link href="/">
              <a href="">Volver</a>
            </Link>
          </button>
        </div>
        <div>
          <Product />
        </div>
      </div>
    </div>
  );
}

export default dashboard;
