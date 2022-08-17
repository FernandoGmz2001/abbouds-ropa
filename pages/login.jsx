import React from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

function login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <p>Iniciaste sesion como: {session.user.email}</p>
        <button
          onClick={() => signOut()}
          className="rounded bg-mainFucsia px-3 py-2 text-white"
        >
          Cerrar sesion
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>No has iniciado sesion</p>
        <button
          onClick={() => signIn()}
          className=" bg-mainFucsia px-3 py-2 text-white"
        >
          Iniciar sesion
        </button>
      </div>
    );
  }
}

export default login;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
