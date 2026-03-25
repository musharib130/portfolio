import mongoose, { Schema, Document, Types } from "mongoose";
import { ITechnology } from "./Technology";

export interface IProject extends Document {
  title: string;
  coverImage?: string;
  overview: string;
  keyFeatures?: string;
  architecture?: string;
  securityConsiderations?: string;
  githubLink?: string;
  liveDemoLink?: string;
  technologies: Types.ObjectId[]; // references Technology
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    coverImage: String,
    overview: { type: String, required: true },
    keyFeatures: String,
    architecture: String,
    securityConsiderations: String,
    githubLink: String,
    liveDemoLink: String,
    technologies: [{ type: Schema.Types.ObjectId, ref: "Technology" }],
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);