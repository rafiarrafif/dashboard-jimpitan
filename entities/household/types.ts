import { Transaction } from "@/generated/prisma/client";

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
export type WeeklyDues = {
  id: string;
  householdId: string;
  paidWith: unknown;
  weekCode: string;
  amount: number;
};
export type HouseholdCheckDues = {
  id: string;
  householdName: string;
  transactions: Transaction[];
  _count: {
    WeeklyDues: number;
  };
};
export type HouseholdCheckPayment = {
  id: string;
  householdName: string;
  WeeklyDues: WeeklyDues[];
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
