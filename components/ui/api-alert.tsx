"use client";

import { admin } from "@/actions/admin";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { TbCopy, TbServer } from "react-icons/tb";

interface ApiAlertProps {
    title: string;
    description: string;
    variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
    public: "Public",
    admin: "Admin",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
    public: "secondary",
    admin: "destructive",
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
    title,
    description,
    variant = "public",
}) => {
    const onCopy = () => {
        admin().then((data) => {
            if (data.error && variant === "admin") {
                navigator.clipboard.writeText(description);
                toast.error(data.error);
            }

            if (data.success || variant === "public") {
                navigator.clipboard.writeText(description);
                toast.success("API Route copied to the clipboard.");
            }
        });
    };

    return (
        <Alert>
            <TbServer className="h-5 w-4" />
            <AlertTitle className="flex items-center gap-x-2">
                {title}
                <Badge variant={variantMap[variant]}> {textMap[variant]}</Badge>
            </AlertTitle>
            <AlertDescription className="mt-4 flex items-center justify-between">
                <code className=" relative rounded bg-muted px-[0.3rem] font-mono text-sm font-semibold">
                    {description}
                </code>
                <Button variant="outline" size="icon" onClick={onCopy}>
                    <TbCopy className="h-4 w-4" />
                </Button>
            </AlertDescription>
        </Alert>
    );
};
