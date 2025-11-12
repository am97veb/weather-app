# 🧾 WeatherApp

## 📖 Description

Hello!
I would like to present a simple weather app that displays the current weather and forecast for the coming days.

You can find any location using the search bar. Just start typing the name of the city you want, and a list of suggested locations will appear. Then, use the “add city” button to add the city to the main screen to see the weather. You can remove a tile by clicking the cross in the upper-right corner.

In the “Current weather” tab, you can find data on the current weather in selected cities, along with a short description and graphics.
In the “Weather Forecast” tab, you can find data on the maximum and minimum temperatures for the coming days.
In both tabs, just click on the tile to see detailed weather data such as pressure, visibility, humidity, chances of rain and snow, wind data, sunrise and sunset times, and moon phases. Detailed data on air composition and quality is also available. 

The app is very intuitive and responsive, which means that the elements adapt to the screen on which it is displayed. 
The app retrieves data from Weatherapi.com, and the cities added to the home screen are saved in local storage.

Below is a presentation, a link to the app, the technologies used, and the available scripts.

## 📌 Table of Contents

1. 🎬 [Presentation](#-presentation)
2. 🎥 [Demo](#-demo)
3. 🛠️ [Tech Stack](#️-tech-stack)
4. 📋 [Features](#-features)
5. ⚙ [Installation](#-installation)
6. 👨🏻‍💻 [Usage](#-usage)
7. 🧱 [Building for Production](#-building-for-production)
8. 🚀 [Deployment](#-deployment)
9. 🔧 [React TypeScript Vite](#-react--typescript--vite)

## 🎬 Presentation

Adding cities and current weather: 

![Adding Cities And Current Weather](./README%20files/addNewCity.gif)

Weather forecast and city removal: 

![Weather Forecast And City Removal](./README%20files/weatherForecastAndDeleteCities.gif)

Weather details:

![Weather Details](./README%20files/weatherDetails.gif)


### 📐 Responsive Design

Current and forecast responsive view:

![Current And Forecast Responsive View](./README%20files/currentAndForecastResponsive.gif)

Weather details responsive view:

![Weather Details Responsive View](./README%20files/weatherDetailsResponsive.gif)

## 🎥 Demo

Let's try [WeatherApp](https://am97veb.github.io/weather-app/)!

## 🛠️ Tech Stack

- **Frontend Framework**: React.js
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Styled Components
- **Data Fetching**: TanStack Query (React Query)
- **HTTP Client**: Axios

## 📋 Features

- 🔎 **Search engine** - find any location,
- ⛅ **Current weather** - information about the current weather in selected cities, along with a brief description and graphics,
- 📅☔ **Weather forecast** - information about the maximum and minimum temperatures for the coming days,
- 💻📱 **Responsive design** - the elements adapt to the screen on which the application is displayed,
-  +/- **Location management** - add and remove from the main screen,
- 💾 **LocalStorage** - save added cities in local storage

## ⚙ Installation

Clone the repository:

```
git clone https://github.com/am97veb/weather-app.git
```

Navigate to the project directory:

```
cd weather-app
```

Install the dependencies:

```
npm install
```

## 👨🏻‍💻 Usage

Run the development server:

```
npm run dev
```

The application will be available at http://localhost:5173

## 🧱 Building for Production

Create an optimized production build:

```
npm run build
```

The build artifacts will be stored in the dist/ directory.

## 🚀 Deployment

Deployment on GitHub Pages:

```
npm run deploy
```

## 🔧 React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
