class Calculator{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    add(){
        return this.a+this.b;
    }
    subtract(){
        return this.a-this.b;
    }
    multiply(){
        return this.a*this.b;
    }
    divide(){
        return this.a/this.b;
    }
    modulo(){
        return this.a%this.b;
    }
}

calulate(10,20,"+");
calulate(10,20,"*");
calulate(10,20,"-");
calulate(10,20,"/");

function calulate(a,b,operator){
    const calculator = new Calculator(a,b);
    switch(operator){
        case "+":{
            return console.log(calculator.add());
        }
        case "-":{
            return console.log(calculator.subtract());
        }
        case "*":{
            return console.log(calculator.multiply());
        }
        case "/":{
            return console.log(calculator.divide());
        }
        case "%":{
            return console.log(calculator.modulo());
        }
        // default:{ 
        //     return console.log("Enter the value and operators correctly");
        // }
    }
}