import express, { NextFunction } from "express"
import cors from "cors"
import session from "express-session"
import passport from "passport"
import helmet from "helmet"
import dotenv from "dotenv"


dotenv.config();

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(helmet())
app.use(express.json())


app.use(session({
    secret: process.env.SESSION_SECRET || "iambatman",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 48 * 60 * 60 * 1000
    }
}))

app.use(passport.initialize())
app.use(passport.session())

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

