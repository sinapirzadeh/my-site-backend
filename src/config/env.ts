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
  // mail
  m_host: process.env.MAIL_HOST as string,
  m_port: Number(process.env.MAIL_PORT),
  m_user: process.env.MAIL_USER as string,
  m_pass: process.env.MAIL_PASS as string,
  m_from: process.env.MAIL_FROM as string,
};

export default env;
