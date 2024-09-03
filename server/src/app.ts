import express from "express";
import cors from "cors";
import morgan from "morgan";
import errorHandlingMiddleware from "./errorHandlingMiddleware";
import messageRoutes from "./messageRoutes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/messages", messageRoutes);

app.use(errorHandlingMiddleware);


export default app;
