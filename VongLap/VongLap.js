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




















