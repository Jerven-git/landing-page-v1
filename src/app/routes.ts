import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Studio from "./pages/Studio";
import Services from "./pages/Services";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "studio", Component: Studio },
      { path: "services", Component: Services },
      { path: "journal", Component: Journal },
      { path: "contact", Component: Contact },
    ],
  },
]);
