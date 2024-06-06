import { auth } from "@clerk/nextjs/server"
import prisma from "./prisma";

export const getCurrentUser = async () => {
    const {userId} = auth();
    if (!userId) throw new Error('Unauthorized');
    const currentUser = await prisma.user.findUnique({
        where: {
            clerkId: userId
        }
    })
    return currentUser
}