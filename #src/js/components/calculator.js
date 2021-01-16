const sumSlider = document.getElementById('sumSlider');
const sumInput = document.getElementById('inputSumSlider');

if (sumSlider) {
    const calculatorResLabel = document.querySelector('.calculator-sum__result');
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
    });

    sumInput.addEventListener('change', function () {
        sumSlider.noUiSlider.set([sumInput.value]);
    });
}

const daySlider = document.getElementById('daySlider');
const dayInput = document.getElementById('inputDaySlider');

if (daySlider) {
    const calculatorResLabel = document.querySelector('.calculator-sum__result');
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
    });

    dayInput.addEventListener('change', function () {
        daySlider.noUiSlider.set([dayInput.value]);

        var date = new Date();
        date.setDate(date.getDate() + parseInt(values[handle]));
        var strDate = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();

        $('.calculator-sum__date .calculator-sum__result span').text(strDate);
    });

    $('#daySlider .noUi-value-large:nth-child(2)').text('от 1 дня');
    $('#daySlider .noUi-value-large:last-child').text('до ' + daySliderMaxValue + ' дней');

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
}






    // sumSlider.noUiSlider.on('update', function (values, handle) {
    //     computerInput.value = values[handle];
    //     priceCalculate(computerPrice, serverPrice, serverInput.value, computerInput.value);
    // });
    // computerInput.addEventListener('change', function () {
    //     sumSlider.noUiSlider.set([5, computerInput.value]);
    //     priceCalculate(computerPrice, serverPrice, serverInput.value, computerInput.value);
    // });
    // serverSlider.noUiSlider.on('update', function (values, handle) {
    //     serverInput.value = values[handle];
    //     priceCalculate(computerPrice, serverPrice, serverInput.value, computerInput.value);
    // });
    // serverInput.addEventListener('change', function () {
    //     serverSlider.noUiSlider.set([1, serverInput.value]);
    //     priceCalculate(computerPrice, serverPrice, serverInput.value, computerInput.value);
    // });

    // function priceCalculate(computerPrice, serverPrice, serverNum, computerNum) {
    //     if (computerInput.value == sumSliderMaxValue || serverInput.value == serverSliderMaxValue) {
    //         calculatorResLabel.innerHTML = 'Индивидуальный расчет';
    //     } else {
    //         calculatorResLabel.innerHTML = serverPrice * serverNum + computerPrice * computerNum;
    //     }
    // }
    // $('#numSlider1 .noUi-value.noUi-value-horizontal.noUi-value-large')[1].innerHTML = sumSliderMaxValue - 1 + '+';
    // $('#numSlider2 .noUi-value.noUi-value-horizontal.noUi-value-large')[1].innerHTML = serverSliderMaxValue - 1 + '+';
