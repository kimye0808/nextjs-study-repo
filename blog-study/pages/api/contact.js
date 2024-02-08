import { MongoClient } from "mongodb";

/*api route*/
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    //db에 저장할 data
    const newMessage = {
      email,
      name,
      message,
    };

    //connect db
    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.7z6drok.mongodb.net/`;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "could not connect to database" });
      return;
    }
    const db = client.db();

    //mongodb collection 'messages'만들고 추가
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "fail to store message" });
      return;
    }

    client.close();

    res.status(201).json({ message: newMessage });
  }
}
