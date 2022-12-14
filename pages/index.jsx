import Layout from "../components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Layout>
        <h1>Has iniciado sesion como: {session.user.email}</h1>
        <h1>{session.user.name}</h1>
      </Layout>
    );
  }
  if (!session) {
    return (
      <Layout>
        <h1>No has iniciado sesion</h1>
      </Layout>
    );
  }
}
