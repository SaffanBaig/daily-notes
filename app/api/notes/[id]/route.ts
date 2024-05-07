import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request: Request, {params}: {params: {id: string}}) {
    const id = params.id
    const note = await prisma.note.findFirst({
        where: {
            id: id
    }})
    return NextResponse.json(note)
}