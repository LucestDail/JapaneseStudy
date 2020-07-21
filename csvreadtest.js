/*
Before Starting
1. Node.js 설치되어있어야 합니다!
2. Module jquery.csv.js(min.js 포함) 설치되어 있어야 합니다!
*/
var csv = require('./module/jquery-csv/src/jquery.csv.js');
var fs = require('fs');
var readline = require('readline');


const URL_HRGN = "./doc/Hiragana.csv";
const URL_KTGN = "/Users/dhtmd/node/gitproject/JapaneseStudy/doc/Katagana.csv";


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
                console.log(readResult[i]);
            }
        }else{
            return;
        }
    })
    for(i=0;i<readResult.length;i++){
        console.log(readResult[i]);
    }
    return readResult;
}
function readLines(input, func) {
    var remaining = '';
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
}

function func(data) {
  console.log('Line: ' + data);
}

var input = fs.createReadStream('lines.txt');
readLines(input, func);

function init(){
    //if(something){
    //    doSomething();
    //}else{
    var csvObjectHRGN = readCsv(URL_HRGN);
    console.dir(csvObjectHRGN);
    //var csvObjectKTGN = readCsv(URL_KTGN);
    //console.dir(csvObjectKTGN);
        //var csvArray.Hiragana = csv.toArray(csvObject.HRGN);
        //var csvArray.Katagana = csv.toArray(csvObject.KTGN);
    //}
}

init();