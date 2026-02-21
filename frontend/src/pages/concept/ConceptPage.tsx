import MainLayout from "../../layouts/MainLayout/MainLayout";
import Concept from "../../components/Concept/Concept";
import { type IConcept } from "../../components/gallery/Gallery/Gallery";
import { useArtworks } from "../../hooks/useArtworks";
import Icon from "../../components/ui/Icons/Icon";

export default function ConceptPage() {
  const { data, loading } = useArtworks<IConcept>("concept");

  return (
    <MainLayout>
      {loading && <Icon name="spinner" size={24} />}
      {data && <Concept data={data} />}
      {!loading && !data && (
        <div className="container">
          <h1>Нет доступных концептов</h1>
        </div>
      )}
    </MainLayout>
  );
}
