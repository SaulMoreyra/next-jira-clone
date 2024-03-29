export interface Entry {
  _id: string;
  description: string;
  createtAt: number;
  status: EntryStatus;
}

export type EntryStatus = "pending" | "in-progress" | "finished";
