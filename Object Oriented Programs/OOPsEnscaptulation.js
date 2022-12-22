//In encapsulation we keep parameter excess private 
class person {
    constructor(_name,_age){
        var name = _name;
        this.age = _age;
        
        this.getname = function(){
            return name;
        }
    }
   
}

let p = new person('Adam',16)
console.log(p)