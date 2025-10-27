export interface HouseholdList {
  id: string;
  headOfHousehold: string;
  address: string;
  numberOfMembers: number;
}
export type HouseholdSimpleList = {
  id: string;
  householdName: string;
};
export type CreateHouseholdFormData = {
  headOfHousehold: string;
  householdPronoun: HouseholdPronoun;
  firstNeighborId?: string;
  secondNeighborId?: string;
};
export enum HouseholdPronoun {
  mas = "mas",
  mbak = "mbak",
  bapak = "bapak",
  ibu = "ibu",
  mbah = "mbah",
}
