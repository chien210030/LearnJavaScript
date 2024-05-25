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

//  OBJECT  prototype
// OBJECT prototype sử dụng khi mà một OBject constructor đã được khởi tạo thành công

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    }
    
    Student.prototype.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
    
    // Ví dụ khi sử dụng
    var student = new Student('Long', 'Bui');
    
    console.log(student.firstName);  // 'Long'
    console.log(student.lastName);  // 'Bui'
    console.log(student.getFullName());  // 'Long Bui'




// DATE  Đối tượng Date 
function getNextYear(){
    var date = new Date();
    var nextyear = date.getFullYear()+1;
    var month = date.getMonth();
    var day = date.getDate();
    console.log("tháng:",month)
    console.log("nam:",nextyear)
        return nextyear;
    }
getNextYear();
// MATH OBJECT

/**
 * Lấy ngẫu nhiên phần tử của mảng
Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.
 */
var mang =[]
function getRandomItem(mang) {

    var random = Math.floor(Math.random() * mang.length);
    return mang[random]
}




