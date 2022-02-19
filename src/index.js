import XLSX from 'xlsx';

import dataStore from './data/dataStore';
import { validateAndLoadData, performSearch } from './data/weatherData';
import renderApp from './framework/render';
import App from './components/App';

if (module.hot) {
  module.hot.accept();
}

window.dataStore = dataStore;
window.performSearch = performSearch;

window.renderApp = renderApp;
window.validateAndLoadData = validateAndLoadData;

renderApp(App, document.getElementById('app-root'));




var selectedFile;
    document
      .getElementById("fileUpload")
      .addEventListener("change", function(event) {
        selectedFile = event.target.files[0];
      });
    
      /* document
      .getElementById("uploadExcel")
      .addEventListener("click", function() {
        
        if (selectedFile) {
          console.log("hi");
          var fileReader = new FileReader();
          fileReader.onload = function(event) {
            var data = event.target.result;

            var workbook = XLSX.read(data, {
              type: "binary"
            });
            workbook.SheetNames.forEach(sheet => {
              let rowObject = XLSX.utils.sheet_to_row_object_array(
                workbook.Sheets[sheet]
              );
              let jsonObject = JSON.stringify(rowObject);
              document.getElementById("jsonData").innerHTML = jsonObject;
              
            });
          };
          fileReader.readAsBinaryString(selectedFile);
        }
      }); */



/* let res = fetch('http://www.ctccapital.ua/price_a/inetmag/ktkstock.xls',
      {
       mode: 'no-cors', 
      })
      .then(response => response.text())
      .then(data => console.log(data)) */




      if(typeof require !== 'undefined') XLSX = require('xlsx');
      var workbook = XLSX.readFile('./parcer-excel.xlsx');
      /* DO SOMETHING WITH workbook HERE */

console.log(workbook);






//,
  /* "dependencies": {
    "read-excel-file": "^5.2.25",
    "xlsx": "^0.17.5"
  } */




/* let res = fetch('https://learn.javascript.ru/article/promise-chaining/user.json')
.then(response777 => response777.json())
.then(data => console.log(data)); */

//alert(res.name)

//console.log(res.name)



/* let res2 = fetch('http://www.ctccapital.ua/price_a/inetmag/ktkstock.json',
                {
                 mode: 'no-cors', 
                })
.then(response888 => response888.text())
.then(data => alert(data)) */




//const readXlsxFile = require('read-excel-file/node')

// File path.
//readXlsxFile('.parcer-excel.xlsx').then((rows) => {
  // `rows` is an array of rows
  // each row being an array of cells.
//})


/* <script
type="text/javascript"
src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.3/xlsx.full.min.js"
></script> */

