function button1() {
    let input = document.getElementById("input").value = "";
}
function button2() {
    let input = document.getElementById("input").value;
    if (document.getElementById("input").value == "Error" || document.getElementById("input").value == "Infinity" || document.getElementById("input").value == "NaN") {
        let input = document.getElementById("input").value = "";
    } else {
        input = input.slice(0, -1);
        document.getElementById("input").value = input;
    }
}
function button3() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "%";
    }
}
function button4() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "/";
    }
}
function button5() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "7";
    }
}
function button6() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "8";
    }
}
function button7() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "9";
    }
}
function button8() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "*";
    }
}
function button9() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "4";
    }
}
function button10() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "5";
    }
}
function button11() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "6";
    }
}
function button12() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "-";
    }
}
function button13() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "1";
    }
}
function button14() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "2";
    }
}
function button15() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "3";
    }
}
function button16() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "+";
    }
}
function button17() {
    let input = document.getElementById("input").value;
    if (input.length < 10) {
        document.getElementById("input").value = input + "00";
    }
}
function button18() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + "0";
    }
}
function button19() {
    let input = document.getElementById("input").value;
    if (input.length < 11) {
        document.getElementById("input").value = input + ".";
    }
}
function smooth() {
    let inputValue = document.getElementById("input").value;
    let digits = 0;
    
    if (inputValue.indexOf("%") !== -1 || inputValue.indexOf("/") !== -1 || inputValue.indexOf("*") !== -1 || inputValue.indexOf("-") !== -1 || inputValue.indexOf("+") !== -1)
    {
        try {
            let inputValue = document.getElementById("input").value;
            let inputNumber = eval(inputValue);
        
                if (inputNumber.toString().split(".")[1]?.length >= 1) {
                    inputNumber = inputNumber.toFixed(11 - (inputValue.split(".")[0].length));
                }
        
                document.getElementById("input").value = inputNumber;

        } catch(error) {
            document.getElementById("input").value = "Error";
        }
    }
}