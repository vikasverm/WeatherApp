# Weather Dashboard Application

## Overview

This Weather Dashboard Application allows users to get real-time weather information for any city they enter. The application displays key weather details such as temperature, humidity, wind speed, and general weather conditions (e.g., sunny, cloudy, etc.). It uses the OpenWeatherMap API to fetch the weather data.

## Features

- **Search Functionality:** Users can enter a city name to get current weather details.
- **Weather Details:** Displays temperature, humidity, wind speed, and weather conditions.
- **Units Toggle:** Users can toggle between Celsius and Fahrenheit.
- **Responsive Design:** The application is compatible across various devices and screen sizes.
- **Error Handling:** Alerts users for invalid city names or API fetch errors.

## Setup Instructions

### Prerequisites

- A web browser (e.g., Chrome, Firefox, Edge)
- Internet connection
- OpenWeatherMap API key (you can obtain one by signing up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up))

### Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/weather-dashboard.git
    cd weather-dashboard
    ```

2. **Open the project directory:**

    Ensure you have the following files:
    - `index.html`
    - `styles.css`
    - `app.js`

3. **Insert your OpenWeatherMap API key:**

    Open `app.js` and replace `'YOUR_API_KEY'` with your actual OpenWeatherMap API key.

    ```javascript
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    ```

4. **Run the application:**

    Open `index.html` in your web browser. You can do this by double-clicking the file or by right-clicking and selecting "Open with" followed by your preferred web browser.

## Usage

1. Enter the name of a city in the input field.
2. Click the "Search" button to fetch the weather details.
3. The weather information will be displayed below the search input.
4. Use the "Celsius" and "Fahrenheit" buttons to toggle between units.

## Technologies Used

- HTML
- CSS
- jQuery
- AJAX
- OpenWeatherMap API

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

