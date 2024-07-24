import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import DetailsPage from "./pages/details/DetailsPage";
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";
import { detailsLoader } from "./pages/details/detailsLoader";
import { homeLoader } from "./pages/home/homeLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      //Fall back to the default Homepage
      {
        index: true,
        element: <HomePage></HomePage>,
        loader: homeLoader,
      },
      {
        path: "/search",
        element: <SearchPage></SearchPage>,
        loader: searchLoader,
      },
      {
        //:name plays as wildcard, might go to /packages/react or packages/jest
        path: "/packages/:name",
        element: <DetailsPage></DetailsPage>,
        loader: detailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
