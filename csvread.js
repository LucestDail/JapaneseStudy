/*
Before Starting
1. Node.js 설치되어있어야 합니다.
2. Module jquery.csv.js(min.js) 포함되어 있어야 합니다.
3. npm module 에 하기 module 이 설치되어야 합니다.
*/
var comma_separated_values = require('comma-separated-values');
var fs = require('fs');
const csv = require('csv-parser')

const urlHiragana = "./doc/Hiragana.csv";
const urlKatagana = "./doc/Katagana.csv";
let csvObjectHiragana = [];
let csvObjectKatagana = [];

function readCsv(csvUrl){
    return new Promise((resolve)=>{
        const results = [];
        fs.createReadStream(csvUrl)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
            return resolve(results)
        });
    })
}

async function init(){
    csvObjectHiragana = await readCsv(urlHiragana);
    csvObjectKatagana = await readCsv(urlKatagana);
    console.log(csvObjectHiragana);
    console.log(csvObjectKatagana);
}

init();