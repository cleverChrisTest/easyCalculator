let number = "";

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

class calculator {
  constructor(){}
  
 /**
  * Gets the value of the clicked button to process it inside the operate(function)
  * @returns {undefined}
  */
  function getClick(){
      for (let item of buttons) {
          item.addEventListener("click", n => {
              let value = n.target.innerHTML;
              operate(value);
          });
      }
  }
  
  function operate(value) {
      if(value === "="){
          console.log(eval(number));
          number = eval(number);
          document.getElementById("answer").innerHTML = number;
      } else if(value === "C"){
          number = "";
          document.getElementById("answer").innerHTML = number;
      }
      else {
          number += value;
          console.log(number);
          document.getElementById("answer").innerHTML = number;
      }
  }
  
  
}


print(calculator, "js");
buttons = document.querySelectorAll("button");

getClick();
