function validateEquation(equation) {
    if (!equation || !/[+\-*/]/.test(equation)) {
      return "не хватает одного или нескольких операндов";
    }
    
    if (/[^\d+\-*/]/.test(equation)) {
      return "в выражении должны использоваться только операторы +, -, /, *";
    }
    
    if (/[*+\-/]{2,}/.test(equation)||/^[*+\-/]/.test(equation)||/[*+\-/]$/.test(equation)) {
      return "не хватает одного или нескольких операндов";
    }
    
    if (/\D[*+\-/]\D/.test(equation)) {
      return "операнды могут быть только числами";
    }
    
    return "";
  }
  
  
  validateEquation ('1+1') 
  validateEquation('1*') 
  validateEquation('1@2') 
  validateEquation('3*g') 
  validateEquation('') 
  validateEquation('2+3') 




  function calcEquation(expression) {
    // Убираем пробелы в начале и в конце строки
    expression = expression.trim();
    const validExpression = /^(\d+(\.\d+)?)([+\-*/])(\d+(\.\d+)?)$/;
  
   // Если выражение не соответствует формату, например, '39+'
    if (!validExpression.test(expression)) {
        return '';
    }
  // Если выражение состоит из одного числа
    if (/^\d+$/.test(expression)) {
        return '';
    }

   

    try {
        const result = eval(expression);
        return result.toString();
    } catch (error) {
        return '';
    }
}

console.log(calcEquation('2+3'));  // '5'
console.log(calcEquation('1*2'));  // '2'
console.log(calcEquation('1-2'));  // '-1'
console.log(calcEquation('9/3'));  // '3'
console.log(calcEquation('39'));   // ''
console.log(calcEquation('39+'));  // ''