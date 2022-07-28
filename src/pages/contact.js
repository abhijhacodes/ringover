import Image from "next/image";
import styles from "../../styles/Contact.module.css";
import utilStyles from "../../styles/utility.module.css";

const contactList = [
  { id: "support@kicksup.com", text: "for any technical support" },
  { id: "info@kicksup.com", text: "for more information" },
  { id: "feedback@kicksup.com", text: "to send your feedback" },
  { id: "jobs@kicksup.com", text: "to work with us" },
];

const SocialLogo = ({ name }) => {
  return (
    <Image
      src={`/assets/${name}.svg`}
      height="24px"
      width="24px"
      className={styles.socialLogo}
      alt={name}
    />
  );
};

export default function Contact() {
  return (
    <>
      <div className={utilStyles.containerWithBg}>
        <div className={styles.content}>
          <div className={styles.contactCard}>
            <text className={styles.contactHead}>REACH US AT</text>
            <div className={styles.emailContainer}>
              {contactList.map((contactItem, index) => (
                <div key={index}>
                  <text className={styles.email}>{contactItem.id}</text> <br />
                  <text className={styles.description}>{contactItem.text}</text>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.socialsContainer}>
            <div>
              <text>stay in touch</text>
            </div>
            <div className={styles.socials}>
              <SocialLogo name="twitter" />
              <SocialLogo name="insta" />
              <SocialLogo name="facebook" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
