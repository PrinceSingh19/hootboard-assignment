import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p className="location">Sorry, an unexpected error has occurred.</p>
			<p className="not-found">
				<i>{error.statusText || error.message}</i>
			</p>

			<Link to={"/"} className="homeLink">
				Go to Homepage
			</Link>
		</div>
	);
}
