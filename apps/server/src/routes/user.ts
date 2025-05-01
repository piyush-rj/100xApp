import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient()
const router = express.Router();

// @ts-ignore
router.post('/auth/oauth', async (req: Request, res: Response) => {
  try {
    const { oauthId, name, email, image } = req.body;

    if (!oauthId || !email) {
      return res.status(400).json({ error: 'Missing data' });
    }

    const user = await client.user.upsert({
        where: {
            email,
            name,
            oauthId,
            image
        }, 
        update: {
            oauthId,
            name,
            image
        }, 
        create: {
            oauthId,
            name,
            email,
            image
        }
    })

    return res.json({
        success: true,
        user
    })

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export const userRouter = router;
