import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createUser =  prisma.user.create({
    data: {
      username: "john_doe",
      email: "john@gmail.com",
    },
  });

  const updateUser =  prisma.user.update({
    where: {
      id: 6,
    },
    data: {
      age: 50,
    },
  });

    const [userData, updateData] = await prisma.$transaction([
        createUser,
        updateUser
    ]);

    console.log({userData, updateData});
};

main();