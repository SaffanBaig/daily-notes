import prisma from "@/app/lib/prisma"
import { getCurrentUser } from "@/app/lib/session"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(request: Request, {params}: {params: {id: string}} ) {
    const id = params.id
    const data = await request.json()    
    const text = data.text
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return NextResponse.json({ error: "Unauthorized" })
    }
    if (!id) {
        return NextResponse.json({ error: "No id provided" })
    }
    const note = await prisma.note.update({
        where: {
            id: id,
        },
        data: {
            text: text
        }
    })
    return NextResponse.json(note)
}