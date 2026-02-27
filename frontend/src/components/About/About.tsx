import { urlFor } from "../../sanity/client";
import { PortableText } from "@portabletext/react";
import { motion } from "motion/react";
import { useInView } from "../../hooks/useInView";
import styles from "./About.module.scss";

interface IAboutProps {
  data: {
    title: string;
    photo: any;
    content: any[];
  };
}

export default function About(props: IAboutProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
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
        <motion.div
          ref={ref}
          className={styles.body}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            ease: "easeOut",
          }}
        >
          <h1 className={styles.title}>{props.data.title}</h1>
          <PortableText value={props.data.content} components={components} />
        </motion.div>
        <motion.div
          ref={ref}
          className={styles.image}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <img
            src={urlFor(props.data.photo).auto("format").fit("max").url()}
            alt={props.data.photo.alt || "About photo"}
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}
