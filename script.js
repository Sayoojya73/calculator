


function displayNum(num){
    result.value+=num;
}
 // clear text
 function clearText(){
    result.value='';
}
// evaluate
function evaluateExpression(){
    result.value=eval(result.value);
}
// remove last item
function backspace(){
    result.value=result.value.slice(0,-1);
}
