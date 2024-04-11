"use server";

import { db } from "@/lib/db";
import * as z from "zod"
import { RegisterSchema } from "@/schemas";

export const register = async(values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);
    
    if(!validatedFields.success){
        return{ error: "Invalid fiels!"};
    }

    const {email, password, name } = validatedFields.data;
    // hash password

    const existingUser = await db.user.findUnique({
        where: {
            email,
        }
    });

    if(existingUser){
        return{error: "Email already in use"}
    }

    await db.user.create({
        data:{
            name,
            email,
            password,
        }
    });

    // send verification token email

    return{success: "Account Created!"};
};