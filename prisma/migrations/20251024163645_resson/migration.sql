-- CreateTable
CREATE TABLE "resson" (
    "id" SERIAL NOT NULL,
    "reassonId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "resson_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "resson" ADD CONSTRAINT "resson_reassonId_fkey" FOREIGN KEY ("reassonId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
