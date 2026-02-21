import { urlFor } from "../../sanity/client";
import { PortableText } from "@portabletext/react";
import styles from "./About.module.scss";

interface IAboutProps {
  data: {
    title: string;
    photo: any;
    content: any[];
  };
}

export default function About(props: IAboutProps) {

  const components = {
    block: {
      h2: ({ children, value }: any) => (
        <h2 key={value._key} className={styles.titleLg}>
          {children}
        </h2>
      ),
      h3: ({ children, value }: any) => (
        <h3 key={value._key} className={styles.titleMd}>
          {children}
        </h3>
      ),
      normal: ({ children, value }: any) => (
        <p key={value._key} className={styles.text}>
          {children}
        </p>
      ),
    },
  };

  return (
    <div className="container">
      <div className={styles.about}>
        <div className={styles.body}>
          <h1 className={styles.title}>{props.data.title}</h1>
          <PortableText value={props.data.content} components={components} />
        </div>
        <div className={styles.image}>
          <img
            src={urlFor(props.data.photo).auto("format").fit("max").url()}
            alt={props.data.photo.alt || "About photo"}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
