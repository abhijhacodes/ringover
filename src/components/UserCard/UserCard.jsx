import React from "react";
import styles from "./UserCard.module.css";
import Image from "next/image";

const UserCard = ({ userData }) => {
  const { name, picUrl, role, socials } = userData;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={picUrl} height="195px" width="195px" alt={name} />
      </div>
      <div className={styles.details}>
        <div className={styles.nameRole}>
          <text className={styles.name}>{name}</text>
          <text className={styles.role}>{role}</text>
        </div>
        <div className={styles.socials}>
          {socials.map((social, index) => (
            <Image
              src={`/assets/${social}.png`}
              height="20px"
              width="20px"
              key={index}
              className={styles.social}
              alt={social}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
