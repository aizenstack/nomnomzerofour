-- CreateEnum
CREATE TYPE "roleUser" AS ENUM ('own', 'admin', 'external_user');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "roleUser" NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
