const dictionary = ['light', 'lime', 'slime', 'ball', 'show', 'orange', 'goal', 'seal', 'bean', 'apple'];
const search = document.querySelector('#search');
const autocomplete = document.querySelector('.autocomplete');

function showAutocomplete (input, dict) {
    let result = [];
    let inputValue = input.value.toLowerCase().replace(/[^A-z]/g, '');

    function addResult(result) {
        search.value = result;
        autocomplete.style.display = 'none';
    }

    function getResult(word) {
        dict.forEach(item => {               // перебираем словарь, ищем совпаения
            if (word.length && item.includes(word) && word[0] === item[0]) {
                result.push(item);
            }
        }); 
        if (!result.length && word) {         // если совпадений нет, отнимаем последнюю букву и запускаем новую функцию
            getResult(word.slice(0, word.length - 1))
        }
    }

    getResult(inputValue);

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