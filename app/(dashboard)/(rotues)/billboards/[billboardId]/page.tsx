import { db } from "@/lib/db";
import BillboardForm from "./components/BillboardForm";
import { getBillboardById } from "@/data/billboard";

const BillboardPage = async ({
    params,
}: {
    params: { billboardId: string };
}) => {
    const billboard = await getBillboardById(params.billboardId);
    

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardForm initialData={billboard} />
            </div>
        </div>
    );
};

export default BillboardPage;
