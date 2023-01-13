import { config } from "dotenv";

config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://RameshM420:ramesh2911@cluster0.qv2unad.mongodb.net/?retryWrites=true&w=majority";
