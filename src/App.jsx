import Root from "pages/root";
import PortfolioSwiper from "components/portfolioSwiper";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "components/shared/global/globalStyles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Not Found😂</p>,
    children: [
      { index: true, element: <PortfolioSwiper /> },
      // { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
