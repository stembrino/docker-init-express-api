import express from "express";
import mockone from "./api/mockone.mjs";
import mockTest from "./tests/mockTest.mjs";

const router = express.Router();
router.use("/", mockone);
router.use(process.env.TEST, mockTest);

export default router;