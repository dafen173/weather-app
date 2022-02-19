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

//==============================================================================================


var selectedFile;
    document
      .getElementById("fileUpload")
      .addEventListener("change", function(event) {
        selectedFile = event.target.files[0];
      });
    
    document
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
      });

//===============================================================================================

//http://www.ctccapital.ua/price_a/inetmag/ktkstock.xls
//https://oss.sheetjs.com/test_files/formula_stress_test.xlsx




/* fetch('https://docs.google.com/spreadsheets/d/1p1Nt_OhXd4NmEEfRGDP91ZzEHKj5ePVN/edit?usp=sharing&ouid=109992617196316266846&rtpof=true&sd=true')
.then(function(res) {
    if(!res.ok) throw new Error("fetch failed");
    return res.arrayBuffer();
  })  
.then(function(ab) {
    var data = new Uint8Array(ab);
    var workbook = XLSX.read(data, {type:"array"});
    
    var first_sheet_name = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[first_sheet_name];
    console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
  }); */



  document
  .getElementById("uploadProjectors")
  .addEventListener("click", function() {
    console.log('projectors works')
    fetch('https://docs.google.com/spreadsheets/d/1p1Nt_OhXd4NmEEfRGDP91ZzEHKj5ePVN/edit?usp=sharing&ouid=109992617196316266846&rtpof=true&sd=true')
    .then(function(res) {
        /* get the data as a Blob */
        if(!res.ok) throw new Error("fetch failed")
        return res.arrayBuffer();
    })  
    .then(function(ab) {
        /* parse the data when it is received */
        var data = new Uint8Array(ab)
        var workbook = XLSX.read(data, {type:"array"})
        
        /* DO SOMETHING WITH workbook HERE */

        var first_sheet_name = workbook.SheetNames[0]
        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name]
        var worksheetArray = XLSX.utils.sheet_to_json(worksheet,{raw:true})
        //console.log(worksheetArray)

        console.log(worksheetArray.map( function(item) {
          if (item.A === 'Проекторы') {
            return item.C
          }
        }))

        //worksheetArray.forEach( item => console.log(item.J) );

        //let worksheetObject = JSON.stringify(worksheetArray);


      

        document.getElementById("jsonData").innerHTML = worksheetArray.map( function(item) {
          return item.C
        })





    });
  })




 /*  document
  .getElementById("uploadProjectors")
  .addEventListener("click", fetchData())  */



  //'http://oss.sheetjs.com/test_files/formula_stress_test.xlsx'



/* let res = fetch('http://www.ctccapital.ua/price_a/inetmag/ktkstock.xls',
      {
       mode: 'no-cors', 
      })
      .then(response => response.text())
      .then(data => console.log(data)) */




 


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