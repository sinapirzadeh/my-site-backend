import message from "../../../models/message";

export const getMessages = async () => {
  const messages = await message
    .find({ is_delete: false })
    .sort({ is_read: 1 });
  return messages;
};

export const readMessage = async (id: string) => {
  const isDeleted = await message.updateOne(
    { _id: id },
    { is_read: true },
    { new: true }
  );
  return isDeleted ? true : false;
};

export const delMessage = async (id: string) => {
  const isDeleted = await message.updateOne(
    { _id: id },
    { is_delete: true },
    { new: true }
  );
  return isDeleted ? true : false;
};
