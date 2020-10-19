import { getAvailability as getFloorAvailability } from "./Floor";

export async function getTodayEarnings() {
  return {
    amount: 7580,
  };
}

export async function getAvailability() {
  return {
    totalSpots: 50,
    totalAvailableSpots: 29,
    floors: await getFloorAvailability(),
  };
}
