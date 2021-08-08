// //The DOM 
const display = document.querySelector('.display p')
const content = document.createElement('div')
const buttons = document.querySelectorAll('button')
const numberButtons = document.querySelectorAll('.number'); 

let numberA; 
let numberB; 
let operation;
 
buttons.forEach((button)=>{
    button.addEventListener('click', function(e){
        
        if(e.target.classList[1] === 'number' && !operation){
            content.textContent += e.target.textContent; 
            display.replaceWith(content);
            numberA = Number(content.textContent);
        } 
        if(e.target.classList[1] === 'operation'){
            if(e.target.classList[0] === 'minus'){
                operation = '-'
            }  
            else if(e.target.classList[0] === 'plus'){
                operation = '+'
            } 
            else if(e.target.classList[0] === 'divide'){
                operation = '/'
            } 
            else if(e.target.classList[0] === 'multiply'){
                operation = '*'
            } 
       } 
        if(e.target.classList[1] === 'number' && numberA !== '' && (operation === '-'|| operation === '+' || operation === '/' || operation === '*')){
            content.textContent = ""
            content.textContent += e.target.textContent; 
            display.replaceWith(content);
            numberB = Number(content.textContent);
        }  
        if(e.target.classList[0] === 'equal' && numberA !== '' && numberB !== '' && operation !== ''){
            content.textContent = operate(operation, numberA, numberB)
            display.replaceWith(content); 
        } 
        if(e.target.classList[0] === 'AC'){
            content.textContent = ""
            reset()
        }
    })
})

// Functions
function reset(){
    numberA = ''
    numberB = ''
    operation = ''
}

function add(num1, num2){
    return num1 + num2; 
}

function subtract(num1, num2){
    return num1 - num2; 
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1/num2 
}

function operate(operator, num1, num2){
    if(operator === '+'){
       return add(num1, num2)
    } else if(operator === '-'){
        return subtract(num1, num2)
    } else if(operator === '*'){
        return multiply(num1, num2) 
    } else if(operator === '/'){
        return divide(num1, num2)
    }
}
