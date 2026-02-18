import Icon from "../ui/Icons/Icon";
import styles from "./Social.module.scss";

export default function Social() {
  return (
    <div className={styles.social}>
      <a
        href="mailto:natalia2dartist@gmail.com"
        target="_blank"
        className={styles.link}
      >
        <Icon name="mail" size={22} />
      </a>
      <a
        href="mailto:natalia2dartist@gmail.com"
        target="_blank"
        className={styles.link}
      >
        <Icon name="mail" size={22} />
      </a>
      <a
        href="mailto:natalia2dartist@gmail.com"
        target="_blank"
        className={styles.link}
      >
        <Icon name="mail" size={22} />
      </a>
      <a
        href="mailto:natalia2dartist@gmail.com"
        target="_blank"
        className={styles.link}
      >
        <Icon name="mail" size={22} />
      </a>
    </div>
  );
}
