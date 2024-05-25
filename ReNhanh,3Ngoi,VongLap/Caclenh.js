




//SWITCH CASE

function run(fruits) {
    var result;

    switch (fruits) {
      case  "Banana":
            result = "This is a Banana";
            break;
      case  "Apple":
            result = "This is an Apple";
            break;
        default:
            result = "No fruits";
    }

    return result;
}


//TOAN TU 3 NGOI 
function getCanVoteMessage(age){
    var result = age >= 18 ? 'Bạn có thể bỏ phiếu':'Bạn chưa được bỏ phiếu';
   return result;
   }
   
   // Kỳ vọng
   console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
   console.log(getCanVoteMessage(15)) 











