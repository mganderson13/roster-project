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

// /** CHANGE FOR ADDING A STUDENT */
// router.post("/", async (req, res, next) => {
//   try {
//     const { description, done } = req.body;
//     if (!description) {
//       throw new ServerError(400, "Description required.");
//     }

//     const task = await prisma.task.create({
//       data: {
//         description,
//         done: done ?? false,
//         user: { connect: { id: res.locals.user.id } },
//       },
//     });
//     res.json(task);
//   } catch (err) {
//     next(err);
//   }
// });

// /** CHANGE FOR DELETING A STUDENT */
// router.delete("/:id", async (req, res, next) => {
//   try {
//     const id = +req.params.id;

//     const task = await prisma.task.findUnique({ where: { id } });
//     validateTask(res.locals.user, task);

//     await prisma.task.delete({ where: { id } });
//     res.sendStatus(204);
//   } catch (err) {
//     next(err);
//   }
// });

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