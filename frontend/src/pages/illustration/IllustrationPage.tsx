import MainLayout from "../../layouts/MainLayout/MainLayout";
import Gallery, {
  type IIllustration,
} from "../../components/gallery/Gallery/Gallery";
import { useArtworks } from "../../hooks/useArtworks";
import Icon from "../../components/ui/Icons/Icon";

export default function IllustrationPage() {
  const { data, loading } = useArtworks<IIllustration>("illustration");

  return (
    <MainLayout>
      {loading && <Icon name="spinner" size={24} />}
      {data && <Gallery items={data} type="illustration" />}
      {!loading && !data && (
        <div className="container">
          <h1>Нет доступных иллюстраций</h1>
        </div>
      )}
    </MainLayout>
  );
}
