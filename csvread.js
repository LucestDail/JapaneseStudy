/*
Before Starting
1. Node.js 설치되어있어야 합니다.
2. Module jquery.csv.js(min.js) 포함되어 있어야 합니다.
3. npm module 에 하기 module 이 설치되어야 합니다.
*/
var fs = require('fs');
const csv = require('csv-parser')

const urlHiragana = "./doc/Hiragana.csv";
const urlKatagana = "./doc/Katagana.csv";
let csvObjectHiragana = [];
let csvObjectKatagana = [];
let csvObjectHiraganaRandom = [];
let csvObjectKataganaRandom = [];
const MAX_RANDOM_NUMBER = 8;

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

function createRandomNumber(randomsize){
    console.log("createRandomNumber 호출됨");
    console.log("randomsize : " + randomsize);
    let randomNumber = Math.floor(Math.random()*randomsize);
    console.log("your random number : " + randomNumber);
    return randomNumber;
}

function randomSelect(csvObject){
    console.log("randomeSelect 함수 호출");
    return new Promise((resolve) => {
        let randomSize = Object.keys(csvObject).length;
        console.log(randomSize);
        let randomSelectResults = [];
        for(var i = 0 ; i < MAX_RANDOM_NUMBER ; i++){
            let randomNumber = createRandomNumber(randomSize);
            
            console.log(csvObject[randomNumber]);
            console.log(i);
            randomSelectResults[i] = csvObject[randomNumber];
            console.log("randomSelect : " + randomSelectResults[i]);
        }
        return resoleve(randomSelectResults); 
    });
}

async function init(){
    csvObjectHiragana = await readCsv(urlHiragana);
    csvObjectKatagana = await readCsv(urlKatagana);
    console.log(Object.keys(csvObjectHiragana).length);
    console.log(typeof csvObjectHiragana);
    //console.log(csvObjectKatagana);

    csvObjectHiraganaRandom = await randomSelect(csvObjectHiragana);
    console.log("csvObjectHiraganaRandom : " + csvObjectHiraganaRandom);
    console.log(typeof csvObjectHiraganaRandom);
        
}

init();