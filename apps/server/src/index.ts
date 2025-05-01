import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user"

const app = express();

const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

app.use("/api", userRouter)



app.listen(PORT, () => {
    console.log(`server running on port : ${PORT}`)
})