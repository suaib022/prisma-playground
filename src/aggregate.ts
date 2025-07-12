import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

    // find average age of users
    const avgAge = await prisma.user.aggregate({
        _avg: {
            age: true,
        },
    })

    // sum of all ages
    const sumAge = await prisma.user.aggregate({
        _sum: {
            age: true,
        },
    })

    // count of all users
    const countUsers = await prisma.user.aggregate({
        _count: {
            id: true,
        },
    })

    // maximum age of users
    const maxAge = await prisma.user.aggregate({
        _max: {
            age: true,
        },
    })

    // minimum age of users
    const minAge = await prisma.user.aggregate({
        _min: {
            age: true,
        }
    })

    console.log({avgAge});
    console.log({sumAge});
    console.log({countUsers});
    console.log({maxAge});
    console.log({minAge});
}

main()