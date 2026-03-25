import mongoose, { Schema, Document } from "mongoose";

export interface ITechnology extends Document {
  name: string;
  iconLink?: string;
}

const TechnologySchema = new Schema<ITechnology>({
  name: { type: String, required: true },
  iconLink: { type: String },
});

export default mongoose.models.Technology ||
  mongoose.model<ITechnology>("Technology", TechnologySchema);