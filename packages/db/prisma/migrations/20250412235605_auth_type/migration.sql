-- CreateEnum
CREATE TYPE "AuthType" AS ENUM ('Google');

-- AlterTable
ALTER TABLE "_GameToTeam" ADD CONSTRAINT "_GameToTeam_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_GameToTeam_AB_unique";

-- AlterTable
ALTER TABLE "_GameToUser" ADD CONSTRAINT "_GameToUser_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_GameToUser_AB_unique";
