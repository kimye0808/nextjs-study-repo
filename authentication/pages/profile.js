import UserProfile from "../components/profile/user-profile";
import { getServerSession } from "next-auth";

function ProfilePage() {
  return <UserProfile />;
}

//서버 사이드에서 유효하지 않은 접속 체크(서버 사이드 페이지 가드)
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false, //redirect가 영구적용인지 임시인지
      },
    };
  }
  return {
    props: { session },
  };
}
export default ProfilePage;
