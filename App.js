import express from "express";
import ErrorMiddleware from "./Middleware/Error.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

config({
  path: "./config/config.env",
});
const app = express();

// Using Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors({origin:process.env.FRONTEND_URL, credentials:true, methods: ["GET", "POST", "PUT", "DELETE"],}));
// Importing & Using Routes
import course from "./Routes/CourseRoutes.js";
import user from "./Routes/UserRoutes.js";
import other from "./Routes/OtherRoutes.js";

app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", other);

export default app;


app.get("/", (req, res)=>
res.send(
  `<h1>Site is working. Click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
));
app.use(ErrorMiddleware);
