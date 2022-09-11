document.getElementById("sum").addEventListener("click", sum);
document.getElementById("sub").addEventListener("click", sub);
document.getElementById("mul").addEventListener("click", mul);
document.getElementById("div").addEventListener("click", div);
        
    function sum() {
        let formnumbers=document.forms['form1'];
        let value1=formnumbers["operator1"]; 
        let value2=formnumbers["operator2"];
        let result=parseFloat(value1.value)+parseFloat(value2.value);
        if(isNaN(result))
          result='You must spicify operators'
        document.getElementById("result").innerHTML=`Result: ${result}`;
      }

    function sub() {
        let formnumbers=document.forms['form1'];
        let value1=formnumbers["operator1"]; 
        let value2=formnumbers["operator2"];
        let result=parseFloat(value1.value)-parseFloat(value2.value);
        if(isNaN(result))
          result='You must spicify operators'
        document.getElementById("result").innerHTML=`Result: ${result}`;
      }
      function mul() {
        let formnumbers=document.forms['form1'];
        let value1=formnumbers["operator1"]; 
        let value2=formnumbers["operator2"];
        let result=parseFloat(value1.value)*parseFloat(value2.value);
        if(isNaN(result))
          result='You must spicify operators'
        document.getElementById("result").innerHTML=`Result: ${result}`;
    }
    function div() {
        let formnumbers=document.forms['form1'];
        let value1=formnumbers["operator1"]; 
        let value2=formnumbers["operator2"];
        let result=parseFloat(value1.value)/parseFloat(value2.value);
        if(isNaN(result))
          result='You must spicify operators'
        document.getElementById("result").innerHTML=`Result: ${result}`;
    }