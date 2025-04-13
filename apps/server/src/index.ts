import { Request, Response, NextFunction } from "express";
import prisma from "@repo/db"
import jwt from "jsonwebtoken"

const SECRET = process.env.JWT_SECRET

export interface AuthRequest extends Request {
    user?: {
        id: string;
        email: string
    }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer")){
            return res.status(403).json({
                message: "invalid token"
            })
        }

        const token = authHeader.split(" ")[1];

        if(!token) {
            return res.status(411).json({
                message: "no token"
            })
        }

        const decoded = jwt.sign(token, SECRET)

        const user = await prisma.user.findUnique({
            where: {
                id: decoded.id
            }
        })
        if(!user) {
            return res.status(403).json({
                message: "user not found"
            })
        }

        req.user = {
            id: decoded.id,
            email: decoded.email
        }

        next();
    } catch (error) {
        console.error(error)
    }
}