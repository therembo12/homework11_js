// AUTO OBJECT


// let auto = function (manufacturer, model, year, average_speed) {
//   return {
//     manufacturer: manufacturer,
//     model: model,
//     year: year,
//     average_speed: average_speed,

//     info: function () {
//       for (key in this) {
//         if (typeof this[key] == "function") continue;
//         console.log(key, ":", this[key]);
//       }
//     },
//     time: function (H) {
//       let t = H / this.average_speed;
//       t = t + Math.floor(t / 4);
//          console.log(t.toFixed());
//     },
//   };
// };
// let bmw = auto("bmw", "x6", 2008, 150);
// let mers = auto("mersedes", "E220", 2012, 200);
// mers.info();
// bmw.info();
// mers.time(1500);
// bmw.time(25000);






// DROBS
// let drob = function(n,z){
//     return {
//       n:n,
//       z:z
//     }
// }
// let drob_1 = drob(5,25)
// let drob_2 = drob(9,27)
// function Addition(obj1,obj2){
//   let Resultn = ((obj1.z * obj2.z)/obj1.z) + ((obj1.z * obj2.z)/obj2.z),
//       Resultz = obj1.z * obj2.z
//       return  drob_add = drob(Resultn,Resultz)
// }
// function subtraction(obj1,obj2){
//   let  Resultz = obj1.z * obj2.z,
//         Resultn = (((obj1.z * obj2.z)/obj1.z)*obj1.n) - (((obj1.z * obj2.z)/obj2.z)*obj1.n)
//         return  drob_sub = drob(Resultn,Resultz)

// }
// function Multiplication(obj1,obj2){
//   let Resultn = obj1.n * obj2.n,
//       Resultz = obj1.z * obj2.z
//       return  drob_multi = drob(Resultn,Resultz)
// }
// function division(obj1,obj2){
//   let  Resultn = obj1.n * obj2.z,
//         Resultz = obj1.z * obj2.n
//         return  drob_div = drob(Resultn,Resultz)
// }
// function abbr(obj){
//   let Resultn = obj.n,
//       Resultz = obj.z,
//           M = Resultn, N = Resultz;
//     for (var i = 2; i <= Resultn; i++) {
//         if (Resultn % i === 0 &&  Resultz % i === 0)
//             M = Resultn / i, N = Resultz / i;
//     }
//   return  addr_obj = drob(M,N)
// }
// console.log(Addition(drob_1,drob_2))
// console.log(subtraction(drob_1,drob_2))
// console.log(Multiplication(drob_1,drob_2))
// console.log(division(drob_1,drob_2))
// console.log(abbr(drob_div))




// CLock Object

let time = function (hour, minutes, second) {
  
  return {
    hour: hour,
    minutes: minutes,
    second: second,

    info: function () {
      for (key in this) {
        if (typeof this[key] == "function") continue;
        console.log(key, ":", this[key]);
      }
    },
    second_plus: function (s_plus) {
      second = second + s_plus;
      if (second > 59) {
        let temp = second % 60;
        second = second - temp;

        second = second / 60;
        minutes = minutes + second;

        second = temp;
      }
      if (minutes > 59){
        let temp = minutes % 60;
        minutes = minutes - temp;

        minutes = minutes / 60;
        hour = hour + minutes;

        minutes = temp;
      }
      if(hour > 23){
        hour = 0
      }
      
      return ($time_new = time(hour, minutes, second));
    },
    minutes_plus:function(m_plus){
      minutes = minutes + m_plus;
      if (minutes > 59){
        let temp = minutes % 60;
        minutes = minutes - temp;

        minutes = minutes / 60;
        hour = hour + minutes;

        minutes = temp;
      }
      if(hour >= 23){
        hour = hour - 24
      }
      return ($time_new = time(hour, minutes, second));
    },
    hour_plus:function(h_plus){
      hour = hour + h_plus
      if(hour >= 23){
        hour = hour - 24
      }
      return ($time_new = time(hour, minutes, second));
    }
  };
};

let $test_time = time(23, 0, 50);
$test_time.info();
console.log($test_time.hour_plus(2));

// Task 12 

let rectangle = (x1, y1, x2, y2, color) => {
  return {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    show: function () {
      let figure = document.createElement("DIV");
      figure.classList.add("figure");
      figure.style.width = Math.abs(this.x1 - this.x2) + "px";
      figure.style.height = Math.abs(this.y1 - this.y2) + "px";
      figure.style.left = this.x1 + "px";
      figure.style.top = this.y1 + "px";
      figure.style.backgroundColor = color;
      document
        .querySelector(".canvas")
        .insertAdjacentElement("beforeend", figure);
    },
  };
};
let rect_1 = rectangle(25, 25, 100, 100, "black");
let rect_2 = rectangle(100, 100, 50, 150, "Yellow");
function X_move(obj_r, X_move) {
  moved_x1 = obj_r.x1 + X_move;
  moved_x2 = obj_r.x2 + X_move;
  return rectangle(moved_x1, obj_r["y1"], moved_x2, obj_r["y2"], "green");
}
rect_1.show();
function Y_move(obj_r, Y_move) {
  moved_y1 = obj_r.y1 + Y_move;
  moved_y2 = obj_r.y2 + Y_move;
  return rectangle(obj_r["x1"], moved_y1, obj_r["x2"], moved_y2, "blue");
}
function X_Y_move(obj_r, X_move,Y_move) {
  moved_x1 = obj_r.x1 + X_move;
  moved_y1 = obj_r.y1 + Y_move;
  moved_x2 = obj_r.x2 + X_move;
  moved_y2 = obj_r.y2 + Y_move;
  return rectangle(moved_x1,moved_y1,moved_x2,moved_y2,'Purple')
}
X_Y_move(rect_1,70,150).show()