# Getting Started

This project is a weather app that utilizes [OpenWeatherMap](https://openweathermap.org/).

## Available Scripts

In the project directory, you can run:

1. First, install the dependencies:

   ```sh
   npm install
   ```

   This will install all the required dependencies and dev dependencies for the project.

2. Then, you can run:

   ```sh
   npm start
   ```

   This runs the app in development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

   The page will reload when you make changes.\
   You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

### Libraries Used

- **React-query**: For handling data fetching.
- **Ant Design (antd)**: For UI components.
- **Tailwind CSS**: For CSS styling framework for better styling.

### Project Structure

- `src/components`: Directory for web components.
- `src/hooks`: Directory for customs hooks and API services.
- `src/pages`: Directory for the pages of the app.
- `src/App.js`: Routes of the app.