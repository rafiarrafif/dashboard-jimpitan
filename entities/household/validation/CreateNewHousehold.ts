import z from "zod";
import { HouseholdPronoun } from "../types";

export const CreateNewHouseholdSchema = z
  .object({
    headOfHousehold: z.string().min(1, "Nama Perwakilan Keluarga wajib diisi"),
    householdPronoun: z.enum(HouseholdPronoun, "Sapaan tidak valid"),
    firstNeighborId: z.string().optional(),
    secondNeighborId: z.string().optional(),
  })
  .refine(
    (data) =>
      !(
        data.firstNeighborId &&
        data.secondNeighborId &&
        data.firstNeighborId === data.secondNeighborId
      ),
    {
      path: ["secondNeighborId"],
      message: "Tetangga pertama dan tetangga kedua tidak boleh sama",
    }
  );
