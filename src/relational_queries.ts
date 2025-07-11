import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const findUserPosts = await prisma.user.findUnique({
  //     where: {
  //         id: 1
  //     },
  //     include: {
  //         post: true
  //     }
  // });

  // console.log({ findUserPosts });

  const findPublishedPosts = await prisma.user.findMany({
    where: { id: 1 },
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir({findPublishedPosts}, {depth: Infinity});
};

main();
