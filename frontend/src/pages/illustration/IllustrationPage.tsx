import MainLayout from "../../layouts/MainLayout/MainLayout";
import Gallery from "../../components/gallery/Gallery/Gallery";
import { type IIllustration } from "../../types/galleryTypes";
import { useArtworks } from "../../hooks/useArtworks";
import Icon from "../../components/ui/Icons/Icon";

export default function IllustrationPage() {
  const { data, isLoading } = useArtworks<IIllustration>("illustration");

  return (
    <MainLayout>
      {isLoading && <Icon name="spinner" size={24} className="spinner"/>}
      {data && <Gallery items={data} type="illustration" />}
      {!isLoading && !data && (
        <div className="container">
          <h1>Нет доступных иллюстраций</h1>
        </div>
      )}
    </MainLayout>
  );
}
