-- CreateTable
CREATE TABLE "AiFeatures" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "email" TEXT,
    "phone" TEXT NOT NULL,

    CONSTRAINT "AiFeatures_pkey" PRIMARY KEY ("id")
);
