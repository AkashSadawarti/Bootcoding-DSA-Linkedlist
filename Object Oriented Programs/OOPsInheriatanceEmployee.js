//Employee
class Employee{
    constructor(Name,post)
    {
        this.Name = Name;
        this.post = post;
    }
    //Method 1 Attendance to be inherited by child
    Attendance(){
        console.log(`Dear Employee ${this.Name},${this.post}, your attendance has been marked succesfully.`)
    }
    //Method 2 Assignment to be in herited by same name but different behaviour(polymorphism way).
    Assignment(){
        console.log(`Dear ${this.Name} your task for today is :`)
    }

}
class Manager extends Employee {
    constructor(Name,post,task){
        super(Name,post)
       this.task = 'Readme.file on AI Project'
    }
    managerattendance(){
        super.Attendance();
    }
    Assignment(){
        console.log(`Dear ${this.Name} your task for today is : ${this.task}.`);
    }
}
class HR extends Employee{
    constructor(Name,post,task){
        super(Name,post)
        this.task = 'Employee salary sheet'
    }
    hrattendance(){
        super.Attendance()
    }
    Assignment(){
        console.log(`Dear ${this.Name} your task for today is : ${this.task}. `)
    }
}

//Ojects
let date = new Date()
console.log('Date : ' + date);
console.log(`----------------------------------------------------------------------------`);
//for manager1
let man = new Manager('Mark','Project Manager')
man.Attendance()
man.Assignment()
//for Hr
console.log('----------------------------------------------------------------------------');
let hr = new HR('Alice','Senior HR Manager')
hr.Attendance()
hr.Assignment()