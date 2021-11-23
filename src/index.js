import dataStore from './data/dataStore';
import { validateAndLoadData, performSearch } from './data/weatherData';
import renderApp from './framework/render';
import App from './components/App';

if (module.hot) {
  module.hot.accept();
}

window.dataStore = dataStore;

window.performSearch = performSearch;
/* 
window.renderApp = renderApp;
window.validateAndLoadData = validateAndLoadData;
*/

renderApp(App, document.getElementById('app-root'));
