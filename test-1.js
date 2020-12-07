const inputNum = document.querySelector('.test-1__input');
const button = document.querySelector('.test-1__button');
const output = document.querySelector('.test-1__result');

function addDashes(num) {
    let str = num + '' // делаем из числа строку
    let arr = str.split('') // делаем из строки массив
    let newArr = []

    // тут два варианта:
    // 1) либо текущее число нечетное, предыдущее - четное, и это не самое начало
    // 2) либо текущее - четное, предыдущее - нечетное, и не начало

    arr.forEach((item, i) => {    
        if (+item % 2 !== 0 && i !== 0 && +arr[i - 1] % 2 === 0)  {
            newArr.push('-')             
        } 
        if (+item % 2 === 0 && i !== 0 && arr[i - 1] % 2 !== 0) {
            newArr.push('-') 
        }
        newArr.push(item)
    })

    return newArr.join('') // собираем обратно в строку
}

button.addEventListener('click', () => {
    let num = addDashes(+inputNum.value); // сделаем из числа строку, чтоб как в задании

    output.textContent = 'Результат: ' + num;
});