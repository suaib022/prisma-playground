import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // Delete a single post by ID
    const singleDelete = await prisma.post.delete({
        where: {
            id: 1,
        },
    });

    // Delete multiple posts based on a condition
    const multipleDeletes = await prisma.post.deleteMany({
        where: {
            published: false,
        },
    });

    console.log({ singleDelete, multipleDeletes });
}

main();