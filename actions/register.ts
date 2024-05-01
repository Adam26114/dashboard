"use server";

import * as z from "zod";

import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

import crypto from "crypto";



export const register = async (value: z.infer<typeof RegisterSchema>) => {

    const validatedFields = RegisterSchema.safeParse(value);

    if (!validatedFields.success) {
        return { error: "Invalid fields !" };
    }

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) return { error: " Email already in use !" };

    /**
     * @With_username
     */
    // const nameWithoutSpaces = name.split(" ").join("");
    // const image = `https://avatar.iran.liara.run/public?username=${nameWithoutSpaces}`;

    /**
     * @With_Id
     */
    const id = crypto.randomInt(0, 100).toString();
    const image = `https://avatar.iran.liara.run/public/${id}`;

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            image,
        },
    });


    return { success: "Confirmation email sent!" };
};
