const readline = require('readline');

const numpad = `C B % : (\n7 8 9 x )\n4 5 6 - ^\n1 2 3 + =\n    0`
let calc = '',
calculator = {
    '1': () => calc += '1', '2': () => calc += '2', '3': () => calc += '3', '4': () => calc += '4',
    '5': () => calc += '5', '6': () => calc += '6', '7': () => calc += '7', '8': () => calc += '8',
    '9': () => calc += '9', '0': () => calc += '0', 'c': () => calc = '', 'b': () => calc = calc.slice(0, -1),
    ':': () => calc += '/', '%': () => calc += '%', 'x': () => calc += '*', '-': () => calc += '-',
    '(': () => calc += '(', ')': () => calc += ')', '^': () => calc += '**','+': () => calc += '+',
    
    '=': () => eval(`console.log(${calc})`)
}

console.log(`( Answer )\n\n${numpad}`)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ''
})

rl.on('line', input => {
    if (input.trim() != '' && input[0].toLowerCase() in calculator) {
        calculator[input[0].toLowerCase()]()
        if (input[0] != '=') {
            console.clear()
            console.log(`${calc}\n\n${numpad}\n`)
        }
    } else if (input == 'ctrlc') process.exit()
})

process.stdin.setRawMode(true);