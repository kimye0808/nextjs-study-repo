import Image from "next/image";
import classes from "./hero.module.css";

/*홈페이지 자기소개*/
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/github.png"
          alt="kimye0808"
          width={300}
          height={300}
        />
      </div>
      <h1>kimye0808</h1>
      <p>NextJS Study</p>
    </section>
  );
}
