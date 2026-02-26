import MainLayout from "../layouts/MainLayout/MainLayout";
import About from "../components/About/About";
import { useAbout } from "../hooks/useAbout";
import Icon from "../components/ui/Icons/Icon";

export default function AboutPage() {
  const { data, isLoading } = useAbout();

  return (
    <MainLayout>
      {isLoading && <Icon name="spinner" size={24} className="spinner"/>}
      {data && <About data={data} />}
      {!isLoading && !data && (
        <div className="container">
          <h1>Ошибка загрузки данных</h1>
        </div>
      )}
    </MainLayout>
  );
}
