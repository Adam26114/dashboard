"use server";

import * as z from "zod";

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULF_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/data/user";

export const login = async (
    value: z.infer<typeof LoginSchema>,
    callbackUrl?: string
) => {
    const validatedFields = LoginSchema.safeParse(value);

    if (!validatedFields.success) {
        return { error: "Invalid fields !" };
    }

    const { email, password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password)
        return { error: "Email does not exist!" };

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: callbackUrl || DEFAULF_LOGIN_REDIRECT,
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "invalid credentials!" };
                default:
                    return { error: "Somethings went wrong!" };
            }
        }

        throw error;
    }

    if (validatedFields.success)
        return { success: "Welcome to the Admin Dashboard!" };
};
