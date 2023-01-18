const num = 4677767;

function numToString(num){

    const numMap = {
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine',
        10:'ten',
    }

    return numMap[num % 10]

}

console.log(numToString(num))

console.log(4664645 % 10)