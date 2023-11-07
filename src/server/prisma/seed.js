const prisma = require("../prisma");

/** Seeds the database with students */
const seed = async () => {
  try {
    await prisma.student.create({
      data: {
        firstName: 'Angelina',
        lastName: 'Jolie',
        email: 'angelinajolie@hotcelebs.com',
        imageUrl: 'https://www.hollywoodreporter.com/wp-content/uploads/2017/08/AngelinaJolieSOPHP2017.jpg?w=800',
        gpa: 4.01 
      },
    });

    await prisma.student.create({
      data: {
        firstName: 'Nicki',
        lastName: 'Minaj',
        email: 'pullupinmytonka@colorofwillywonka.com',
        imageUrl:'https://pbs.twimg.com/media/FcoIEgUX0AIpqpw.jpg',
        gpa: 4.02
      },
    });

    await prisma.student.create({
      data: {
        firstName: 'Bella',
        lastName: 'Hadid',
        email: 'itsgivingbella@model.com',
        imageUrl:'https://i.dailymail.co.uk/1s/2022/03/07/15/55046933-10585859-Stepping_out_Bella_Hadid_continued_to_leave_her_mark_on_Paris_Fa-a-1_1646665388525.jpg',
        gpa: 3.2
      },
    });

    await prisma.student.create({
      data: {
        firstName: 'Jack',
        lastName: 'Black',
        email: 'letsrock@schoolofrock.com',
        imageUrl:'https://static.wikia.nocookie.net/schoolofrock/images/4/4f/Dewey-finn.jpg/revision/latest?cb=20090330021401',
        gpa: 1.7
      },
    });

    await prisma.student.create({
      data: {
        firstName: 'Frank',
        lastName: 'Ocean',
        email: 'blondedlife@nike.com',
        imageUrl:'https://images.squarespace-cdn.com/content/54a399eee4b00f7c5fa76a99/1474940491244-37IYJ3E0S6OTR7IL446L/?content-type=image%2Fjpeg',
        gpa: 4.6
      },
    });

    await prisma.student.create({
      data: {
        firstName: 'Paris',
        lastName: 'Hilton',
        email: 'paris@simplelife.com',
        imageUrl: 'https://i.pinimg.com/736x/1c/be/17/1cbe17142cf15b465b621df50e0dc6e4.jpg',
        gpa: 2.2
      },
    });

    await prisma.student.create({
      data: {
        firstName: 'Lucy',
        lastName: 'Liu',
        email: 'hello@lucyliu.com',
        imageUrl: 'https://i.pinimg.com/originals/9f/a8/f4/9fa8f4a30f4e6f0f7078bb9bc9ac91b5.jpg',
        gpa: 4.0
      },
    });

    console.log('Seed data successfully inserted!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();