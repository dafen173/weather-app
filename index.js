// Start from here



window.dataStore = {
	currentUnits: 'C',
	currentCity: 'uuuuuuuuu',
};

document.getElementById('app-root').innerHTML = App();



function SearchByCity() {
	return `<input
		type='text'
		value="${window.dataStore.currentCity}"
		onchange="window.dataStore.currentCity = this.value;" />`;
}

function UnitSwitch(currentUnits, setCurrentUnits) {
	return 'UnitSwitch';
}

function WeatherToday() {
	return 'WeatherToday';
}

function WeatherForecast() {
	return 'WeatherForecast';
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





