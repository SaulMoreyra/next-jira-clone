interface SeedData {
  entries: SeedEntry[];
}

export interface SeedEntry {
  description: string;
  createtAt: number;
  status: string;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Cillum ut eu qui non elit nostrud consectetur adipisicing sunt anim dolore ad voluptate do.",
      status: "pending",
      createtAt: Date.now(),
    },
    {
      description:
        "Velit anim consequat labore exercitation amet reprehenderit pariatur esse ea velit ad excepteur elit tempor.",
      status: "in-progress",
      createtAt: Date.now(),
    },
    {
      description: "Sint quis cupidatat officia proident anim aute.",
      status: "finished",
      createtAt: Date.now() - 1000000,
    },
    {
      description:
        "Ad sint consectetur veniam dolor aliquip est commodo sunt minim sit ipsum magna fugiat laboris.",
      status: "pending",
      createtAt: Date.now() - 100000,
    },
  ],
};
