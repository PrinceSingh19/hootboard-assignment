import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Header from "../components/Header";
import { getCurrentPositionAsync, getGeoCodeCoords, showWeatherData } from "../API/getRequest";

function Home() {
	const inputRef = useRef(null);
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	//Below function handles the data fetching and displaying weather based on get current location button click
	async function handleButtonClick() {
		setLoading(true);
		if (navigator.geolocation) {
			try {
				const position = await getCurrentPositionAsync(); // function used to get the coordinates based on the navigator.geolocation property
				const latitude = position.coords.latitude; // extracting the lattitue
				const longitude = position.coords.longitude; // extracting longitude
				await showWeatherData({ navigate, latitude, longitude }); // fetching the current weather data based on the lat and long
				setLoading(false);
			} catch (error) {
				setLoading(false);
				toast.error("Something went wrong! Try again");
			}
		} else {
			setLoading(false);
			toast.error("Geolocation is not supported in this browser.");
		}
	}

	const handleInputSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const currentLocationString = inputRef.current.value;
			const response = await getGeoCodeCoords(currentLocationString); // getting the lattitude and longitude of the entered location in the input field
			if (response.length === 0) {
				throw new Error("Enter valid location");
			}
			await showWeatherData({ navigate, latitude: response[0].lat, longitude: response[0].lon }); // fetching the current weather data based on the lat and long
			setLoading(false);
		} catch (error) {
			setLoading(false);
			toast.error(error.message);
		}
	};
	return (
		<>
			<ToastContainer />
			<div className="container">
				<Header />
				<div className="divider"></div>
				<form className="form" onSubmit={handleInputSubmit}>
					<div>
						<input
							type="text"
							id="cityName"
							name="cityName"
							aria-label="Enter City Name"
							placeholder="Enter City Name"
							ref={inputRef}
						/>
					</div>
					<div>
						{loading ? (
							<AiOutlineLoading3Quarters className="loader" />
						) : (
							<fieldset className="title">
								<legend> or</legend>
							</fieldset>
						)}
					</div>
					<div>
						<button type="button" aria-label="Location" onClick={handleButtonClick}>
							Get Device Location
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Home;
