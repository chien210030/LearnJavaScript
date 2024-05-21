var myAddress= 'address';
// student là một object
var student = {
    name :'chien',
    age : 20,
    email:'chien210030@gmail.com',
    [myAddress]: 'ha noi vn',
    getname :function(){
        return this.email;
    }
}

delete student.age
var bienGan ='name';
console.log(student[bienGan]);

console.log(student)
console.log(student.getname());

//OBJECT CONSTRUCTOR
// DAY LA 1 object constructor
function Animal(name, leg, speed){
    this.name = name ;
    this.leg = leg ;
    this.speed = speed;
   this.getName = function(){
                return `${this.name}`;
    }
}
var parrot = new Animal('vet',4,'334');
//them 1 truong vao constructor
parrot.age = 18;

console.log(parrot.getName());
console.log(parrot)







