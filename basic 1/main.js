const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt = document.getElementById("sum");
const resultTxt1 = document.getElementById("dif");
const resultTxt2 = document.getElementById("prod");
const resultTxt3 = document.getElementById("quo");

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt.innerHTML = sum;

        dif =  parseInt(num1Txt.value) - parseInt(num2Txt.value);
        resultTxt1.innerHTML = dif;

        prod = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        resultTxt2.innerHTML = prod;

        quo = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        resultTxt3.innerHTML = quo;
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";
    resultTxt1.innerHTML = "";
    resultTxt2.innerHTML = "";
    resultTxt3.innerHTML = "";
    sum = 0;
    dif = 0;
    prod = 0;
    quo = 0;
   
}