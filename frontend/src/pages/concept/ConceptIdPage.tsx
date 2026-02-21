import MainLayout from "../../layouts/MainLayout/MainLayout";
import ArtWork from "../../components/ArtWork/ArtWork";
import { useParams } from "react-router";
import { useConcept } from "../../hooks/useConcept";
import Icon from "../../components/ui/Icons/Icon";

export default function ConceptIdPage() {
  const { id, key } = useParams();
  const { data, loading } = useConcept(id!, key!);

  return (
    <MainLayout>
      {loading && <Icon name="spinner" size={24} />}
      {data && <ArtWork items={data} />}
      {!loading && !data && (
        <div className="container">
          <h1>Работа не найдена</h1>
        </div>
      )}
    </MainLayout>
  );
}
