import React from "react";
import Link from "next/link";
import style from "../styles/Navbar.module.css";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
// import "boxicons";

const Navbar = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <nav className="flex px-10 h-[10vh] items-center justify-between shadow-md">
        <div>
          <Link href="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/abbouds-ropa.appspot.com/o/Abbouds-Logo.png?alt=media&token=1ccc60c8-2dc4-4496-af51-70ad80f68041"
              alt="AbboudsLogo"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <ul className="flex gap-5 text-navItems">
            <Link href="/">
              <a href="#">Inicio</a>
            </Link>
            <Link href="/ropa">
              <a href="#">Ropa</a>
            </Link>
            <Link href="/contactanos">
              <a href="#">Contáctanos</a>
            </Link>
            <Link href="/sobreNosotros">
              <a href="#">Sobre Nosotros</a>
            </Link>
          </ul>
        </div>
        <div>
          <button
            onClick={() => signOut()}
            className=" bg-mainFucsia px-3 py-2 text-white rounded"
          >
            Cerrar sesion
          </button>
        </div>
      </nav>
    );
  }

  if (!session) {
    return (
      <nav className="flex px-10 h-[10vh] items-center justify-between shadow-md">
        <div>
          <Link href="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/abbouds-ropa.appspot.com/o/Abbouds-Logo.png?alt=media&token=1ccc60c8-2dc4-4496-af51-70ad80f68041"
              alt="AbboudsLogo"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <ul className="flex gap-5 text-navItems">
            <Link href="/">
              <a href="#">Inicio</a>
            </Link>
            <Link href="/ropa">
              <a href="#">Ropa</a>
            </Link>
            <Link href="/contactanos">
              <a href="#">Contáctanos</a>
            </Link>
            <Link href="/sobreNosotros">
              <a href="#">Sobre Nosotros</a>
            </Link>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <button onClick={() => signIn()} className="text-navItems">
            Iniciar sesion
          </button>
          <button className={style.btnRegistrarse}>
            <Link href="/register">Registrarse</Link>
          </button>
          <box-icon name="shopping-bag" color="#E02076" />
        </div>
      </nav>
    );
  }
};
export default Navbar;
