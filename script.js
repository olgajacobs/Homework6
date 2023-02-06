// task 1

let arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) { 
   console.log(arr[i]);
   if (arr[i] === 10) break;

}


// task 2

let arr1 = [1, 5, 4, 10, 0, 3];

console.log(`Индекс числа 4 в массиве: ${arr1.indexOf(4)}`);


// task 3

let arr2 = [1, 3, 5, 10, 20];

let arrJoin = arr2.join(' ');
console.log(arrJoin);

// task 4 

const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
console.log(array);


let evenArray = array.filter (function(elem) {
    if (elem%2 == 0) {
        return true;
    } else {
        return false;
    }

})

console.log(evenArray);


// task 5

let bigArr = new Array()
bigArr.length = 3


for (let j = 0; j < bigArr.length; j++) {
    bigArr[j] = new Array();
    bigArr[j].length = 3;
   
}
for (let j = 0; j < bigArr.length; j++) {
    for (let n = 0; n < bigArr[j].length; n++)
    bigArr[j][n] = 1
}


console.log(bigArr);


// task 6

let arr3 = [1 , 1 , 1];

arr3.push(2, 2, 2);
console.log(arr3);

// task 7

let arr4 = [9, 8, 7, 'a', 6, 5];
arr4.sort();
arr4.pop();
console.log(arr4);

// task 8

let arr5 = [9, 8, 7, 6, 5];

let num = Number(prompt('Введите число от 0 до 10'));

    for (m = 0; m < arr5.length; m++) {
        if (arr5.includes(num)) {
        console.log ('число содержится в массиве');
         } else {
        console.log('число не содержится в массиве');
         }
}


// task 9 

let line = 'abcdef';
line = line.split('');
line = line.reverse();
line = line.join ('');
console.log(line);

// task 10

const average = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));
console.log(average);

function calcAverage() {
    let sum = 0;

    for (d=0; d<average.length; d++) {
    sum += average[d]/ average.length
    }
console.log(sum);
} 

calcAverage();

// task 11

let arr6 = [[1, 2, 3,],[4, 5, 6]];
let arr7 = arr6[0].join('');
let arr8 = arr6[1].join('');
let arr9 = arr7 + arr8;
arr9 = arr9.split('');
console.log(arr9);

// task 12

const arr10 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));
console.log(arr10);

for (v = 0; v < arr10.length-1; v++) {
    let calc = arr10[v] + arr10[v+1];
    console.log(calc);

}
for (; v = arr10.length-1;) {
    console.log(arr10[v]);
    break;
}



// task Jenya

const arrMult = Array.from({ length: 11 }, () => Math.floor(Math.random() * 10+1));
console.log(arrMult);

let mult = 1;

for (r = 0; r < arrMult.length; r++) {

    if ((r+1)%3 === 0) {
        mult = mult * arrMult[r];
    
    } else {
        continue;
    }
    
}
console.log(mult);









