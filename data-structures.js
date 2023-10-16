const age = [30, 29, 54];

age.push(60); // => Constant Time Complexity: O(1)

age.unshift(10); // => Linear Time Complexity: O(n)

const myAge = age[1]; // => Constant Time Complexity: O(1)

const namePopularity = [
    { userName: 'Max', usages: 5 },
    { userName: 'Manuel', usages: 6 },
];

const manuelUsages = namePopularity.find(person => {
    return person.userName === 'Manuel';
}).usages;
// BEST CASE: Constant Time Complexity: O(1)
// WORST CASE: Linear Time Complexity: O(n)

const nameMap = {
    'Max': 5,
    'Manuel': 6
};

const manuelUsages2 = nameMap['Manuel'];
// ALWAYS: Constant Time Complexity: O(1)