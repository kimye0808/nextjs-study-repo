import MainNavigation from "./main-navigation";

/*블로그 레이아웃*/
export default function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}
