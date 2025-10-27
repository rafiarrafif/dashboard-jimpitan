import z from "zod";

export const CreateNewHouseholdSchema = z
  .object({
    headOfHousehold: z.string().min(1, "Nama Perwakilan Keluarga wajib diisi"),
    householdPronoun: z.string().min(1, "Sapaan wajib dipilih"),
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
