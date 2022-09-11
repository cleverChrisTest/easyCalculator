function createCustomHTML(elementId) {
    let div;
    let buttons = ["(", ")", "C", "/", 7, 8, 9, "*", 4, 5, 6, "-",
        1, 2, 3, "+", 0, ".", "="];
    let index = 0;
    let p = document.createElement("p");
    p.setAttribute("id", "answer");
    
    document.getElementById(elementId).appendChild(document.createElement("div"));
    div = document.querySelectorAll("div")[1];
    div.appendChild(p);
    div.appendChild(document.createElement("br"));
    
    buttons.forEach(n => {
        index++;
        let button = document.createElement("button");
        button.innerHTML = n;
        div.appendChild(button);
        if (index % 4 === 0) {
            div.appendChild(document.createElement("br"));
        }
    });
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
