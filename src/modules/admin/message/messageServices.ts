import message from "../../../models/message";

export const getMessages = async () => {
  const messages = await message
    .find({ is_delete: false })
    .sort({ is_read: 1 });
  return messages;
};

export const readMessage = async (id: string) => {
  const isDeleted = await message.findOneAndUpdate(
    { _id: id },
    { is_read: true },
    { new: true }
  );
  return isDeleted ? true : false;
};

export const delMessage = async (id: string): Promise<void> => {
  try {
    await message.findOneAndUpdate({ _id: id }, { is_delete: true });
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Error on Send Msg"
    );
  }
};
