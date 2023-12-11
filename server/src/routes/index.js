import { Router } from "express";

// import userRouter from "./user.routes";

const getRoutes = () => {
  const router = Router();

  // router.use("/users", userRouter);

  return router;
};

export { getRoutes };
