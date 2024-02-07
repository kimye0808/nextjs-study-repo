import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";

/*블로그 레이아웃의 메인 네비게이션*/
export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
