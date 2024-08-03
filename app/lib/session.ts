import { auth } from "@clerk/nextjs/server"
import prisma from "./prisma";

export const getCurrentUser = async () => {
    const {userId, sessionClaims } = auth();
    if (!userId) throw new Error('Unauthorized');
    let currentUser = await prisma.user.findUnique({
        where: {
            clerkId: userId
        }
    })
    if (!currentUser && sessionClaims?.email) {
        currentUser = await prisma.user.create({
          data: {
            email:  sessionClaims.email.toString(),
            clerkId: userId,
          },
        });
      }
    return currentUser
}