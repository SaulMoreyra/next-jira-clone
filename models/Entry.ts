import mongoose, { Model, mongo, Schema } from "mongoose";
import { Entry } from "../interfaces";

export interface IEntry extends Entry {}

const entrySchema = new Schema({
  description: { type: String, required: true },
  createtAt: { type: Number },
  status: {
    type: String,
    enum: {
      values: ["pending", "in-progress", "finished"],
      message: "{VALUE} no valid status",
      default: "pending",
    },
  },
});

const EntryModel: Model<IEntry> =
  mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default EntryModel;
