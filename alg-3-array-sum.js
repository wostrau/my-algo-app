const sumUp = (numbers) => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) sum += numbers[i];

    return sum;
};

const array = [3, 1, 2];

console.log(sumUp(array)); // should be 6 as a result