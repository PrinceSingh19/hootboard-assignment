# Weather API

This project contains the code for getting the current weather data of a particular location by getting the user's input of by detecting his current location

&nbsp;

## Tech Stack

**Client:** React, HTML, CSS3

**JS Libraries:** React-Toastify, React Icons, Axios

&nbsp;

## Steps to Run Locally

Clone the project

```bash
  git clone https://github.com/PrinceSingh19/hootboard-assignment.git
```

Go to the project directory

```bash
  cd hootboard-assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

&nbsp;

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_WEATHER_API_KEY`

To get the API_KEY you need to visit the openweathermap site and create a free account and then get an API_KEY from there

&nbsp;

## To build the project

To deploy this project run

```bash
  npm run build
```

&nbsp;

## Demo

https://weather-hootboard.netlify.app/

&nbsp;

## API Reference for getting weather data

#### Get current weather data

```http
  GET https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}
```

| Parameter                               | Type     | Description                             |
| :-------------------------------------- | :------- | :-------------------------------------- |
| `lat`                                   | `number` | **Required**. Lattitude of the location |
| `lon`                                   | `number` | **Required**. Longitude of the location |
| `import.meta.env.VITE_WEATHER_API_KEY}` | `string` | **Required**. API Key                   |

#### Get Coordinates of the location

```http
  GET http://api.openweathermap.org/geo/1.0/direct?q=${queryLocation}&appid=${import.meta.env.VITE_WEATHER_API_KEY}
```

| Parameter                               | Type     | Description                           |
| :-------------------------------------- | :------- | :------------------------------------ |
| `queryLocation`                         | `string` | **Required**. User's entered location |
| `import.meta.env.VITE_WEATHER_API_KEY}` | `string` | **Required**. API Key                 |
