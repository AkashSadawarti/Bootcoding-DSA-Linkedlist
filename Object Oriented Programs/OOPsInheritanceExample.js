
//Note :  Function works independently w/o creating class 
//  method are always 


    class  person {
        constructor(name , age ){
            this.name = name;
            this.age = age;
        }

        //Method
        greet(){
            console.log("Hello" + this.name)
        }
    }

    class student extends person {
        constructor(name,age,email,school ){
            super(name, age)
            this.email = email;
            this.school = school;
        }
      // Method to be called from parent class
        test(){
            super.greet() //this method will invoked for student object of parent class
        }
      //Seprate method of student
        lecture(){
            console.log(`Hey ${this.name} today is Chemistry Lecture`)
        }
    }

    class Doctor extends person {
        constructor(name,age,trade,hospital){
            super(name,age)
            this.trade = trade;
            this.hospital = hospital;
        }
    } 
    let p = new person("Elon",'18')
    console.log(p);

    let s = new student('Mark',25,'mark@gmail.com','Oxfords')
    console.log(s)
    s.test();
    s.lecture();

    let doc = new Doctor('Alex',50,'Neuro Surgeon','Alexis')
    console.log(doc)

//this keyword create an empty object  { }
//Constructor Example 
//Constructor helps to get rid of repeatitive fields and facilitate n numbers of objects
    class Car{
        constructor(car,company,color){
             this.car = car;
             this.company = company;
             this.color = color;
        }
    }
    let c = new Car('X4','BMW','RED')
    let suzu = new Car('Alto','Suzuki','Silver')

    console.log(c)
    console.log(suzu)