-- CreateTable
CREATE TABLE "jadwal_jimpit" (
    "id" SERIAL NOT NULL,
    "members" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "dayId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jadwal_jimpit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "days" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "days_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "jadwal_jimpit" ADD CONSTRAINT "jadwal_jimpit_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "days"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
