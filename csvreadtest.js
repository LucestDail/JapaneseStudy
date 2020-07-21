/*
Before Starting
1. Node.js 설치되어있어야 합니다!
2. Module jquery.csv.js(min.js 포함) 설치되어 있어야 합니다!
*/
var CSV = require('comma-separated-values');
var fs = require('fs');
var d3 = require('d3-fetch');

var dataKatagana = '\
K,R1\r\n\
ア,a\r\n\
イ,i\r\n\
ウ,u\r\n\
エ,e\r\n\
オ,o\r\n\
カ,ka\r\n\
キ,ki\r\n\
ク,ku\r\n\
ケ,ke\r\n\
コ,ko\r\n\
サ,sa\r\n\
シ,shi\r\n\
ス,su\r\n\
セ,se\r\n\
ソ,so\r\n\
タ,ta\r\n\
チ,chi\r\n\
ツ,tsu\r\n\
テ,te\r\n\
ト,to\r\n\
ナ,na\r\n\
ニ,ni\r\n\
ヌ,nu\r\n\
ネ,ne\r\n\
ノ,no\r\n\
ハ,ha\r\n\
ヒ,hi\r\n\
フ,hu\r\n\
ヘ,he\r\n\
ホ,ho\r\n\
マ,ma\r\n\
ミ,mi\r\n\
ム,mu\r\n\
メ,me\r\n\
モ,mo\r\n\
ラ,ra\r\n\
リ,ri\r\n\
ル,ru\r\n\
レ,re\r\n\
ロ,ro\r\n\
ヤ,ya\r\n\
ユ,yu\r\n\
ヨ,yo\r\n\
ワ,wa\r\n\
ヲ,wo\r\n\
ン,nn\r\n\
ガ,ga\r\n\
ギ,gi\r\n\
グ,gu\r\n\
ゲ,ge\r\n\
ゴ,go\r\n\
ザ,za\r\n\
ジ,zi\r\n\
ズ,zu\r\n\
ゼ,ze\r\n\
ゾ,zo\r\n\
ダ,da\r\n\
ヂ,di\r\n\
ヅ,du\r\n\
デ,de\r\n\
ド,do\r\n\
バ,ba\r\n\
ビ,bi\r\n\
ブ,bu\r\n\
ベ,be\r\n\
ボ,bo\r\n\
パ,pa\r\n\
ピ,pi\r\n\
プ,pu\r\n\
ペ,pe\r\n\
ポ,po\r\n\
キャ,kya\r\n\
キュ,kyu\r\n\
キョ,kyo\r\n\
シャ,sya\r\n\
シュ,syu\r\n\
ショ,syo\r\n\
リャ,rya\r\n\
リュ,ryu\r\n\
リョ,ryo\r\n\
ミャ,mya\r\n\
ミュ,myu\r\n\
ミョ,myo\r\n\
ヒャ,hya\r\n\
ヒュ,hyu\r\n\
ヒョ,hyo\r\n\
チャ,tya\r\n\
チュ,tyu\r\n\
チョ,tyo\r\n\
ギャ,gya\r\n\
ギュ,gyu\r\n\
ギョ,gyo\r\n\
ジャ,zya\r\n\
ジュ,zyu\r\n\
ジョ,zyo\r\n\
ビャ,bya\r\n\
ビュ,byu\r\n\
ビョ,byo\r\n\
ピャ,pya\r\n\
ピュ,pyu\r\n\
ピョ,pro\r\n\
';

var dataHiragana = '\
H,R1\r\n\
あ,a\r\n\
い,i\r\n\
う,u\r\n\
え,e\r\n\
お,o\r\n\
か,ka\r\n\
き,ki\r\n\
く,ku\r\n\
け,ke\r\n\
こ,ko\r\n\
さ,sa\r\n\
し,shi\r\n\
す,su\r\n\
せ,se\r\n\
そ,so\r\n\
た,ta\r\n\
ち,chi\r\n\
つ,tsu\r\n\
て,te\r\n\
と,to\r\n\
な,na\r\n\
に,ni\r\n\
ぬ,nu\r\n\
ね,ne\r\n\
の,no\r\n\
は,ha\r\n\
ひ,hi\r\n\
ふ,hu\r\n\
へ,he\r\n\
ほ,ho\r\n\
ま,ma\r\n\
み,mi\r\n\
む,mu\r\n\
め,me\r\n\
も,mo\r\n\
ら,ra\r\n\
り,ri\r\n\
る,ru\r\n\
れ,re\r\n\
ろ,ro\r\n\
や,ya\r\n\
ゆ,yu\r\n\
よ,yo\r\n\
わ,wa\r\n\
を,wo\r\n\
ん,nn\r\n\
が,ga\r\n\
ぎ,gi\r\n\
ぐ,gu\r\n\
げ,ge\r\n\
ご,go\r\n\
ざ,za\r\n\
じ,zi\r\n\
ず,zu\r\n\
ぜ,ze\r\n\
ぞ,zo\r\n\
だ,da\r\n\
ぢ,di\r\n\
づ,du\r\n\
で,de\r\n\
ど,do\r\n\
ば,ba\r\n\
び,bi\r\n\
ぶ,bu\r\n\
べ,be\r\n\
ぼ,bo\r\n\
ぱ,pa\r\n\
ぴ,pi\r\n\
ぷ,pu\r\n\
ぺ,pe\r\n\
ぽ,po\r\n\
きゃ,kya\r\n\
きゅ,kyu\r\n\
きょ,kyo\r\n\
しゃ,sya\r\n\
しゅ,syu\r\n\
しょ,syo\r\n\
りゃ,rya\r\n\
りゅ,ryu\r\n\
りょ,ryo\r\n\
みゃ,mya\r\n\
みゅ,myu\r\n\
みょ,myo\r\n\
ひゃ,hya\r\n\
ひゅ,hyu\r\n\
ひょ,hyo\r\n\
ちゃ,tya\r\n\
ちゅ,tyu\r\n\
ちょ,tyo\r\n\
ぎゃ,gya\r\n\
ぎゅ,gyu\r\n\
ぎょ,gyo\r\n\
じゃ,zya\r\n\
じゅ,zyu\r\n\
じょ,zyo\r\n\
びゃ,bya\r\n\
びゅ,byu\r\n\
びょ,byo\r\n\
ぴゃ,pya\r\n\
ぴゅ,pyu\r\n\
ぴょ,pro\r\n\
';


const URL_HRGN = "./doc/Hiragana.csv";
//const URL_KTGN = "./doc/Katagana.csv";

d3.csv(URL_HRGN).then(function(data){
    console.log(data);
});

const csvHiragana = new CSV(dataHiragana, {header: true}).parse();
const csvKatagana = new CSV(dataKatagana, {header: true}).parse();
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

function init(){
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
}

init();