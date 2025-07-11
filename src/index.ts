import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
//   const result = await prisma.post.create({
//     data: {
//         title: "Here is a title",
//         content: "Here is some content",
//         author: "Safi"
//     },
//   });

const getAllPosts = await prisma.post.findMany();
console.log(getAllPosts);
};

main();
