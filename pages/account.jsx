import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import Layout from "../components/Layout";

function account() {
  const { data: session, status } = useSession({ required: true });
  if (status === "authenticated") {
    return (
      <Layout>
        <div>
          <p>Bienvenudo {session.user.name}</p>
          <button
            onClick={() => signOut()}
            className="rounded bg-mainFucsia px-3 py-2 text-white"
          >
            Cerrar sesion
          </button>
        </div>
      </Layout>
    );
  } else {
    return <div>No has iniciado sesion</div>;
  }
}

export default account;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
