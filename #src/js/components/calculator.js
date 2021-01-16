const sumSlider = document.getElementById('sumSlider');
const sumInput = document.getElementById('inputSumSlider');

const daySlider = document.getElementById('daySlider');
const dayInput = document.getElementById('inputDaySlider');

const percent = 1; // процентная ставка
let dayNum = 1; // кол-во дней
let sumNum = 5000; // сумма заёма

if (sumSlider) {
    const sumSliderMaxValue = 30000;

    noUiSlider.create(sumSlider, {
        start: [5000],
        connect: 'lower',
        step: 1000,
        range: {
            'min': 5000,
            'max': sumSliderMaxValue
        },
        format: wNumb({
            decimals: 0,
            thousand: ' ',
            suffix: ' ₽',
        }),
        pips: {
            mode: 'steps',
            values: 2,
            format: wNumb({
                suffix: ' ₽',
                thousand: ' ',
                decimals: 0,
            })
        },
    });


    sumSlider.noUiSlider.on('update', function (values, handle) {
        sumInput.value = values[handle];
        sumNum = parseInt(values[handle]) * 1000;

        $('.calculator-sum__price .calculator-sum__result span').text(calcSum(sumNum, dayNum, percent));
    });

    sumInput.addEventListener('change', function () {
        sumSlider.noUiSlider.set([sumInput.value]);
        sumNum = values[handle];

        $('.calculator-sum__price .calculator-sum__result span').text(calcSum(sumNum, dayNum, percent));
    });
}

if (daySlider) {
    const daySliderMaxValue = 90;

    noUiSlider.create(daySlider, {
        start: [1],
        connect: 'lower',
        step: 1,
        range: {
            'min': 1,
            'max': daySliderMaxValue
        },
        format: wNumb({
            decimals: 0,
        }),
        pips: {
            mode: 'steps',
            values: 2,
        },
    });

    daySlider.noUiSlider.on('update', function (values, handle) {
        dayInput.value = values[handle] + getNoun(values[handle], ' день', ' дня', ' дней');

        var date = new Date();
        date.setDate(date.getDate() + parseInt(values[handle]));
        var strDate = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();

        $('.calculator-sum__date .calculator-sum__result span').text(strDate);
        dayNum = values[handle];

        $('.calculator-sum__price .calculator-sum__result span').text(calcSum(sumNum, dayNum, percent));
    });

    dayInput.addEventListener('change', function () {
        daySlider.noUiSlider.set([dayInput.value]);

        var date = new Date();
        date.setDate(date.getDate() + parseInt(values[handle]));
        var strDate = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();

        $('.calculator-sum__date .calculator-sum__result span').text(strDate);
        dayNum = parseInt(values[handle]);

        $('.calculator-sum__price .calculator-sum__result span').text(calcSum(sumNum, dayNum, percent));
    });

    // изменения текста подписи в калькуляторе по дням
    $('#daySlider .noUi-value-large:nth-child(2)').text('от 1 дня');
    $('#daySlider .noUi-value-large:last-child').text('до ' + daySliderMaxValue + ' дней');
}

// изменение склонения день, дня, дней
function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
}

// В калькуляторе идет просто 1% за день от суммы (сумма+1%*кол-во дней = конечная сумма)
function calcSum(loanAmount, daysAmount, percent) {
    return loanAmount + (loanAmount / 100 * percent) * daysAmount;
}