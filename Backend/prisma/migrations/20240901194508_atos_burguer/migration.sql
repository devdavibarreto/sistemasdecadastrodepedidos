-- CreateTable
CREATE TABLE "AtosBurguer" (
    "id" SERIAL NOT NULL,
    "pedidos" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL,

    CONSTRAINT "AtosBurguer_pkey" PRIMARY KEY ("id")
);
