import MainLayout from "../../layouts/MainLayout/MainLayout";
import ArtWork from "../../components/ArtWork/ArtWork";
import { useParams } from "react-router";
import { useIllustration } from "../../hooks/useIllustration";
import Icon from "../../components/ui/Icons/Icon";

export default function IllustrationIdPage() {
  const { type, id } = useParams();
  const { data, isLoading } = useIllustration(type, id);

  return (
    <MainLayout>
      {isLoading && <Icon name="spinner" size={24} className="spinner" />}
      {data && <ArtWork items={data} />}
      {!isLoading && !data && (
        <div className="container">
          <h1>Работа не найдена</h1>
        </div>
      )}
    </MainLayout>
  );
}
