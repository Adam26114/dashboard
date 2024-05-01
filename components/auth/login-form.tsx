"use client";

import * as z from "zod";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

import { useState, useTransition } from "react";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/loading";
import toast from "react-hot-toast";

export const LoginForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const urlError =
        searchParams.get("error") === "OAuthAccountNotLinked"
            ? "Email already in use with different provider!"
            : "";

    const [isPanding, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [eyeOpen, setEyeOpen] = useState(false);

    function hundleEyeOpen() {
        setEyeOpen(!eyeOpen);
    }
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(data: z.infer<typeof LoginSchema>) {
        setError("");
        setSuccess("");

        startTransition(() => {
            login(data, callbackUrl || undefined)
                .then((data) => {
                    if (data?.error) {
                        form.reset();
                        setError(data.error);
                    }

                    if (data?.success) {
                        form.reset();
                        setSuccess(data.success);
                        toast.success("Welcome to the Admin Dashboard", {
                            position: "top-center",
                        });
                    }
                })
                .catch(() => setError("Something went wrong"));
        });
    }

    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showShocial
            showPolicy
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className=" space-y-6"
                >
                    <div className=" space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isPanding}
                                            {...field}
                                            placeholder="Please enter your email address"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-[12px]" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                disabled={isPanding}
                                                {...field}
                                                placeholder="Please enter your password"
                                                type={
                                                    !eyeOpen
                                                        ? "password"
                                                        : "text"
                                                }
                                            />
                                            <Button
                                                className=" absolute right-3 top-[50%] translate-y-[-50%] w-6 h-6  cursor-pointer text-gray-500"
                                                variant="ghost"
                                                size="icon"
                                                type="button"
                                                onClick={hundleEyeOpen}
                                            >
                                                {eyeOpen ? (
                                                    <IoEyeSharp />
                                                ) : (
                                                    <FaEyeSlash />
                                                )}
                                            </Button>
                                        </div>
                                    </FormControl>
                    
                                    <FormMessage className="text-[12px]" />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormError message={error || urlError} />
                    <FormSuccess message={success} />

                    <div className=" flex gap-2 justify-end">
                        <Button type="submit" className="w-full">
                            {!isPanding ? "Login" : <Loading type="text" />}
                        </Button>
                    </div>
                </form>
            </Form>
        </CardWrapper>
    );
};
