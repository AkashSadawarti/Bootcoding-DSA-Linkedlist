
//Note :  Function works independently w/o creating class 


    class  person {
        constructor(name , age ){
            this.name = name;
            this.age = age;
        }
    }

    class student extends person {
        constructor(name,age,email,school ){
            super(name, age)
            this.email = email;
            this.school = school;
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

    let doc = new Doctor('Alex',50,'Neuro Surgeon','Alexis')
    console.log(doc)

//this keyword create an empty object  { }
//Constructor Example

    // class Car{
    //     constructor(car,company,color){
    //          this.car = car;
    //          this.company = company;
    //          this.color = color;
    //     }
    // }
    // let c = new Car('X4','BMW','RED')

    // console.log(c)