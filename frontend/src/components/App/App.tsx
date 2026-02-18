import { createHashRouter, RouterProvider } from "react-router";
import Illustration from "../../pages/Illustration";
import About from "../../pages/About";
import Concept from "../../pages/Concept";
import Resourses from "../../pages/Resourses";
import ArtWorkPage from "../../pages/ArtWorkPage";
import "./App.module.scss";
import "../../styles/_container.scss";
import SvgSprite from "../ui/Icons/SvgSprite";

const router = createHashRouter([
  {
    path: "/",
    element: <Illustration />,
  },
  {
    path: "/concept",
    element: <Concept />,
  },
  {
    path: "/artworks/:tag/:id",
    element: <ArtWorkPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/resourses",
    element: <Resourses />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SvgSprite />
    </>
  );
}

export default App;
