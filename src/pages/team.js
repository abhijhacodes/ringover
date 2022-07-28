import { teamMembers } from "../../data/team";
import styles from "../../styles/Team.module.css";
import UserCard from "../components/UserCard/UserCard";

export default function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <text className={styles.description}>
          Without bonding and coordination, every project is a failure.
        </text>
        <text className={styles.description}>
          Look at who makes KICKSUP great. ;&#41;
        </text>
      </div>
      <div className={styles.teamList}>
        {teamMembers.map((member, index) => (
          <UserCard userData={member} key={index} />
        ))}
      </div>
      <div>
        <text className={styles.description}>and You! ;&#41;</text>
      </div>
    </div>
  );
}
