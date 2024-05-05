"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { Separator } from "@radix-ui/react-separator";
import { DataTable } from "@/components/ui/data-table";

import { CategoryColumn, columns } from "./columns";
import { ApiList } from "@/components/ui/api-list";
import { TbPlus } from "react-icons/tb";

interface CategoryClientProps {
    data: CategoryColumn[];
}

const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
    const router = useRouter();

    return (
        <>
            <div className=" flex items-center  justify-between">
                <Heading
                    title={`Categories (${data.length})`}
                    description="Manage categories for your store"
                />
                <Button
                    onClick={() =>
                        router.push(`/categories/new`)
                    }
                >
                    <TbPlus className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data} />
            <Heading title="API" description="API calls for categories" />
            <Separator />
            <ApiList entityName="categories" entityIdName="categoryId" />
        </>
    );
};

export default CategoryClient;
