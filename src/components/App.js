/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
//import Checkbox from './Checkbox/Checkbox';
import SearchByCity from './SearchByCity';
import WeatherResults from './WeatherResults';
import Checkbox from './Checkbox';

function App() {
  return (
    <>
      <SearchByCity />
      <Checkbox
        label="next days forecast - at noon only"
        onChange={e => setForcastPeriodicity(e.target.value)}
      />
      <WeatherResults />
    </>
  );
}

function setForcastPeriodicity(isAtNoonOnly) {
  window.dataStore.isAtNoonOnly = isAtNoonOnly;

  //console.log(window.dataStore);
}

export default App;
