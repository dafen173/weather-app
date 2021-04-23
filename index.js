// Start from here

const KELVIN_UNITS = 'K';
const CELSIUS_UNITS = 'C';
const FAHRENHEIT_UNITS = 'F';



window.dataStore = {
	currentUnits: CELSIUS_UNITS,
	currentCity: '',
};



window.renderApp = renderApp;
renderApp();
//document.getElementById('app-root').innerHTML = App();
function renderApp () {
	document.getElementById('app-root').innerHTML = `
		${App()}
	`;
}


function App() {
	return `<div>
		${SearchByCity()}
		${UnitSwitch(window.dataStore.currentUnits, () => {})}
		<br/>
		${WeatherToday()}
		<br/>
		${WeatherForecast()}
	</div>`
}


function SearchByCity() {
	return `<input
		type='text'
		value="${window.dataStore.currentCity}"
		onchange="window.dataStore.currentCity = this.value; window.renderApp();" />`;
}

function UnitSwitch(currentUnits, setCurrentUnits) {
	return `<p>Select units</p>
	${[{value: CELSIUS_UNITS}, {value: FAHRENHEIT_UNITS}].map}
	<div>
		<input 
		type="radio" 
		value="" 
		checked
		onchange="(${setCurrentUnits})(this.value);"
		/>
	</div>



	`;
}

function WeatherToday() {
	return `WeatherToday ${window.dataStore.currentCity}`;
}

function WeatherForecast() {
	return 'WeatherForecast';
}








