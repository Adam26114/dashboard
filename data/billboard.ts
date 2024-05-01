import { db } from "@/lib/db";
export const getBillboardById = async (id: string) => {
    try {
        const billboard = await db.billboard.findUnique({
            where: {
                id,
            },
        });

        return billboard;
    } catch {
        return null;
    }
};
