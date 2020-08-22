function iqTest(numbers) {

    //1 seperate numbers in string
    let stringArray = numbers.split(" ")
    //2 convert to numbers
    let numberArray = stringArray.map(el => parseInt(el))
    //3 check numbers for odds and evens
    let evens = numberArray.filter(number => number % 2 == 0)

    let odds = numberArray.filter(number => number % 2 == 1)

    //5 return index + 1 with condition that is === 1

    if (evens.length === 1) {
        return numberArray.indexOf(evens[0]) +1
    } if (odds.length === 1) {
        return numberArray.indexOf(odds[0]) +1
    }




}