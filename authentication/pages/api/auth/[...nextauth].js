import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        //db로부터 정보를 가져온다
        const client = await connectToDatabase();
        const userCollection = client.db().collection("users");
        const user = await userCollection.findOne({ email: credentials.email });
        if (!user) {
          client.close();
          throw new Error("No user found!");
        }
        //유효 password 검증
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          client.close();

          throw new Error("Could not log you in!");
        }

        client.close();
        //authorize 내부에서 객체를 리턴하면 JWT로 변환
        return { email: user.email };
      },
    }),
  ],
});
