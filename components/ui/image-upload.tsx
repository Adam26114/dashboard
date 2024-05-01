"use client";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TbFilePlus, TbTrash } from "react-icons/tb";
import { UploadButton } from "@/utils/uploadthing";

interface ImageUploadProps {
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    onRemove,
    value,
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    const onUpload = (result: any) => {
        onChange(result[0].url);
    };

    return (
        <div>
            <div className="mb-4 flex items-center gap-4">
                {value.map((url) => (
                    <div
                        key={url}
                        className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
                    >
                        <div className="z-10 absolute top-2 right-2">
                            <Button
                                type="button"
                                onClick={() => onRemove(url)}
                                variant="destructive"
                                size="sm"
                            >
                                <TbTrash className="h-4 w-4" />
                            </Button>
                        </div>
                        <Image
                            fill
                            className="object-cover cursor-pointer"
                            alt="Image"
                            src={url}
                            onClick={() => {
                                window.location.href = url;
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className=" flex">
                <UploadButton
                    className=""
                    appearance={{
                        button: "bg-black hover:bg-primary/90",
                    }}
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        console.log("Files: ", res);
                        // setUploadedImage(res[0].url);
                        onUpload(res);
                    }}
                    onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                    }}
                />
            </div>
        </div>
    );
};

export default ImageUpload;
