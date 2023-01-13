import { Router } from "express";
import {
  createTask,
  deleteTask,
  renderTasks,
  taskToggleDone,
  renderTaskEdit,
  editTask,
} from "../controllers/tasks.controllers";

const router = Router();

// Render all tasks
router.get("/express-mongodb-crud", renderTasks);

router.post("/express-mongodb-crud/tasks/add", createTask);

router.get("/express-mongodb-crud/tasks/:id/toggleDone", taskToggleDone);

router.get("/express-mongodb-crud/tasks/:id/edit", renderTaskEdit);

router.post("/express-mongodb-crud/tasks/:id/edit", editTask);

router.get("/express-mongodb-crud/tasks/:id/delete", deleteTask);

export default router;
