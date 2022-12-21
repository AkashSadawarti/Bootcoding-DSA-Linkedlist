
        //Same Method name with different class
        class Polymorphism {
            constructor(num1,num2){
                this.num1 = 5
                this.num2 = 6
            }

              Add() {
                console.log(`Addition is ${this.num1 + this.num2}`);
             }
        }
        class Poly {
            
            constructor(num1,num2){
                this.num1 = 10
                this.num2 = 15
            }
            Add(){
                console.log(`${this.num1} & ${this.num2} are two Numbers`)
             }
        }
        class Morph {
            
            constructor(num1){
                this.num1 = 5
            }
            Add(){
               console.log( `5-2 is ${this.num1 - 2}`)
           }
        }
    
       let P1 = new Polymorphism()
       let P2 = new Poly()
       let P3 = new Morph()
         P1.Add();
         P2.Add();
         P3.Add();
