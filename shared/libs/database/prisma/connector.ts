import { PrismaClient } from "@/generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { adapter } from "./adapter";

export const prisma = new PrismaClient({ adapter }).$extends(withAccelerate());
