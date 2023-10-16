// T = 1 => Constant Time Complexity => O(1)
const isEvenOrOdd = (number) => {
    const result = number % 2;

    return result === 0
        ? 'Even'
        : 'Odd';

    // if (result === 0) {
    //     return 'Even';
    // } return 'Odd';
};

console.log(isEvenOrOdd(10)); // should get => 'Even'
console.log(isEvenOrOdd(11)); // should get => 'Odd'