import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const singleUpdate = await prisma.post.update({
        where: {
            id: 1,
        },
        data: {
            title: "Updated Title",
        },
    });

    const multipleUpdates = await prisma.post.updateMany({
        where: {
            published: false,
        },
        data: {
            published: true,
        },
    });

    const upsertPost = await prisma.post.upsert({
        where: {
            id: 2,
        },
        update: {
            title: "Upserted Title",
        },
        create: {
            title: "New Post Title",
            content: "This is a new post.",
            published: false,
            authorUser: {
                connect: { id: 1 } // Replace '1' with a valid user id
            }
        },
    })
}

main();