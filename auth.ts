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
    callbacks: {
        async session({token, session}){
            if (token.sub && session.user){
                session.user.id = token.sub;            }
            return session;
        },

        async jwt({token}) {
            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt'},
    ...authConfig,
});