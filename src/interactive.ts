import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.$transaction(async (transactionClient) => {
    // 1
    const getAllPosts = await transactionClient.post.findMany({
      where: {
        title: {
          contains: "title",
        },
      },
    });

    // 2
    const countPosts = await transactionClient.post.count();

    // 3
    const updateUserAge = await transactionClient.user.update({
      where: {
        id: 6,
      },
      data: {
        age: 19,
      },
    });

    return {
      getAllPosts,
      countPosts,
      updateUserAge
    };
  });

  console.dir({ result }, { depth: Infinity });
};

main();
