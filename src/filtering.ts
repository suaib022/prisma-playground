import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "only",
          },
        },
      ],
    },
  });

  const startWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "s",
      },
    },
  });
  const endWith = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "m",
      },
    },
  });
  const equals = await prisma.user.findMany({
    where: {
      username: {
        equals: "alice",
      },
    },
  });

  const usernames = ["alice", "bob", "siri"];

  const findProvidedUsers = await prisma.user.findMany({
    where: {
      username: {
        in: usernames,
      },
    },
  });

  const inDepthFiltering = await prisma.user.findMany({
    where: { id: 1 },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
              // post: true
            },
          },
        },
      },
    },
  });

  //   console.log("and filtering", andFiltering);
  //   console.log("or filtering", orFiltering);
  //   console.log("not filtering", notFiltering);
  //   console.log("startWith", startWith);
  //   console.log("endWith", endWith);
  //   console.log("equals", equals);
  //   console.log("findProvidedUsers", findProvidedUsers);
  //   console.dir(inDepthFiltering, {depth: Infinity});
};

main();
