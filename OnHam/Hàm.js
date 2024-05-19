// cac loai ham
//  declarationFunction 



    function declarationFunction(a,b){

        var tong= a+ b;
        console.log(tong);
        return tong;
        } 

declarationFunction(2,3);





// expressionFunction 
var expressionFunction = function (a,b){
    
    var tong2 = a+ b;
    // console.log(tong2);
    return tong2;
}
console.log("in ra ham:",expressionFunction);
expressionFunction(3,4);


function hamString(){
    var myString ="toi dang hoc javascript";

console.log("do dai:",myString.length);
 console.log("vi tri cua chu cai:",myString.charAt(2));
 console.log("vi tri o:",myString.indexOf("i"));
}
hamString();

function HamSo(){
  
    var so = 100;
    //Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
  console.log("so huu han:",isFinite(so));

//Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
console.log("so nguyen:",Number.isInteger(so));

//Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
var chuoi ="108.22";
console.log("chuyen chuoi sang so:",Number.parseFloat(chuoi));

// Chuyển đổi chuỗi đã cho thành một số nguyên
console.log("chuyen chuoi sang so(int):",Number.parseInt(chuoi));

// Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
var so2 = 23.544;
console.log("ham toFixed:",so2.toFixed());

// Chuyển đổi và trả về số đã cho dưới dạng chuỗi
console.log("tostring",so2.toString());
console.log(typeof so2.toString());


}
HamSo();

function hamMang(){
    var ten = ['chien','y','linh','hai'
];
console.log(ten);
console.log("do dai cua mang:",ten.length);
console.log("gia tri cua vi tri:",ten[2]);
// thuc hanh cac Method
//length
console.log(ten.toString());
//join cx giong nhu string nhung se them lần lượt ký tự vào từng phần tử của mảng
console.log(ten.join('---'));

//pop -> sẽ trả về phần tử cuối và xóa nó đi trong mảng từ dưới lên trên
console.log("Tra ve:",ten.pop());
console.log("TH1:",ten);
console.log("Tra ve:",ten.pop());
console.log("TH2:",ten);

//push ngược so với push là thêm phần tử ở cuối mảng và trả về mang mới
console.log(ten.push('hanh'));
console.log("them phan tu dau mang:",ten);

//shift: xóa phần tử đầu mảng và trả về phần tử đã xóa.
console.log("shift method:",ten.shift());
console.log("mang moi:",ten);

//unshift: them phan tu ở đầu mảng và trả về mang mới

//splice : them phần tử mô tả Method: splice(viTri PTử Bắt Đầu,Số PTử Cần Xóa,chuỗi hay ký tự muốn chèn)
var mangViDu= ['tam','duc','chien','chinh'];
console.log(mangViDu.splice(1,2,"PTU moi"));
console.log("splice:",mangViDu);

//concat: hop nhat mang vao
var mang1 =['chien','lieng thien',"manh"];
var mang2 =['ten','noi','mang'];
 console.log("mang da hop nhat:",mang1.concat(mang2));

// Slice :cắt ra một phần của một mảng thành mảng mới./ Mô tả:Slice(viTri PTử Bắt Đầu,)
var mangmau = ['tran','quyet','chien','hai','linh','tinh'];
console.log("slice:",mangmau.slice(1,4,'thay'));

}

hamMang();


