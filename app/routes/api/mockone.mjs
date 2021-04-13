import express from "express";
import { mockTest } from "./mock/test.mock.mjs";

const mockone = express.Router();
const pathApi = process.env.API;
const pathApiAndMeetup = pathApi + process.env.MEETUP;

mockone.post("/", function (req, res) {
  console.log("body", req.body);
  res.sendStatus(200);
});

mockone.get(pathApiAndMeetup, function (req, res) {
  res.json(mockTest);
});

export default mockone;
