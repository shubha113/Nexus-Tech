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
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Enable CORS
const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if(!origin || whitelist.indexOf(origin) !== -1){
      callback(null, true)
    }else{
      callback(new Error("Not allowed  by cors"))
    }
  },
  Credentials:true,
}
app.use(cors(corsOptions))
/*app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);*/

// Importing & Using Routes
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import other from "./routes/otherRoutes.js";

app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", other);

app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
  )
);

app.use(ErrorMiddleware);

export default app;
