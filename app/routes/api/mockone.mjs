import express from "express";
import { mockTest } from "./mock/test.mock.mjs";

const mockone = express.Router();
const pathApi = process.env.API;
const pathApiAndMeetup = pathApi + process.env.MEETUP;

mockone.get("/", function (req, res) {
  res.redirect(pathApiAndMeetup);
});

mockone.get(pathApiAndMeetup, function (req, res) {
  res.json(mockTest);
});

export default mockone;
