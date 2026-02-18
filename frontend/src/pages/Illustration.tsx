import MainLayout from "../layouts/MainLayout/MainLayout";
import Gallery from "../components/gallery/Gallery/Gallery";

export default function Illustration() {
  return (
    <MainLayout>
      <Gallery category="illustration" />
    </MainLayout>
  );
}
