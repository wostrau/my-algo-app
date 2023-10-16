// T = n => Linear Time Complexity => O(n)
const getMin = (numbers) => {
    if (!numbers.length) throw new Error('Should not be an empty array!');
    // if (numbers.length === 1) return numbers[0];

    let currentMinimum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < currentMinimum) {
            currentMinimum = numbers[i];
        }
    }

    return currentMinimum;
};

// T = n * n => Quadratic Time Complexity => O(n^2)
const getMin2 = (numbers) => {
    if (!numbers.length) throw new Error('Should not be an empty array!');

    for (let i = 0; i < numbers.length; i++) {
        let outerElement = numbers[i];

        for (let j = i + 1; j < numbers.length; j++) {
            let innerElement = numbers[j];

            if (outerElement > innerElement) {
                numbers[i] = innerElement;
                numbers[j] = outerElement;

                outerElement = numbers[i];
                innerElement = numbers[j];
            }
        }
    }

    return numbers[0];
};

const testNumbers = [3, 1, 2, 0.5, 5];

const minNumber = getMin2(testNumbers);

console.log(minNumber);