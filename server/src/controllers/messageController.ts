import { NextFunction, Request, Response } from "express";
import { messageManager } from "../shared/messageManager";

export const postMessage = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { content } = req.body;
    messageManager.validateMessage(content);
    const newMessage = messageManager.createMessage(content);
    res.status(201).json({
      data: newMessage,
    });
  } catch (err) {
    next(err);
  }
};

export const getMessages = (req: Request, res: Response) => {
  res.json({
    data: messageManager.getAllMessages(),
  });
};
