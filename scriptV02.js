function createCustomHTML(elementId) {
    document.getElementById(elementId).appendChild(document.createElement("div"));
    document.querySelectorAll("div")[1].
            appendChild(this.createInput("type", "answer", "screen"));
    document.querySelectorAll("div")[1].appendChild(
            document.createElement("br"));
    let buttons = ["(", ")", "C", "/", 7, 8, 9, "*", 4, 5, 6, "-",
        1, 2, 3, "+", 0, ".", "="];
    let index = 0;
    buttons.forEach(n => {
        index++;
        let button = document.createElement("button");
        button.innerHTML = n;
        document.querySelectorAll("div")[1].appendChild(button);
        if (index % 4 === 0) {
            document.querySelectorAll("div")[1].appendChild(
                    document.createElement("br"));
        }
    });
}

function createInput(type, id, name, value) {
    let input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("name", name);
    if (value !== undefined) {
        input.setAttribute("value", value);
    }
    return input;
}

class Calculator {
    constructor(){
        this.number = "";
        this.buttons = document.querySelectorAll("button");
    }
    
    getClick() {
        for (let item of this.buttons) {
            item.addEventListener("click", n => {
                let value = n.target.innerHTML;
                this.operate(value);
            });
        }
    }
    
    operate(value) {
        if (value === "=") {
            console.log(eval(this.number));
            this.number = eval(this.number);
            document.getElementById("answer").innerHTML = this.number;
        } else if (value === "C") {
            this.number = "";
            document.getElementById("answer").innerHTML = this.number;
        } else {
            this.number += value;
            console.log(this.number);
            document.getElementById("answer").innerHTML = this.number;
        }
    }
}

createCustomHTML("js");
let calc = new Calculator();
calc.getClick();
