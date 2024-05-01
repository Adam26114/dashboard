"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
// import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { DataTable } from "@/components/ui/data-table";

import { BillboardColumn, columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { TbPlus } from "react-icons/tb";
import { ApiList } from "@/components/ui/api-list";

interface BillboardsClientProps {
    data: BillboardColumn[];
}

const BillboardsClient: React.FC<BillboardsClientProps> = ({ data }) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className=" flex items-center  justify-between">
                <Heading
                    title={`Billboards (${data.length})`}
                    description="Manage billboards for your store"
                />
                <Button
                    onClick={() =>
                        router.push(`/billboards/new`)
                    }
                >
                    <TbPlus className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="label" columns={columns} data={data} />
            <Heading title="API" description="API calls for Billboards" />
            <Separator />
            <ApiList entityName="billboards" entityIdName="billboardId" />
        </>
    );
};

export default BillboardsClient;
