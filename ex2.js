class People{
    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calcularImc(){
        return this.weight / (this.height * this.height);
    }
}

let Jose = new People("José", 70, 1.75);
console.log(Jose.calcularImc());