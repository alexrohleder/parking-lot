export async function getAvailability(level?: number) {
  return {
    0: {
      totalSpots: 25,
      totalAvailableSpots: 4,
    },
    1: {
      totalSpots: 25,
      totalAvailableSpots: 16,
    },
  };
}
