import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { BsThermometerSun } from "react-icons/bs";
import { ImDroplet } from "react-icons/im";
import { GiWindTurbine } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";

import Header from "../components/Header";

const Weather = () => {
	// const params
	const { state } = useLocation(); // getting the state data sent from the storage
	const {
		main: { feels_like, humidity, temp },
		name,
		sys: { country },
		weather: {
			0: { description, icon },
		},
		wind: { speed },
		visibility,
	} = state; // extrating the required data from the api data

	const additionalElement = (
		<Link to={"/"}>
			<MdOutlineKeyboardBackspace className="icon-blue margin-right" />
		</Link>
	);

	const weatherIconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

	return (
		<div className="container">
			<Header additionalElement={additionalElement} />
			<div className="divider"></div>
			<div className="flex-center">
				<img src={weatherIconUrl} alt="thunder" className="weatherIcons" />
			</div>
			<div>
				<h1 className="text-center weatherHeader">
					{temp}
					<sup>o</sup> C
				</h1>
				<div className="text-center text-capitalize">{description}</div>
				<div className="flex-center location">
					<TfiLocationPin />{" "}
					<span>
						{name}, {country}
					</span>
				</div>
			</div>
			<div className="divider margin-top-divider margin-bottom-none"></div>
			<div className="weather-parameters-align">
				<div className="flex-center">
					<BsThermometerSun className="weather-parameters-icon" />
					<div className="flex-col ">
						<span className="weather-parameters-header">
							{feels_like}
							<sup>o</sup> C
						</span>
						<span>Feels Like</span>
					</div>
				</div>
				<div className="flex-center">
					<ImDroplet className="weather-parameters-icon" />
					<div className="flex-col ">
						<span className="weather-parameters-header">{humidity} %</span>
						<span>Humidity</span>
					</div>
				</div>
				<div className="flex-center border-top">
					<GiWindTurbine className="weather-parameters-icon" />
					<div className="flex-col ">
						<span className="weather-parameters-header">{speed} m/s</span>
						<span>Wind Speed</span>
					</div>
				</div>
				<div className="flex-center border-top">
					<FaRegEye className="weather-parameters-icon" />
					<div className="flex-col ">
						<span className="weather-parameters-header">{visibility} m</span>
						<span>Visibility</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
