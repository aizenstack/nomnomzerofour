/*
  Warnings:

  - You are about to drop the column `author` on the `news_post` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `news_post` table without a default value. This is not possible if the table is not empty.
  - Made the column `image_url` on table `news_post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "news_post" DROP COLUMN "author",
ADD COLUMN     "authorId" INTEGER NOT NULL,
ALTER COLUMN "image_url" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "news_post" ADD CONSTRAINT "news_post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
