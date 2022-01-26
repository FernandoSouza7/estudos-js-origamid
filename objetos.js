// var person = {
//     name: "Matheus",
//     age: 25,
//     country: "Brazil"
// }

// console.log(person);

var isEven = {
    value: 2,
    even: value => {
        var value1 = value % 2;
        if(value1 == 0) {
            return `${value} is even`;
        }else {
            return `${value} is not even`
        }
    },
    nameValue: () => {
        console.log(this.value);
    }
}

console.log(isEven.value);