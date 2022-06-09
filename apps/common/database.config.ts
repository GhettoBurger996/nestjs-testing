import * as path from "path";
import * as dotenv from "dotenv";

const dotenv_path = path.resolve(process.cwd(), `.env`);
const result = dotenv.config({ path: dotenv_path });
if (result.error) {
  console.log("ERROR: could not find dotenv_path", dotenv_path);
}

export const MongoConfig = process.env.MONGO_HOST;
