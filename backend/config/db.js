import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://helloworld32130:Jcwdlove@cluster0.i31aywg.mongodb.net/Kfc"
    )
    .then(() => console.log("Db Connected"));
};
