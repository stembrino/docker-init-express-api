import express from "express";

const mockTest = express.Router();

mockTest.get("/", function (req, res) {
  res.json({success: "Tests!"})
});

export default mockTest;
