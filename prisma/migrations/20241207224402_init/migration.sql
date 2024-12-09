-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "register_date" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_tasks" ("description", "id", "priority", "register_date", "sector", "status", "user_id") SELECT "description", "id", "priority", "register_date", "sector", "status", "user_id" FROM "tasks";
DROP TABLE "tasks";
ALTER TABLE "new_tasks" RENAME TO "tasks";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
