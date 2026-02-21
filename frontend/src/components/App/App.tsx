import { createHashRouter, RouterProvider } from "react-router";
import Illustration from "../../pages/illustration/IllustrationPage";
import About from "../../pages/AboutPage";
import Concept from "../../pages/concept/ConceptPage";
import IllustrationIdPage from "../../pages/illustration/IllustrationIdPage";
import ConceptIdPage from "../../pages/concept/ConceptIdPage";
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
    path: "/:type/:id",
    element: <IllustrationIdPage />,
  },
  {
    path: "/:type/:id/:key",
    element: <ConceptIdPage />,
  },
  {
    path: "/about",
    element: <About />,
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
