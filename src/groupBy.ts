import { PrismaClient } from "@prisma/client";      

const prisma = new PrismaClient();

const main = async () => {
    // group by category and count posts in each category
    const groupedPosts = await prisma.post.groupBy({
        by: ['published'],
        _count: {
            title: true,
        },
        having:{
            authorId:{
                _sum: {
                    gt: 21
                }
            }
        }})


    console.dir({ groupedPosts }, {depth: Infinity});
}

main();