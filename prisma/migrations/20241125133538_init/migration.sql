-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Guitar" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "likeScore" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Guitar" ("brand", "id", "name", "price") SELECT "brand", "id", "name", "price" FROM "Guitar";
DROP TABLE "Guitar";
ALTER TABLE "new_Guitar" RENAME TO "Guitar";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
