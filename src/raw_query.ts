import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
    const posts = await prisma.$queryRaw`SELECT * FROM "posts"`
    console.log(posts)

    // delete table data
    await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`
    await prisma.$queryRaw`TRUNCATE TABLE "categories" CASCADE`
};

rawQuery();