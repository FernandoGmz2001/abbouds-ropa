import React from "react";
import Link from "next/link";
import Image from "next/image";

function registro() {
  return (
    <div className="p-3 h-[100vh] flex items-center justify-center">
      <div className="bg-mainFucsia w-[30%] h-[90vh] p-7 rounded-xl flex items-center justify-center">
        <div className="text-white flex flex-col items-center">
          <h1 className="text-4xl font-semibold mb-4 text-center">
            Empieza a comprar con nosotros.
          </h1>
          {/* <h4 className="font-light text-[20px]">
            Aquí encontrarás ropa para tus niños con la mejor calidad
          </h4> */}
          <div>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/abbouds-ropa.appspot.com/o/monita-agarrando-cartel.png?alt=media&token=9fe65f5a-09a0-418a-af01-c3eee8690f74"
              alt="monita-agarrando-cartel"
              width={367}
              height={461}
            />
          </div>
        </div>
      </div>
      <div className="w-[70%] h-[90vh] px-20 flex items-center ">
        <div className="w-[400px]">
          <h1 className="text-2xl font-bold mb-3">Registro</h1>
          <p>
            Ya tienes una cuenta?
            <Link href="/iniciarSesion">
              <a href="" className="text-blue-400">
                Inicia Sesión
              </a>
            </Link>
          </p>

          <form className="flex flex-col mt-10 gap-3">
            <label htmlFor="" className="">
              Correo
            </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Correo"
              className="p-3 border border-gray-300 rounded-lg"
            />
            <label htmlFor="" className="">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Contraseña"
              className="p-3 border border-gray-300 rounded-lg"
            />
            <label htmlFor="" className="">
              Repetir contraseña
            </label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Contraseña"
              className="p-3 border border-gray-300 rounded-lg"
            />
            <div className="">
              <button className="p-3 bg-mainFucsia text-white rounded">
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default registro;
