/**
 làm quen với chuỗi 
   
 */

var mystring = "hoc js tai js js F8";

//keyword: javascript string methods 
// 1.length
console.log(mystring.length);

// 2.find index
console.log(mystring.indexOf(3));
console.log(mystring.search("js"));
// 3.cut string 
console.log(mystring.slice(4,6));

//4 replace thay thế
console.log(mystring.replace("js","javascript"));
console.log(mystring.replace(/js/g,"javascript"));

// 7.trim loại bỏ những khoảng trắng  ở hai đầu
console.log(mystring.trim().length);
// 8.slipt tìm điểm chung để  cắt một cái chuỗi thành Array 
var languages = 'javascript, php, ruby';
 console.log(languages.split(','));
 //9 get a character by index (lấy một vị trí mà mk muốn)
const myString2 = "chien tran";
console.log(myString2[2]);




