//task 1 the longest name in the list
function findLongestName(...names) {
    let maxLength = 0;
    let longestName = "";

    for (const name of names) {
        if (name.length > maxLength) {
            maxLength = name.length;
            longestName = name;
        }
    }

    return longestName;
}

const result = findLongestName('Alex', 'George', 'Michael',);
console.log(`Самое длинное имя в списке: ${result}`);

//task 2 proportion calculator 

function calculateProportion() {// declaring function
    const firstNumber = parseFloat(prompt("Введите первое число в пропорции:"));
    const secondNumber = parseFloat(prompt("Введите второе число в пропорции:"));
    const proportion = (firstNumber / secondNumber) * 100;
    alert(`Результат вычисления: ${proportion}%`);
}

// Calling   the function to run all operations above 
calculateProportion()

//task 3 the Fibonacci numbers function

function fibonacci(n) {
    const sequence = [0, 1];
    let i = 2;
    while (sequence[i - 1] + sequence[i - 2] <= n) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
        i++;
    }
    return sequence;
}

const targetNumber = parseInt(prompt("Введите число, до которого нужно вывести числа Фибоначчи:"));
const fibonacciSequence = fibonacci(targetNumber);

console.log(`%cСписок чисел Фибоначчи до ${targetNumber}:`, 'background: #232323; color: FFD700; font-size: 55px;', fibonacciSequence);












  

