    function domLoaded(){
      const out = document.getElementById("output");
      const plus = document.getElementById("plus");
      const minus = document.getElementById("minus");
      const divide = document.getElementById("divide");
      const multiply = document.getElementById("multiply");
      const greater = document.getElementById("greater");
      const less = document.getElementById("less");
      const equals = document.getElementById("equals");
      const oprator = document.getElementById("operator");
      let operatornum = 1;
      const result = document.getElementById("result");

    plus.addEventListener("click", update1);
    minus.addEventListener("click", update2);
    divide.addEventListener("click", update3);
    multiply.addEventListener("click", update4);
    greater.addEventListener("click", update5);
    less.addEventListener("click", update6);
    equals.addEventListener("click", math);
    
  
    }
    function update1(){
      operatornum = 1
      operator = +
    }
    function update2(){
      operatornum = 2
    }
    function update3(){
      operatornum = 3
    }
      function update4(){
      operatornum = 4
    }
      function update5(){
      operatornum = 5
    }
      function update6(){
      operatornum = 6
    }
    function math(){
      let n1 = parseFloat(document.getElementById("no1"));
      let n2 = parseFloat(document.getElementById("no2"));
  
      if(operatornum == 1){
        result = add(n1, n2);
      }
      else if(operatornum == 2){
        result = sub(n1, n2);
      }
      else if(operatornum == 3){
        result = div(n1, n2);
      }
      else if(operatornum == 4){
        result = mult(n1, n2);
      }
      else if(operatornum == 5){
        result = mor(n1, n2);
      }
      else if(operatornum == 6){
        result = les(n1, n2);
      }
      out = result;
    }
    function add(n1, n2){
      return n1 + n2;
    }
    function sub(n1, n2){
    return n1 - n2;
    }
  
    function div(n1, n2){
    return n1 / n2;
    }
    function mult(n1, n2){
    return n1 * n2;
    }
    function mor(n1, n2){
      
      if(n1 < n2){
        return "false";
      }
      
      else{
        return "true";
      }
    }
    function les(n1, n2){
      if(n1 > n2){
        return false;
      }
      else{
        return true;
      }
    }
      
