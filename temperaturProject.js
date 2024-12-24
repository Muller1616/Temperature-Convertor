const textBox=document.getElementById("textBox");
const toFahrenhiet=document.getElementById("toFahrenhiet");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");

let temp;
function convert(){
    if(toFahrenhiet.checked){
       temp=Number(textBox.value);
       temp=temp*9/5 + 32;
       result.textContent=`${textBox.value} degree Celsius is equal to  `+ temp.toFixed(1) + "`F";//toFix is used to add the decimal point  into the number

    }
    else if(toCelsius.checked){
        temp=Number(textBox.value);
        temp=(temp-32)*(5/9);
        result.textContent=`${textBox.value} degree Fahrenhiet is equal to `  +temp.toFixed(1) + "`C";


    }
    else{
        result.textContent="Please Select a unit!";
    }

}