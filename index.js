// Start from here



window.dataStore = {
	currentUnits: 'C',
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
	return 'UnitSwitch';
}

function WeatherToday() {
	return `WeatherToday ${window.dataStore.currentCity}`;
}

function WeatherForecast() {
	return 'WeatherForecast';
}








