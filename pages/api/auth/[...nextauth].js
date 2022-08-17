import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  // jwt: {
  //   encryption: true,
  // },
  // secret: process.env.secret,
  // callbacks: {
  //   async jwt(token, account) {
  //     if (account?.accesToken) {
  //       token.acessToken = account.accesToken;
  //     }
  //     return token;
  //   },
  //   redirect: async (url, _baseUrl) => {
  //     if (url === "/profile") {
  //       return Promise.resolve("/");
  //     }
  //     return Promise.resolve("/");
  //   },
  // },
});
