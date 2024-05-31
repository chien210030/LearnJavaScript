/**
 * Cho trước hàm joinWithCharacter có 2 tham số là
 *  array và charactor, hãy hoàn thành phần nội dung hàm sao cho hàm trả về
 *  1 chuỗi là kết quả của việc nối từng phần tử của mảng với charactor.
 *
 */

function joinWithCharacter(array, charactor) {
  var trave = array.join(charactor);

  return trave;
}

// Ví dụ khi sử dụng
var cars = ["Honda", "Mazda", "Mercedes"];

var result = joinWithCharacter(cars, " - ");

console.log(result); // Expected: "Honda - Mazda - Mercedes"

/**
 * DỂ VƯỢT QUA THỬ THÁCH NÀY , hãy tạo hàm getLastElement có
 * 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array),
 *  hàm này sẽ trả về pHẦN TỬ CUỐI cùng trong mảng.
 */

// Viết hàm tại đây
function getLastElement(ham) {
  console.log("in ra:", ham.slice(2));
  var hi = ham.slice(-1);
  return hi;
}

// Ví dụ sử dụng
var animals = ["Monkey", "Tiger", "Elephant"];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

/**
 * Để vượt qua thử thách này, hãy tạo hàm getFirstElement có
 *  1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array),
 *  hàm này sẽ trả về phần tử đầu tiên trong mảng.
 */
// Viết hàm tại đây
function getFirstElement(ham) {
  console.log("in ra:", ham.slice(2));
  var hi = ham.slice(0, 1);
  return hi;
}

// Ví dụ sử dụng
var animals = ["Monkey", "Tiger", "Elephant"];
var result = getFirstElement(animals);

console.log(result); // Expected: "Monkey"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

//MẢNG pHẦN 2: các Method

var courses = [
  {
    id: 1,
    name: "javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "ngoc",
    coin: 250,
  },
  {
    id: 3,
    name: "ngoc",
    coin: 250,
  },
  {
    id: 4,
    name: "huong",
    coin: 250,
  },
  {
    id: 5,
    name: "chien",
    coin: 250,
  },
  {
    id: 6,
    name: "hai",
    coin: 250,
  },

];
//foreach sẽ in ra các  phần tử trong 1 mảng
courses.forEach(function(index,course){
console.log(index);
});

// every sẽ duyệt qua từng phần tử trong mảng và kiểm 
// tra điều kiện nếu dk sai thì dừng 
courses.every(function(index,course){
  console.log(index);
  return course.coin === 0;
  });

// some sẽ duyệt qua các phần tử và chỉ cần 
// 1 P/Tử đúng điều kiện thì sẽ dừng lại.
courses.some(function(index,course){
  // console.log(index);
  return course.coin === 0;
  });

// find sẽ lặp qua từng P/tử và luôn  trả về 1 P/tử  mk  
// tìm bằng tên.

var course = courses.find(function(course,index){
  // console.log(index);
  return course.name ==='ngoc';
  });
console.log(course);


// filter sẽ lặp qua từng P/tử và sẽ trả về tất cả phần 
// tử mk tìm kiếm 
var ptu = courses.filter(function(course,index){
  // console.log(index);
  return course.name ==='ngoc';
  });
console.log(ptu);


// MAP sẽ lặp qua từng phần tử trong mảng và trả về 1 mảng mới 
function  funMap(thamSoMap,index){
// console.log(thamSoMap);
return {
    id:thamSoMap.id,
    name: `name: ${thamSoMap.name}`,
     index:index, 
     coin: thamSoMap.coin,
     cointext: `gia ${thamSoMap.coin}`
};
};

var mangNew = courses.map(funMap);

console.log(mangNew)



//REDUCE sẽ trả về giá trị duy nhất sau khi đã thực hiện các  tính toán  điều kiện
/**
 * Ví dụ:
 * Tại SEA GAMES 31 vừa qua, đoàn thể thao Việt Nam đã đứng đầu bảng tổng sắp huy chương. 
 * Hãy tạo hàm getTotalGold có 1 tham số là mảng. Tính tổng số huy chương vàng mà đoàn 
 * thể thao Việt Nam đạt được trong kỳ SEA Game lần này.
 */
var sports = [
  {
      name: 'Bơi lội',
      gold: 11
  },
  {
      name: 'Boxing',
      gold: 3
  },
  {
      name: 'Đạp xe',
      gold: 4
  },
  {
      name: 'Đấu kiếm',
      gold: 5
  },
]

function getTotalGold(sports){
  var tv = sports.reduce(function(bienLuuTru,currentValue){
             // 0 (giá trị khởi tạo) ở tham số thứ hai ở hàm reduce là số gán đầu tiên của bienLuuTru
              return bienLuuTru + currentValue.gold;
      },0);
return tv;
}

// Expected results:
console.log(getTotalGold(sports)) // Output: 23


// ví dụ
/**
 * Cho trước danh sách một số bộ phim, hãy viết hàm calculateRating để 
 * tính điểm trung bình IMDB của những bộ phim mà Christopher Nolan làm đạo diễn.

Gợi ý
Dùng phương thức filter để lấy ra những bộ phim do Christopher Nolan làm đạo diễn
Dùng phương thức reduce để tính tổng điểm IMDB
Tính điểm IMDB trung bình
 */
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
  }
];


function calculateRating(watchList){
   var movieCN = watchList.filter(function(listTitle){
    return listTitle.Director === 'Christopher Nolan';
});
console.log("Phim cua Cn:",movieCN);

  var tong = movieCN.reduce(function(bienBanDau,sohienTai){
return bienBanDau + parseFloat(sohienTai.imdbRating);
  }, 0);
  console.log("tong:",tong);
    var diemtb =tong/movieCN.length;

return diemtb;
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675

// ví dụ về Method REDUCE
function arrToObj(arr){
  return   arr.reduce(function(obj,element){
      console.log("Ptu:", element[1]);
             obj[element[0]]= element[1];
             console.log("obj:",obj);
             return obj;
             },{});
 }  
 // Expected results:
 var arr = [
     ['name', 'Sơn Đặng'],
     ['age', 18],
 ];
 console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
 
//Phuong thức Includes('chuỗi cần tìm', vị trí )    chỉ có ở trong 
//chuỗi hoặc mảng và tìm kiếm chuỗi (P/tử)


















