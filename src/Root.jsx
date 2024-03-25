import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Weather from "./components/Weather";
import Home from "./Home";
const router = createBrowserRouter([
	{
		path: "/",
		Component: Home,
	},
	{
		path: "/weather",
		Component: Weather,
	},
]);

export default function Root() {
	return <RouterProvider router={router} />;
}
