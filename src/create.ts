import { PrismaClient, userRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
//   const singleCreate = await prisma.user.create({
//       data: {
//           username: "siri",
//           email: "siri@gmail.com",
//           role: userRole.USER,

//       }
//   })

  // console.log({ singleCreate });

  // const createProfile = await prisma.profile.create({
  //     data: {
  //         bio: "This is a sample bio",
  //         userId: 1
  //     }
  // })ß

  // console.log({createProfile});

//   const createCategory = await prisma.category.createMany({
//     data: [
//       { name: "Tech" },
//       { name: "Fitness" },
//       { name: "Travel" },
//       { name: "Food" },
//       { name: "Lifestyle" },
//     ],
//   });

//   console.log({ createCategory });

    const createPost = await prisma.post.create({
        data: {
        title: "My only Post",
        content: "This is the content of my only post.",
        // published: true,
        // authorUser: {
        //     connect: { id: 1 }, 
        // },
        authorId:1,
        postCategory: {
            create: [
            // { category: { connect: { id: 1 } } }, 
            {categoryId: 4},
            {categoryId: 5},
            {categoryId: 3}
            ],
        },
        },
        include: {
            postCategory: true
        }
    });
    
    // console.log({ createPost });
    // console.log(JSON.stringify(createPost, null, 2));

};

main();
