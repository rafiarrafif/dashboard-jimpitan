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
  householdPronoun: string;
  firstNeighborId?: string;
  secondNeighborId?: string;
};
