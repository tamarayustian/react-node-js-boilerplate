import { connect } from "mongoose";

export const connectToDB = async () => {
  return (resolve, reject) => {
    connect(
      "mongodb://" +
        process.env.MONGO_USERNAME +
        ":" +
        process.env.MONGO_PASSWORD +
        "@" +
        process.env.MONGO_URI +
        "/" +
        process.env.MONGO_DB +
        "?ssl=true&replicaSet=" +
        process.env.MONGO_REPLICA_SET +
        "&authSource=" +
        process.env.MONGO_AUTH_SOURCE
    )
      .then(() => {
        console.log("Mongoose: Successfully connected to MongoDB");
        resolve();
      })
      .catch((error) => {
        console.log(`Mongoose: Error connecting to MongoDB\n${error.message}`);
        reject();
      });
  };
};
