function isEven(num) {
    if (num%2===0) {
        return true;
    }
    return false;
}

// console.log(isEven(333));
// console.log(isEven(4));

function fact(num) {
    if (num==0) {
        return 1;
    }
    return num * fact(num-1);
}

// console.log(fact(0));
// console.log(fact(10));

function kebabToSnake(str) {
    return str.replace(/-/g,"_");
}

// console.log(kebabToSnake("dogs-are-awesome"));