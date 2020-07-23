/*
Before Starting
1. Node.js 설치되어있어야 합니다!
2. Module jquery.csv.js(min.js 포함) 설치되어 있어야 합니다!
*/
var comma_separated_values = require('comma-separated-values');
var fs = require('fs');
const csv = require('csv-parser')

const urlHiragana = "./doc/Hiragana.csv";
const urlKatagana = "./doc/Katagana.csv";
let csvObjectHiragana = [];
let csvObjectKatagana = [];
var buffer = [];

function printarray(tararray){
    for(var i=0;i<tararray.length;i++){
        console.log(tararray[i])
    }
}
const results = [];
fs.createReadStream(urlHiragana)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
    console.log(results);
});

console.log(results);

function bufferoset(buffer){
    
    
    
}
/*
function init(){
    console.log(results);
    //csvObjectHiragana = readCsv(urlHiragana);
    //csvObjectKatagana = readCsv(urlKatagana);
    //console.log(csvObjectHiragana);
    //console.log(csvObjectKatagana);
    //var csvArrayHiragana = comma_separated_values.toArray(csvObjectHiragana);
    //var csvArrayKatagana = comma_separated_values.toArray(csvObjectKatagana);
    //printarray(csvArrayHiragana);
    //printarray(csvArrayKatagana);
}

init();
*/
//const csvHiragana = new CSV(dataHiragana, {header: true}).parse();
//const csvKatagana = new CSV(dataKatagana, {header: true}).parse();
//console.dir(csvHiragana);
//console.dir(csvKatagana);

/*
const rows = [[],[],[]];
var stringArrayHiragana = HRGNcsv.forEach(row => {
    row.forEach((cell, idx) => {
        cols[idx].push(cell);
        console.log(cols[idx]);
    })
})
*/
/*
function readCsv(csvUrl){
    var fileUrl = csvUrl;
    var readResult;
    fs.readFile(csvUrl,'utf8',function(err,data){
        if(err){
            throw err;
        }
        if(data){
            readResult = data.toString().split("\n");
            for(i=0;i<readResult.length;i++){
                //console.log(readResult[i]);
            }
        }else{
            return;
        }
    })
    return readResult;
}
function readLines(input, func) {
    var remaining = '';
    var stringArray = new Array();
    input.on('data', function(data) {
        remaining += data;
        var index = remaining.indexOf('\n');
        var last  = 0;
        while (index > -1) {
            var line = remaining.substring(last, index);
            last = index + 1;
            func(line);
            index = remaining.indexOf('\n', last);
        }
        remaining = remaining.substring(last);
    });
    input.on('end', function() {
        if (remaining.length > 0) {
            func(remaining);
        }
    });
    return remaining;
}

function func(data) {
  console.log(data);
}
    var Hinput = fs.createReadStream(URL_HRGN);
    var Kinput = fs.createReadStream(URL_KTGN);

    var csvStringHRGN = readLines(Hinput, func);
    var csvStringKTGN = readLines(Kinput, func);
*/

//function init(){
    //if(something){
    //    doSomething();
    //}else{

    //console.log("여기부터는 csvStringHRGN, KTGN 출력");
    //console.dir(csvStringHRGN);
    //console.dir(csvStringKTGN);
    //var csvObjectKTGN = readCsv(URL_KTGN);
    //console.dir(csvObjectKTGN);
        //var csvArray.Hiragana = csv.toArray(csvObject.HRGN);
        //var csvArray.Katagana = csv.toArray(csvObject.KTGN);
    //}
//}

//init();