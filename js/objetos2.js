var personalData = {
    name: "Matheus",
    lastName: "Fernando",
    age: 25,
    country: "Brazil",
    job: "Software Developer",
    fullName() {
        return `${this.name} ${this.lastName}`;
    }
}
// console.log(personalData.fullName());

var carro = {
    preco: 1000,
    portas: 4,
    marca: "Audi",
}
console.log(carro.preco=3000);

var cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    barke(pessoa){
        if(pessoa === 'Homen') {
            return 'au au';
        }
    },
}
console.log(cachorro.barke('Homen'));