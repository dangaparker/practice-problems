function doMath(num1, num2, operator){
    if(operator == '+'){
        var addition = num1 + num2;
        console.log(addition);
        return addition;
    }
    else if (operator === '-'){
        var subtraction = num1 - num2;
        console.log(subtraction);
        return subtraction;
    }
    else if (operator === 'x' || 'X' || '*'){
        var multiplication = num1 * num2;
        console.log(multiplication);
        return multiplication;
    }
    else if (operator === '/'){
        var division = num1 / num2;
        console.log(division);
        return division
    }
    else {return 'try again'}

}

doMath(5,2,'x');
