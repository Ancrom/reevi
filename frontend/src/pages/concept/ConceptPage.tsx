import MainLayout from "../../layouts/MainLayout/MainLayout";
import Concept from "../../components/Concept/Concept";
import { type IConcept } from "../../types/galleryTypes";
import { useArtworks } from "../../hooks/useArtworks";
import Icon from "../../components/ui/Icons/Icon";

export default function ConceptPage() {
  const { data, isLoading } = useArtworks<IConcept>("concept");

  return (
    <MainLayout>
      {isLoading && <Icon name="spinner" size={24} className="spinner" />}
      {data && <Concept data={data} />}
      {!isLoading && !data && (
        <div className="container">
          <h1>Нет доступных концептов</h1>
        </div>
      )}
    </MainLayout>
  );
}
