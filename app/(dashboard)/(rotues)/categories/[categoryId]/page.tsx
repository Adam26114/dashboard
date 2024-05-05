import { db } from "@/lib/db";
import CategoryForm from "./components/CategoryForm";
import { getCategoryById } from "@/data/category";

const CategoryPage = async ({
    params,
}: {
    params: { categoryId: string; storeId: string };
}) => {
    const category = await getCategoryById(params.categoryId);

    const billboards = await db.billboard.findMany();

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoryForm billboards={billboards} initialData={category} />
            </div>
        </div>
    );
};

export default CategoryPage;
