import SingleUser from "pages/SingleUser";
import UserTable from "pages/UserTable";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  { path: "/", Component: UserTable },
  { path: "/:id", Component: SingleUser },
]);

// Suggestion: Include 404 page

export default router;
