import mongoose from "mongoose";
import { dbConnect } from "../lib/database";
import Card from "../model/Card";

export const getCards = async () => {
  await dbConnect();
  const data = await Card.find().populate("user");
  console.log(data);
  return data.map(({ id, content, user }) => ({
    id,
    content,
    name: user.name,
  }));
};
