-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mobile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "display" TEXT,
    "display_size" TEXT,
    "resolution" TEXT,
    "os" TEXT,
    "batery" TEXT,
    "weight" TEXT,
    "introduction" TEXT,
    "expert_checks" TEXT,
    "image" TEXT,
    "rating" INTEGER,

    CONSTRAINT "Mobile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Mobile_name_key" ON "Mobile"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Mobile_slug_key" ON "Mobile"("slug");
