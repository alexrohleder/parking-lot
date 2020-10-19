export async function getAvailability(level?: number) {
  return [
    {
      level: 0,
      totalSpots: 25,
      totalAvailableSpots: 4,
    },
    {
      level: 1,
      totalSpots: 25,
      totalAvailableSpots: 16,
    },
  ];
}
