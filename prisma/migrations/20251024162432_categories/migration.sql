-- CreateEnum
CREATE TYPE "onPublish" AS ENUM ('publish', 'unpublish');

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image_url" TEXT,
    "slug" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "is_publish" "onPublish" NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "news_post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "news_post" ADD CONSTRAINT "news_post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
