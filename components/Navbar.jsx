import React from "react";
import Link from "next/link";
import style from "../styles/Navbar.module.css";
import Image from "next/image";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { BiShoppingBag } from "react-icons/bi";
import { Dropdown } from "flowbite-react";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <nav className="flex px-10 h-[10vh] items-center justify-between shadow-md ">
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
            <Link href="/contactUs">
              <a href="#">Contáctanos</a>
            </Link>
            <Link href="/aboutUs">
              <a href="#">Sobre Nosotros</a>
            </Link>
          </ul>
        </div>
        <div className="flex items-center">
          <Dropdown label={session.user.name} color="">
            <Dropdown.Item>
              <Link href="/dashboard">Dashboard</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/account">
                <a href="">Cuenta</a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item onClick={() => signOut()}>
              Cerrar sesión
            </Dropdown.Item>
          </Dropdown>
          <BiShoppingBag className="text-mainFucsia text-xl" />
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
            <Link href="/contactUs">
              <a href="#">Contáctanos</a>
            </Link>
            <Link href="/aboutUs">
              <a href="#">Sobre Nosotros</a>
            </Link>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          {/* <Link href="/signin">Iniciar sesion</Link> */}
          <button onClick={() => signIn()} className={style.btnRegistrarse}>
            Iniciar sesion
          </button>
          {/* <button className={style.btnRegistrarse}>
            <Link href="/register">Registrarse</Link>
          </button> */}
          <BiShoppingBag className="text-xl text-mainFucsia" />
        </div>
      </nav>
    );
  }
};
export default Navbar;
