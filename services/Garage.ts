import { getAvailability as getFloorAvailability } from "./Floor";

export async function getTodayEarnings() {
  return {
    amount: 7580,
  };
}

export async function getAvailability() {
  const floors = await getFloorAvailability();
  return {
    totalSpots: floors.reduce((sum, floor) => (sum += floor.totalSpots), 0),
    totalAvailableSpots: floors.reduce(
      (sum, floor) => (sum += floor.totalAvailableSpots),
      0
    ),
    floors,
  };
}
