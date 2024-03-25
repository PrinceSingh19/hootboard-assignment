import axios from "axios";
import { apiUrl, geoCodeApiUrl } from "./apiUrl";
import { toast } from "react-toastify";

export const getWeather = async ({ lat, lon }) => {
	try {
		const response = await axios.get(apiUrl(lat, lon));
		return response.data;
	} catch (error) {
		console.log(error, " weather eeror");
		return error;
	}
};

export const getGeoCodeCoords = async (locationQuery) => {
	const response = await axios.get(geoCodeApiUrl(locationQuery));
	console.log(response);
	return response.data;
};

export const showWeatherData = async ({ navigate, latitude, longitude }) => {
	try {
		const response = await getWeather({ lat: latitude, lon: longitude });
		console.log(response, " response in getWeather data");
		navigate({ pathname: "/weather" }, { state: response });
	} catch (error) {
		console.log(error.message, " errorm ");
		toast(error.message);
	}
};

export function getCurrentPositionAsync() {
	return new Promise((resolve, reject) => {
		const timeout = setTimeout(() => {
			reject(new Error("Geolocation request timed out."));
		}, 500); // 10 seconds timeout

		navigator.geolocation.getCurrentPosition(
			(position) => {
				clearTimeout(timeout);
				resolve(position);
			},
			(error) => {
				clearTimeout(timeout);
				reject(error);
			}
		);
	});
}
