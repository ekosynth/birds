import { Router } from "express";
import BirdsRouter from "./birds";
import RootRouter from "./root";

const router = Router();

router.use("/", RootRouter);
router.use("/birds", BirdsRouter);

export default router;
