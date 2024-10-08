import { Router } from "express";
import { postMessage, getMessages } from "../controllers/messageController";

const router = Router();

router.post("/", postMessage);
router.get("/", getMessages);

export default router;
