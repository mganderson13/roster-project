const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;


/** Sends all students */
router.get("/", async (req, res, next) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (err) {
    next(err);
  }
});


/** CHANGE FOR SINGLE STUDENT */
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const student = await prisma.student.findUnique({ where: { id } });

    res.json(student);
  } catch (err) {
    next(err);
  }
});

/** CHANGE FOR ADDING A STUDENT */
router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, imageUrl, gpa } = req.body;
    if (!firstName || !lastName || !email || !imageUrl || !gpa) {
      // Throw a ServerError with a 400 status and a custom error message
      throw new ServerError(400, "All fields are required.");}
    const student = await prisma.student.create({
      data: {
        firstName,
        lastName,
        email, 
        imageUrl,
        gpa,
      },
    });
    res.json(student);
  } catch (err) {
    next(err);
  }
});

/** CHANGE FOR DELETING A STUDENT */
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const student = await prisma.student.findUnique({ where: { id } });

    await prisma.student.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// /** CHANGE FOR UPDATING A STUDENT */
// router.put("/:id", async (req, res, next) => {
//   try {
//     const id = +req.params.id;
//     const { description, done } = req.body;

//     const task = await prisma.task.findUnique({ where: { id } });
//     validateTask(res.locals.user, task);

//     const updatedTask = await prisma.task.update({
//       where: { id },
//       data: { description, done },
//     });
//     res.json(updatedTask);
//   } catch (err) {
//     next(err);
//   }
// });