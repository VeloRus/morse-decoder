const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';  
    for (let i = 0; i < expr.length; i += 10) {
        let symbol = expr.substr(i, 10);
        let key = '';
        if (symbol !== '*'.repeat(10)) {
            for (let j = 0; j < symbol.length; j += 2) {
                let partOfKey = symbol.substr(j, 2);
                if (partOfKey !== '00') {
                    key += (partOfKey === '10') ? '.' : '-';
                }                
            }
            result += MORSE_TABLE[key];            
        } else {
            result += ' ';
        }
    }
    return result;
}

module.exports = {
    decode
}