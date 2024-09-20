-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "url" TEXT,
    "beds" INTEGER,
    "baths" DOUBLE PRECISION,
    "yearBuilt" INTEGER,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "hoaDues" TEXT,
    "regionId" TEXT,
    "sqrft" TEXT,
    "lotSize" TEXT,
    "propertyType" INTEGER,
    "price" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "listDate" TIMESTAMP(3),
    "lastSoldDate" TIMESTAMP(3),

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);
