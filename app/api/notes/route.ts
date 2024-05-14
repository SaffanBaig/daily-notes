import { prisma } from "@/app/lib/prisma";
import { getCurrentUser } from "@/app/lib/session";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const date = searchParams.get("date")
    if (!date) {
        return NextResponse.json({ error: "No date provided" })
    }
    const currentUser = await getCurrentUser();

    const noteTimeSheet = await prisma.noteTimeSheet.findFirst({
        where: {
            dateCreated: decodeURIComponent(date),
            userId: currentUser?.id
        },
        include: {
            notes: true
        }
    })
    return NextResponse.json(noteTimeSheet)
}