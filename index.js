// Start from here

import { weatherByCity } from './fixtures';
import {
  CELSIUS_UNITS,
  displayInUnits,
  FAHRENHEIT_UNITS,
  getDateFromUnixTimestamp,
  getIconFromCode,
} from './utils';

if (module.hot) {
  module.hot.accept();
}

window.dataStore = {
  currentUnits: CELSIUS_UNITS,
  currentCity: '',
};

const setCurrentUnits = function (value) {
  window.dataStore.currentUnits = value;
  window.renderApp();
};

window.renderApp = renderApp;
renderApp();

function renderApp() {
  document.getElementById('app-root').innerHTML = `
		${App()}
	`;
}

function App() {
  return `<div>
		${SearchByCity()}
		${UnitSwitch(window.dataStore.currentUnits, setCurrentUnits)}
		<br/>
		${WeatherToday()}
		<br/>
		${WeatherForecast()}
	</div>`;
}

function SearchByCity() {
  const weatherData = weatherByCity[window.dataStore.currentCity];

  return `<input
		type='text'
		value="${window.dataStore.currentCity}"
		onchange="window.dataStore.currentCity = this.value; window.renderApp();" />
		${!weatherData ? `Enter one of the city names: ${Object.keys(weatherByCity).join(', ')}.` : ''} 
	`;
}

function UnitSwitch(currentUnits, setCurrentUnitsCB) {
  return `<p>Select units</p>
	${[
    { id: 'celsius-units', value: CELSIUS_UNITS, name: 'C' },
    { id: 'fahrenheit-units', value: FAHRENHEIT_UNITS, name: 'F' },
  ]
    .map(
      ({ id, value, name }) => `
				<div>
					<input
						id = "${id}"
						type="radio" 
						value="${value}" 
						${currentUnits === value ? 'checked' : ''}
						onchange="(${setCurrentUnitsCB})(this.value);"
					/>
					<label for="${id}">˚${name}</label>
				</div>`,
    )
    .join('')}
			
	`;
}

function WeatherToday() {
  const { currentCity } = window.dataStore;
  const weatherData = weatherByCity[currentCity];

  if (weatherData) {
    return '';
  }

  return '';
}

function WeatherForecast() {
  return 'WeatherForecast';
}
