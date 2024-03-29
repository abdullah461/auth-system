"use server";

import * as z from "zod"
import { LoginSchema } from "@/schemas";

export const register = async(values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);
    
    if(!validatedFields){
        return{ error: "Invalid fiels!"};
    }

    return{success: "Email sent!"};
};