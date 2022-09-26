const txtElement = ['Mahasiswa', 'Freelancer', 'sd','abd'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words= '';

(function teks(){
if (count==txtElement.length){
    count=0;
}
currentTxt=txtElement[count];
words=currentTxt.slice(0,++txtIndex);
document.querySelector('.efek').textContent=words;
if (words.length==currentTxt.length){
    count++;
    txtIndex=0;
}
setTimeout(teks, 500);
})();