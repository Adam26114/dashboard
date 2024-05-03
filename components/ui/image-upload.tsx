"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TbFilePlus, TbTrash } from "react-icons/tb";
import { UploadButton } from "@/utils/uploadthing";
import Loading from "@/components/loading";

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
    const [imagesLoading, setImagesLoading] = useState<{ [url: string]: boolean }>({});

    useEffect(() => {
        setIsMounted(true);
        value.forEach((url) => {
            setImagesLoading((prevState) => ({ ...prevState, [url]: true }));
        });
    }, [value]);

    if (!isMounted) {
        return null;
    }

    const onUpload = (result: any) => {
        onChange(result[0].url);
    };

    const handleImageLoad = (url: string) => {
        setImagesLoading((prevState) => ({ ...prevState, [url]: false }));
    };

    const handleImageError = (url: string) => {
        setImagesLoading((prevState) => ({ ...prevState, [url]: false }));
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
                        <div className="relative w-full h-full">
                            { imagesLoading[url] && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                    <Loading type="spinner"/>
                                </div>
                            )}
                            <Image
                                fill
                                className={`object-cover cursor-pointer ${
                                    imagesLoading[url] ? 'opacity-0' : 'opacity-100'
                                } transition-opacity duration-300`}
                                alt="Image"
                                src={url}
                                onClick={() => {
                                    window.location.href = url;
                                }}
                                onLoad={() => handleImageLoad(url)}
                                onError={() => handleImageError(url)}
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className=" flex">
                <UploadButton
                    className=""
                    appearance={{ button: "bg-black hover:bg-primary/90" }}
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        console.log("Files: ", res);
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