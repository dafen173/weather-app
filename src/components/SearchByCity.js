/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';
//import performSearch from '../data/weatherData';
//import { validateAndLoadData, performSearch } from './data/weatherData';

function SearchByCity() {
  return (
    <input
      type="text"
      value={window.dataStore.currentCity}
      onchange={e => window.performSearch(e.target.value)}
    />
  );
}

export default SearchByCity;
