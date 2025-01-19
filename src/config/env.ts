import dotenv from "dotenv";

dotenv.config();

const env = {
  dbAddress: process.env.DB_ADDRESS as string,
  serverPort: Number(process.env.SERVER_PORT),
  jwt: process.env.JWT_KEY as string,
  accessKeyId: process.env.ACCESS_KEY as string,
  secretAccessKey: process.env.SECRET_KEY as string,
  bucket: process.env.BUCKET_NAME as string,
  endpoint: process.env.ENDPOINT_STORAGE as string,
};

export default env;
