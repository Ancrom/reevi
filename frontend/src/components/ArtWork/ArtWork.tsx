import { urlFor } from "../../sanity/client";
import { NavLink } from "react-router";
import type { IIllustrationView } from "../../hooks/useIllustration";
import type { IConceptView } from "../../hooks/useConcept";
import Icon from "../ui/Icons/Icon";
import styles from "./ArtWork.module.scss";

interface IArtWorkProps {
  items: IIllustrationView | IConceptView;
}

export default function ArtWork({ items }: IArtWorkProps) {
  if (!items || !items.image) return <Icon name="spinner" size={24} />;

  return (
    <div className="container">
      <div className={styles.artwork}>
        <img
          src={urlFor(items.image).auto("format").fit("max").url()}
          alt={items.title}
          loading="lazy"
        />
        <div className={styles.line}>
        {items.nav.prev && <NavLink className={styles.back} to={items.nav.prev}>prev</NavLink>}
        {items.nav.next && <NavLink className={styles.next} to={items.nav.next}>next</NavLink>}
        </div>
      </div>
    </div>
  );
}
