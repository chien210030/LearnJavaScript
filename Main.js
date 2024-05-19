
// khai bao bien 
var  fullName = "tran quyet chien"; // var la biến trong javsript
var age =26;// khai bao tuoi 
 
// goi ham thong bao 
alert(fullName);
alert(age);
// mot so HÀM built-in (nhung ham dc xay dung sẵn) chú ý: day là nx hàm cơ bản 
/*
1.alert
2.console
3.confirm 
4.prompt
5.set timeout // hàm settimeout chạy code ở function(){code} trong khoảng thời gian mà mk tự cho
6.set interval// hàm setinterval chạy code ở function(){code} trong khoảng thời gian mk nhất định(auto)
*/
console.log("day la dong log")
console.warn("day la dong log")// hàm warn in ra cảnh báo màu vàng


confirm("xác nhan di nào");// day la ham xac nhan
prompt("xác nhan nao"); // số ra


setTimeout(function(){
    console.log("dòng này trong console")
},1000)
setInterval(function(){console.log("code này chạy khoảng thời gian nhất định")},1000)

/* Boolean */
/*
0 
false
"" _ ''
undefined
NaN
null
6 giá trị trên đây nếu convert về boolean thì luôn trả về kết quả false,
còn lại đều trả về true
*/ 

var a=1 ;
var b=2;


var isSucces = a>b;
console.log(isSucces);
/* kiểu dữ liệu trong javascript
1. kiểu dữ liệu nguyên thủy- Primitive Data 
- number 
- string 
- boolean 
- undefined 
- null 
- symbol 

2. dữ liệu phức tạp- complex data 
- function 
- object 
*/
//numbe type 
var a = 1;
var b=2 ;

// string type 
var fullName="chien";

// boolean type
var isSucces = true;

//undefined type
var age;

//null 
var isnull=null;//nothing 

//symbol 
var id = Symbol();

//function
var myfunction = function(){
    alert("hi xin chao cac ban!");
}
// hàm function phải gọi ra mới chạy đc, ví dụ :
myfunction();

//object types kiểu object mở và đóng là dấu ngoặc nhọn , 
// dùng để lưu hầu hết tất cả dữ liệu 
var myObject = {
    name:"chien tran",
    age: 18,
    adress: "hà nội",
    myfunction: function(){

    }
};
console.log("myobject",myObject);
// array 
var myarray =["d","o","c","t","h","a","n"];
console.log(myarray);















