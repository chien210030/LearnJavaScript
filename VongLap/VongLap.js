
// VÒNG LẶP FOR 
/*
Tạo danh sách số ngẫu nhiên

Để vượt qua thử thách này, bạn cần kết hợp nhiều kiến thức đã học như: làm việc với array, đối tượng Math và loop.

👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length.
 Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
*/
function getRandNumbers(min,max,length){
    var mang =[];
        for(var i= 0; i <length;i++ ){
         var rand =     Math.random() * (max - min) + min;
         mang.push(rand);
        // console.log("in mang:",mang)
     
        }
            return mang;
            
    }
    
    getRandNumbers(1,45,2);
/**
 * Tính tổng các phần tử là số của mảng

Cho trước mảng numbers, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.
 */
function getTotal(arr) {
    var sum=0;
    console.log("sum:",sum)
for(var i=0; i < arr.length; i++){
        sum =sum+arr[i];
        console.log("in:",i)
        console.log("tong",arr[i])
   
}
return sum;
}

// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17
getTotal(1,2,3);

// VÒNG LẶP FOR...IN

// ví dụ
function run(object) {
    var mangchua =[];
for( var key in object){
    mangchua.push("Thuộc tính " + [key]+ " có giá trị " + object[key])
}
return mangchua;
}

// Expected results:
console.log(  run({ name: 'Nguyen Van A', age: 16 }));

//vòng lăp FOR...OF(dùng cho mảng)
// ẽx 
var frends =[
    'tuan','hung','ngan','minh'
]

for( var key of frends){
console.log("cac ban:",key)
}

// Trường hợp dùng Object
var nguoiYeu ={
name:'Wendy loren',
age :'19'
};

for(var doituong of Object.values(nguoiYeu)){
console.log(doituong);
}

//   VÒNG LẶP WHILE
var array = ['chien','phuong','thao','minh'];
var i = 0;
while(i < array.length){
console.log(array[i]);
i++;
}


//DO WHILE sê luôn thực hiện đoạn code trong do mỗi khi điều 
// kiện trong while đúng và nếu sai thì sẽ dừng lại.

//ví dụ nạp thẻ
var i =0;
var isSucces =false;
//TH thanh cong
do{
    i++;
    console.log(i)
    if(true){
        isSucces =true;
    }
console.log(isSucces);
}while(!isSucces && i <=3);

//BREAK: thoát khỏi vòng lặp, COUNTINE: bỏ qua lần lặp này sang lặp tiếp theo.

// Vòng lặp lồng nhau 
var myArray =[
        [1,2],
        [3,4],
        [5,6]
] ;
for(var i = 0; i < myArray.length;i++){
    console.log("so vong:",i);
for(var j=0; j< myArray[i].length ; j++){
    console.log("my:",myArray[i].length)
    console.log("my:",myArray[j])
    console.log(myArray[i][j]);
}
}

// Đệ Quy












