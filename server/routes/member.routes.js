import { createMember, getMembers } from "../controllers/member.controller.js";
import express from "express";

const router = express.Router();

router.route("/").get(getMembers);
router.route("/").post(createMember);

export default router;
