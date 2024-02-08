import { useEffect, useState } from "react";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import { useSession, getSession } from "next-auth/react";

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true);

  // //session객체 확인(인증 되었는지 확인), 없으면 redirect
  // useEffect(() => {
  //   getSession().then((session) => {
  //     setIsLoading(false);
  //     if (!session) {
  //       window.location.href = "/auth";
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return <p className={classes.profile}>loading...</p>;
  // }
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
