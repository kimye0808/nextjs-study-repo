import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = getServerSession(req, res);

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }
}
