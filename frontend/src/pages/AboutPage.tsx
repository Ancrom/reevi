import MainLayout from "../layouts/MainLayout/MainLayout";
import About from "../components/About/About";
import { useAbout } from "../hooks/useAbout";
import Icon from "../components/ui/Icons/Icon";

export default function AboutPage() {
  const { data, loading } = useAbout();

  return (
    <MainLayout>
      {loading && <Icon name="spinner" size={24} />}
      {data && <About data={data} />}
      {!loading && !data && (
        <div className="container">
          <h1>Ошибка загрузки данных</h1>
        </div>
      )}
    </MainLayout>
  );
}
