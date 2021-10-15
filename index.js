import { weatherByCity } from './fixtures';

import {
  CELSIUS_UNITS,
  displayInUnits,
  FAHRENHEIT_UNITS,
  getDateFromUnixTimestamp,
  getIconFromCode,
} from './utils';

window.dataStore = {
  currentUnits: CELSIUS_UNITS,
  currentCity: '',
};

function setCurrentUnits(value) {
  window.dataStore.currentUnits = value;
  window.renderApp();
}

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
		onchange="window.dataStore.currentCity = this.value; window.renderApp()" />
		${!weatherData ? `Enter one of the city names: ${Object.keys(weatherByCity)}` : ''}`;
}

function UnitSwitch(currentUnits, setCurrentUnitsCB) {
  return `<p>Select units</p>
		${[
      { id: 'celsius-units', value: CELSIUS_UNITS, name: 'C' },
      { id: 'fahrenheit-units', value: FAHRENHEIT_UNITS, name: 'F' },
    ]
      .map(
        ({ id, value, name }) =>
          `<div>
						<input
							id="${id}"
							type="radio" 
							value="${value}"
							${currentUnits === value ? 'checked' : ''} 							
							onchange="(${setCurrentUnitsCB})(this.value);"
						/>
						<label for = "id">"${name}"</label>
					</div>`,
      )
      .join('')}
	`;
}

function WeatherToday() {
  const { currentCity, currentUnits } = window.dataStore;
  const weatherData = weatherByCity[currentCity];

  let content = '';

  if (weatherData) {
    const {
      current: {
        dt,
        temp,
        weather: [{ main, description, icon }],
      },
    } = weatherData;

    const currentDate = getDateFromUnixTimestamp(dt);
    const weatherIcon = getIconFromCode(icon);
    const tempInUnits = displayInUnits(temp, currentUnits);
    content += `<div>Weather for ${currentDate} in ${currentCity}</div>`;
    content += `<div>${weatherIcon} ${main} (${description}). Temperature is ${tempInUnits}</div>`;
  }
  return content ? `<div>${content}</div>` : '';
}

function WeatherForecast() {
  const { currentCity, currentUnits } = window.dataStore;
  const weatherData = weatherByCity[currentCity];
  let content = '';

  if (weatherData) {
    content += `Weather forcast for ${currentCity}:`;
    const { daily } = weatherData;
    content += daily
      .slice(1)
      .map(({ dt, temp: { day, night }, weather: [{ main, description, icon }] }) => {
        const dateString = getDateFromUnixTimestamp(dt);
        const dayTempInUnits = displayInUnits(day, currentUnits);
        const nightTempInUnits = displayInUnits(night, currentUnits);
        const weatherIcon = getIconFromCode(icon);
        return `<div>For ${dateString}, ${weatherIcon} ${main} (${description}). Day at ${dayTempInUnits}, night at ${nightTempInUnits}</div>`;
      })
      .join('');
  }

  return content ? `<div>${content}</div>` : '';
}
