import styles from "./Social.module.scss";
import { type ISocial } from "../../types/socialTypes";
import { urlFor } from "../../sanity/client";

interface ISocialProps {
  data: ISocial[];
  className?: string;
}

export default function Social({ data, className }: ISocialProps) {
  return (
    <div className={`${styles.social} ${className || ""}`}>
      {data.map((social) => (
        <a
          href="mailto:natalia2dartist@gmail.com"
          target="_blank"
          className={styles.link}
          key={social.title}
        >
          <img
            src={urlFor(social.image)
              .size(24, 24)
              .fit("max")
              .auto("format")
              .quality(100)
              .dpr(2)
              .url()}
            alt={"Natalia's social"}
            className={styles.image}
          />
        </a>
      ))}
    </div>
  );
}
