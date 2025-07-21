-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "date" TEXT,
    "location" TEXT,
    "thumbnailContext" TEXT,
    "description" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectTag" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "ProjectTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectTagsOnProjects" (
    "projectId" INTEGER NOT NULL,
    "projectTagId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "ProjectTagsOnProjects_pkey" PRIMARY KEY ("projectId","projectTagId")
);

-- AddForeignKey
ALTER TABLE "ProjectTagsOnProjects" ADD CONSTRAINT "ProjectTagsOnProjects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTagsOnProjects" ADD CONSTRAINT "ProjectTagsOnProjects_projectTagId_fkey" FOREIGN KEY ("projectTagId") REFERENCES "ProjectTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
