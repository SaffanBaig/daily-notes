import { prisma } from "@/app/lib/prisma";
import { getCurrentUser } from "@/app/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    console.log("SEARCH PARAMS ", searchParams)
    const date = searchParams.get("date")
    if (!date) {
        return NextResponse.json({ error: "No date provided" })
    }
    const currentUser = await getCurrentUser();

    console.log(decodeURIComponent(date))
    const noteTimeSheet = await prisma.noteTimeSheet.findFirst({
        where: {
            dateCreated: decodeURIComponent(date),
            userId: currentUser?.id
        },
        include: {
            notes: true
        }
    })
    console.log("NOTE TIMESHEETS ", noteTimeSheet)

    return NextResponse.json(noteTimeSheet)
}