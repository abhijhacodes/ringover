import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <h1>Welcome to KICKSUP</h1>
        <h3>Where our products meet your creativity 🚀</h3>
      </div>
      <div className={styles.cta}>
        <h2>
          <Link href="/store">
            <button className={styles.btn}>Start shopping</button>
          </Link>
        </h2>
        <h4>and unleash designer inside you</h4>
      </div>
    </div>
  );
}
