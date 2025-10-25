/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `news_post` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "news_post_slug_key" ON "news_post"("slug");
