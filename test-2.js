const dictionary = ['light', 'lime', 'slime', 'ball', 'show', 'orange', 'goal', 'seal', 'bean', 'apple'];
const search = document.querySelector('#search');
const autocomplete = document.querySelector('.autocomplete');

function showAutocomplete (input, dict) {
    let result = [];
    let inputValue = input.value.toLowerCase().replace(/[^A-z]/g, ''); // не учитываем все "небуквы"

    function addResult(result) {
        search.value = result;
        autocomplete.style.display = 'none';
    }

    dict.forEach(item => {        
        console.log(inputValue)

        for (let i = input.value.length; i >= 0; i--) {            
            if (inputValue.length &&  // проверяем, не пустой ли вообще инпут
                item.includes(inputValue) && // есть ли в слове из словаря искомая комбинация
                inputValue[0] === item[0] // совпадают ли начальные позиции
                ) {
                result.push(item);
                break;
            } else if (!result){
                inputValue = inputValue.slice(0, inputValue.length - 1) // если совпадений нет - отнимает по одной букве с конца пока не появятся
            }
        }        
    });

    if (input.value && result) {
        autocomplete.style.display = 'block';
        autocomplete.querySelectorAll('li').forEach(item => item.remove()); // удаляем предыдущие результаты
        
        result.forEach(item => {
            const element = document.createElement('LI');

            autocomplete.appendChild(element);
            element.textContent = item;

            element.addEventListener('click', () => {
                addResult(item);
            })
        })
    } else if (!input.value) {
        autocomplete.style.display = 'none';
    }
}

search.addEventListener('input', () => {
    showAutocomplete(search, dictionary);
});