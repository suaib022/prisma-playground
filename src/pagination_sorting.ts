import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const offsetPagination = await prisma.post.findMany({
        skip: 0, 
        take: 10, 
        orderBy: {
            createdAt: 'desc', 
        },
    })

    const cursorPagination = await prisma.post.findMany({
        skip: 0,
        take: 10, 
        cursor: {
            id: 5, 
        },
        orderBy: {
            createdAt: 'desc', 
        },
    })

    const sorting = await prisma.post.findMany({
        orderBy: [
            { title: 'asc' }, 
            { createdAt: 'desc' }, 
        ],
    });
}

main();