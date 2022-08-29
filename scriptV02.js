let calculator = `<div class="container"><h1>CALCULATOR</h1>
<div class="calculator"><input type="text" name="screen" id="answer" readonly>
<table>
<tr>
<td><button>(</button></td>
<td><button>)</button></td>
<td><button>C</button></td>
<td><button>/</button></td>
</tr>
<tr>
<td><button>7</button></td>
<td><button>8</button></td>
<td><button>9</button></td>
<td><button>*</button></td>
</tr>
<tr>
<td><button>4</button></td>
<td><button>5</button></td>
<td><button>6</button></td>
<td><button>-</button></td>
</tr>
<tr>
<td><button>1</button></td>
<td><button>2</button></td>
<td><button>3</button></td>
<td><button>+</button></td>
</tr>
<tr>
<td><button>0</button></td>
<td><button style="font-weight: bold;">.</button></td>
<td><button>/</button></td>
<td><button>=</button></td>
</tr>
</table>
</div>
</div>`;

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

document.getElementById("js").innerHTML = calculator;

let calc = new Calculator();
calc.getClick();
