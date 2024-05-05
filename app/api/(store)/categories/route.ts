import { NextResponse } from "next/server";
import { auth } from "@/auth";

import { db } from "@/lib/db";

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session) {
            return new NextResponse("Unauthorized", { status: 403 });
        }

        
        const body = await req.json();

        const { name, billboardId } = body;

        if (!name) return new NextResponse("Name is required", { status: 400 });

        if (!billboardId)
            return new NextResponse("Billboard id is required", {
                status: 400,
            });

        const category = await db.category.create({
            data: {
                name,
                billboardId,
            },
        });

        return NextResponse.json(category);
    } catch (error) {
        console.log("[CATEGORIES_POST]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const session = await auth();
        if (!session) {
            return new NextResponse("Unauthorized", { status: 403 });
        }

        const categories = await db.category.findMany();

        return NextResponse.json(categories);
    } catch (error) {
        console.log("[CATEGORIES_GET]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
