import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://kimye0808:1234@cluster0.7z6drok.mongodb.net/"
  );

  return client;
}
