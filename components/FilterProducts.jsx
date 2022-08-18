import React from "react";
import { FiSearch } from "react-icons/fi";

function FilterProducts() {
  return (
    <div className="border border-gray-300 w-[250px] h-[100%] rounded">
      <div className="flex justify-center">
        <div className="flex items-center gap-1 p-2">
          <FiSearch />
          <input
            type="search"
            name=""
            id=""
            className="w-[180px] border border-gray-300 focus:border-none"
          />
        </div>
      </div>
      <div className="text-center py-2">
        <p>Pañaleros</p>
      </div>
      <div className="text-center py-2 bg-mainFucsia text-white">
        <p>Vestidos casuales</p>
      </div>
      <div className="text-center py-2">
        <p>Conjuntos</p>
      </div>
      <div className="text-center py-2">
        <p>Peleles</p>
      </div>
    </div>
  );
}

export default FilterProducts;
