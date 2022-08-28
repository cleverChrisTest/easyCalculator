let text = "";
let lastNumber = 0;
let result = 0;
let lastOperation = "";
let counter = 0;

const calculator = function(){
    let calculator = "<div id='calc'><div id='screen'>0</div>" 
            + "<div id='result'>0</div><div>";
    for(i = 1; i < 10; i++){
        calculator += "<button onclick='f1(" + i + ")'>" 
                + i + "</button>";
        if(i === 3){
            calculator += "<button onclick=\"f1(\'C\')\">C</button><br>";
        } else if (i === 6){
            calculator += "<button onclick=\"f1(\'+\')\">+</button><br>";
        } else if(i === 9){
            calculator += "<button onclick=\"f1(\'-\')\">-</button><br>";
        }
    }
    calculator += "<button onclick=\"f1(\'0\')\">0</button>" + 
            "<button onclick=\"f1(\'=\')\">=</button></div>";
    return calculator;
};

/**
 * 
 * @param {type} n
 * @returns {undefined}
 */
const f1 = function(n){
    n = checkpressed(n);
    switch (n){
        case "+":
            sum();
            break;
        case "-":
            sub();
            break;
        case "=":
            eq();
            break;
        case "C":
            clear();
            break;
        default:
            text += n.toString();
            document.getElementById("screen").innerHTML = text;
            break;
    }
};

/**
 * 
 * @param {type}
 * @returns {undefined}
 */
const sum = function (){
    lastNumber = getLastNumber();
    text += "+";
    console.log(lastOperation);
    if(lastOperation === "+" || lastOperation === ""){
        result += lastNumber;
    } else if(lastOperation === "-") {
        result -= lastNumber;
    } else {
        //do nothing
    }
    lastOperation = "+";
    printResults();
    return -1;
};

/**
 * Substract the last number introduced to the result
 * @returns {Number}
 */
const sub = function(){
    lastNumber = getLastNumber();
    text += "-";
    if(lastOperation === "+" || lastOperation === ""){
        result += lastNumber;
    } else if(lastOperation === "-") {
        result -= lastNumber;
    } else {
        //do nothing
    }
    lastOperation = "-";
    printResults();
    return -1;
};

/**
 * Modify lastOperation, result, lastNumber and text, it also calls printResults
 * to show on the page the result of the operations performed.
 * @returns {Number}
 */
const eq = function(){
    lastNumber = getLastNumber();
    text += "";
    if(lastOperation === "+"){
        result += lastNumber;
    } else if(lastOperation === "-"){
        result -= lastNumber;
    } else {
        //do nothing
    }
    lastOperation = "=";
    counter = 0;
    printResults();
    return -1;
};

/**
 * 
 * @returns {undefined}
 */
const clear = function(){
    lastNumber = counter = result = 0;
    lastOperation = text = "";
    print(0, "result");
    print(0, "screen");
    return "cleared";
};

/**
 * 
 * @returns {Number}
 */
const getLastNumber = function(){
    let lastNumberString = text.split(/[+-]/).pop();
    if(lastNumberString === ""){
        lastNumberString = 0;
    }
    return parseInt(lastNumberString);
};

const print = function(text, ID){
    document.getElementById(ID).innerHTML = text;
};

/**
 * 
 * @param {type} n
 * @returns {String}
 */
const checkpressed = function(n){
    let operators = ["+", "-", "="];
    if(operators.includes(n.toString())){
        counter++;
        if(counter > 1){
            return "";
        } else {
            return n;
        }
    } else {
            counter = 0;
            return n;
    }
};

/**
 * Shows a value in the html page whit the same id.
 * @returns {String}
 */
const printResults = function(){
    document.getElementById("screen").innerHTML = text;
    document.getElementById("result").innerHTML = result;
    return text + " " + result;
};

print(calculator(), "js");
document.getElementById("screen").innerHTML = 0;
