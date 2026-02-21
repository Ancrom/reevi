import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./MainLayout.module.scss";

interface IMainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
