import {NextFunction, Request, Response} from "express";
import {messageManager} from "./messageManager";

export function postMessage(req: Request, res: Response, next: NextFunction) {
    try {
        const {content} = req.body;
        const newMessage = messageManager.createMessage(content);
        res.status(201).json({
            data: newMessage,
        });
    } catch (err) {
        next(err);
    }
}

export function getMessages(req: Request, res: Response) {
    res.json({
        data: messageManager.getAllMessages()
    });
}
