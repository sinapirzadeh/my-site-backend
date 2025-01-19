// multerConfig.ts
import multer, { FileFilterCallback } from "multer";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"; // AWS SDK v3
import multerS3 from "multer-s3";
import { Request } from "express";
import env from "../config/env";

// پیکربندی AWS S3 با استفاده از AWS SDK v3
const s3 = new S3Client({
  credentials: {
    accessKeyId: env.accessKeyId,
    secretAccessKey: env.secretAccessKey,
  },
  region: "us-east-1", // منطقه‌ای که S3 Bucket در آن قرار دارد
  endpoint: env.endpoint,
});

// تنظیمات ذخیره‌سازی با استفاده از S3
const storage = multerS3({
  s3: s3 as any,
  bucket: env.bucket as string, // نام سطل (bucket) S3 شما
  acl: "public-read", // سطح دسترسی فایل‌ها
  key: (req: Request, file, cb) => {
    const timestamp = Date.now(); // زمان برای یکتاسازی نام فایل
    const fileName = `${timestamp}-${file.originalname.replace(/\s+/g, "-")}`;
    cb(null, fileName);
  },
});

// فیلتر کردن فایل‌ها (فقط تصاویر)
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!") as any, false); // پیغام خطای دقیق‌تر
  }
};

// تنظیمات Multer برای استفاده از S3
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // محدودیت حجم فایل
  },
});

export default upload;
