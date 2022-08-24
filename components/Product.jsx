import React from "react";
import { BiSave } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

function Product() {
  return (
    // <form
    //   action="/api/test/add"
    //   method="post"
    //   className="grid grid-cols-4 gap-5 border border-gray py-5 rounded"
    // >
    //   <div className="flex flex-col justify-center items-center gap-3">
    //     <div className="w-[100px] h-[100px] bg-gray-300"></div>
    //     <button className="bg-mainFucsia text-white px-3 py-2 rounded">
    //       Subir Imagen
    //     </button>
    //   </div>
    //   <div className="flex flex-col gap-3">
    //     <label htmlFor="">Nombre:</label>
    //     <input type="text" name="Nombre" className="border border-gray-300" />
    //     <label htmlFor="">Descripción:</label>
    //     <input type="text" className="border border-gray-300" />
    //   </div>
    //   <div className="flex flex-col gap-3">
    //     <label htmlFor="">Precio:</label>
    //     <input
    //       type="text"
    //       name="Precio"
    //       id=""
    //       className="border border-gray-300"
    //     />
    //     <label htmlFor="">Descuento:</label>
    //     <input
    //       type="text"
    //       name="Descuento"
    //       id=""
    //       className="border border-gray-300"
    //     />
    //   </div>
    //   <div className="flex flex-col ">
    //     <div className="flex flex-col gap-4 justify-center items-center">
    //       <div className="flex items-center gap-2">
    //         <input
    //           type="submit"
    //           value="Editar"
    //           className="border border-gray-400 flex items-center justify-center  w-[74px] py-2 gap-2 rounded hover:text-white hover:bg-black"
    //         ></input>
    //         <FiEdit />
    //       </div>
    //       <div className="flex items-center gap-2">
    //         <input
    //           type="submit"
    //           value="Salvar"
    //           className="border border-green-400 flex items-center justify-center w-[74px] py-2 gap-2 rounded hover:bg-green-400 hover:text-white"
    //         ></input>
    //         <BiSave />
    //       </div>
    //       <div className="flex items-center gap-2">
    //         <input
    //           type="submit"
    //           value="Eliminar"
    //           className="border border-red-500 flex items-center justify-center w-[74px] py-2  gap-2 rounded hover:bg-red-500 hover:text-white"
    //         ></input>
    //         <AiFillDelete />
    //       </div>
    //     </div>
    //   </div>
    // </form>

    <form
      action="/api/uploadProduct"
      method="post"
      className="flex flex-col w-[300px] gap-5"
    >
      <label htmlFor="">Nombre</label>
      <input type="text" name="Nombre" />
      <label htmlFor="">Descripcion</label>
      <input type="text" name="Descripcion" />
      <label htmlFor="">Precio</label>
      <input type="number" name="Precio" />
      <label htmlFor="">Descuento</label>
      <input type="number" name="Descuento" />
      <input type="submit" value="Guardar" className="p-2 cursor-pointer" />
    </form>
  );
}

export default Product;
