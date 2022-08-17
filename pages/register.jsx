// import { signIn, signOut, useSession } from "next-auth/react";

// import React from "react";

// function register() {
//   const { session, loadingSession } = useSession();
//   if (loadingSession) {
//     return <p>Cargando...</p>;
//   }
//   return (
//     <div className="flex items-center justify-center h-[100vh]">
//       {!session && (
//         <>
//           <button
//             onClick={() => signIn()}
//             className="rounded bg-mainFucsia px-3 py-2 text-white"
//           >
//             Sign in
//           </button>
//         </>
//       )}
//       {session && (
//         <>
//           <h1>Iniciaste sesion como : {session.user.name}</h1>
//           <h2>Tu email es : {session.user.email}</h2>
//         </>
//       )}
//     </div>
//   );
// }

// export default register;
