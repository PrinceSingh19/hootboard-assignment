// api url for getting the current weather data based on the lattitude and logitude passed
export const apiUrl = (lat, lon) =>
	`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
		import.meta.env.VITE_WEATHER_API_KEY
	}`;

// api url for getting the current weather data based on the query passed by user
export const geoCodeApiUrl = (queryLocation) =>
	`https://api.openweathermap.org/geo/1.0/direct?q=${queryLocation}&appid=${
		import.meta.env.VITE_WEATHER_API_KEY
	}`;
