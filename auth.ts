import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
// import GitHub from "next-auth/providers/github"
 
// export const { handlers, auth } = NextAuth({
//   providers: [GitHub],
// })
import authConfig from "./auth.config";
import { db } from "./lib/db";

export const {
    handlers: { GET, POST},
    auth,
    signIn,
    signOut,
}  = NextAuth({
    adapter: PrismaAdapter(db),
    session: {strategy: 'jwt'},
    ...authConfig,
});