# 🧾 WeatherApp

## 📖 Description

Hello!
I would like to present a simple weather application that displays the current weather and the forecast for the coming days.
The application downloads data from Weatherapi.com and shows info for two cities — Gliwice and Hamburg.
In the Current Weather tab, you can find data on the current weather in selected cities, along with a brief description and graphics.
In the Weather Forecast tab, you can find data on the maximum and minimum temperatures for the coming days.
The application is very intuitive and responsive, which means that the elements adapt to the screen on which the application is displayed.

In the near future, I plan to expand the functionality to include searching, adding, and deleting more cities, as well as saving selected cities in LocalStorage.

Below is the presentation, link to the application, used technologies and available scripts.

## 📌 Table of Contents

1. 🎬 [Presentation](#-presentation)
2. 🎥 [Demo](#-demo)
3. 🛠️ [Tech Stack](#️-tech-stack)
4. 📋 [Features](#-features)
5. ⚙ [Installation](#-installation)
6. 👨🏻‍💻 [Usage](#-usage)
7. 🧱 [Building for Production](#️-building-for-production)
8. 🚀 [Deployment](#-deployment)
9. 🔧 [React TypeScript Vite](#-react--typescript--vite)

## 🎬 Presentation

![App presentation](./README%20files/appPresentation.gif)

### 📐 Responsive Design

![Responsive Design](./README%20files/responsivePresentation.gif)

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

- ⛅ **Current weather** - you can find data on the current weather in selected cities, along with a brief description and graphics.
- 📅☔ **Weather forecast** - you can find data on the maximum and minimum temperatures for the coming days.
- 💻📱 **Responsive design** - the elements adapt to the screen on which the application is displayed.

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

## 👷🏻‍♂️🧱 Building for Production

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
