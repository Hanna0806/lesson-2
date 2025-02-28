function myPrompt() {
    const num = prompt('Введите число');

    if (!num || !Number.isInteger(+num)) {
        alert('Некорректный ввод!');
        return
    }

    const numSystem = prompt("Введите систему счисления для числа");

    if (!numSystem || !Number.isInteger(+numSystem) || numSystem < 2 || numSystem > 36) {
        alert('Некорректный ввод!');
        return
    }

    const convertedNum = (+num).toString(+numSystem);

    alert(`Ответ: число ${num} в ${numSystem}-ой системе счисления = ${convertedNum}`);
}

myPrompt()

