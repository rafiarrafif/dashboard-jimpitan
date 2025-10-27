import z from "zod";

export const CreateNewHouseholdSchema = z.object({
  headOfHousehold: z.string().min(1, "Nama Perwakilan Keluarga wajib diisi"),
  householdPronoun: z.string().min(1, "Sapaan wajib dipilih"),
  firstNeighborId: z.string().optional(),
  secondNeighborId: z.string().optional(),
});
