import nodemailer, { Transporter } from "nodemailer";
import env from ".././config/env";

const transporter: Transporter = nodemailer.createTransport({
  host: env.m_host,
  port: env.m_port,
  secure: false,
  from: env.m_from,
  auth: {
    user: env.m_user,
    pass: env.m_pass,
  },
});

export const sendEmail = async (): Promise<void> => {
  try {
    const mailOptions = {
      from: `My Site : ${env.m_from}`,
      to: "sinapirzadeh1@gmail.com",
      subject: "پیامی از طرف سایت",
      text: "صندوق پیام‌ها: https://sinapirzadeh.ir/admin/messages",
      html: '<a href="https://sinapirzadeh.ir/admin/messages">صندوق پیام‌ها</a>',
      headers: {
        "x-liara-tag": "my_site_mail",
      },
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
};
