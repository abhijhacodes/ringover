import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { useRouter } from "next/router";

const navLinks = [
  { text: "HOME", link: "/" },
  { text: "THE JOURNEY", link: "/journey" },
  { text: "TEAM", link: "/team" },
  { text: "STORE", link: "/store" },
  { text: "CONTACT", link: "/contact" },
];

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/assets/logo.png"
            height="48px"
            width="42px"
            className={styles.logo}
            alt="logo"
          />
        </div>
        <div className={styles.linksContainer}>
          {navLinks.map((navLink, index) => (
            <div
              key={index}
              className={`${styles.navLink} ${
                navLink.link === currentRoute && styles.underline
              }`}
            >
              <Link href={navLink.link} passHref>
                <text className={styles.navText}>{navLink.text}</text>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.profile}>
          <FiUser size={30} />
          <text>ABHISHEK</text>
        </div>
      </div>
    </>
  );
};

export default Header;
