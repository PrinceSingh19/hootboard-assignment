import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Weather from "./pages/Weather";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
	{
		path: "/",
		Component: Home,
		errorElement: <ErrorPage />,
	},
	{
		path: "/weather",
		Component: Weather,
	},
]);

export default function Root() {
	return <RouterProvider router={router} />;
}
