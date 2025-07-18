// 1
function flattenDeep(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenDeep(item)); // Recursively flatten
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flattenDeep([1, [2, [3, [4]], 5]]));

// 2
function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// 3
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a);


// 4
function secondLargest(arr) {
    let max = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > max) {
            second = max;
            max = num;
        } else if (num > second && num !== max) {
            second = num;
        }
    }
    return second;
}

console.log(secondLargest([10, 5, 8, 1, 9]));


// 5
function countOccurrences(arr) {
    let counts = {};
    for (let num of arr) {
        if (counts[num]) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    }
    return counts;
}

console.log(countOccurrences([1,2,2,3,1,1]));


// 6
Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

console.log([1,2,3].myMap(x => x * 2));


// 7
let people = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "John", age: 22 }
];

people.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return a.age - b.age;
});

console.log(people);


// 8
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function filterPrimes(arr) {
    return arr.filter(isPrime);
}

console.log(filterPrimes([1,2,3,4,5,6,7,8,9]));


// 9
const arr = [1,2,3];
arr.length = 0;
console.log(arr[0]);


// 10
const x = [1,2,3];
const y = a.slice(0,2);
y[0] = 100;
console.log(x);


// 11
function findPairs(arr, target) {
    let pairs = [];
    let seen = [];

    for (let num of arr) {
        let complement = target - num;
        if (seen.includes(complement)) {
            pairs.push([complement, num]);
        }
        seen.push(num);
    }
    return pairs;
}

console.log(findPairs([1,2,3,4,5], 6));


// 12
function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(chunkArray([1,2,3,4,5,6], 2));


// 13
let total = [1,2,3,4].reduce((acc, curr) => acc + curr, 0);
console.log(total);


// 15 -->
// Time Complexity of splice
// Time Complexity: O(n)

// Because If you insert or delete from the middle or start, all elements after that point must be shifted.











