var today = new Date ();
var currentDay  = today.getDate(); /// текущий день
var currentMonth = today.getMonth(); /// текущий месяц 
var currentYear =  today.getFullYear(); /// текущий год

var monthNames = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ];

var date = document.getElementById("date");
var month = document.getElementById("month");
var year = document.getElementById("year");
var day = document.getElementById("day");

var prev = document.querySelector(".prev");
  
var next = document.querySelector(".next");

var card = document.querySelector(".card");
 

month.textContent = monthNames[currentMonth];
year.textContent = currentYear.toString();
// day.textContent = currentDay  + " " +  "День";



next.addEventListener('click', function() {
    nextItem(); 
});

prev.addEventListener('click', function() {
    prevItem();
});

// function createMonth(currentDay, currentMonth,currentYear) {
//     for(var i = 0; i < 6; i++ ){
//         let ul = document.createElement('ul');
//         ul.classList.add("calendar-days");
//         for(var j = 0; j < 7; j++){
//             if(i === 0 && j <  startDay ()){
//                 var column = document.createElement("li");
//                 var cellText = document.createTextNode("");
//                     column.append(cellText);
//                     ul.append(column);
//             }else if(day > getDaysInMonth()){
//                 break;
//             }else{
//                 var column = document.createElement("li");
//                 var cellText = document.createTextNode(day);
//                 if (day === today.getDate()){
//                     column.classList.add("bg");
//                 } 
//                 column.append(cellText);
//                 ul.append(column);
//                 day++;
//             }
//         }
//         card.append(ul);
//     }
// }

//создание месяца
function createMonth(month) {

    for(let i = startDay(); i > 0;i--){
        date.innerHTML += `<li class=".calendar__dates last__days">
        </li>`;
    }

    for(let i = 1; i <= getDaysInMonth(month); i++) {
        if( i === currentDay){
            date.innerHTML += `<li class=".calendar__dates bg">${i}</li>`;
        }else {
            date.innerHTML += `<li class=".calendar__dates">${i}</li>`;
        }
    }
}

createMonth(currentMonth);

//получаем дни месяца 

function getDaysInMonth(month){
    var arr = new Array(12);
    arr[0] = 31; // Январь
    arr[1] = (isLeap(year)) ? 29 : 28 ;// Февраль
    arr[2] = 31; // Март
    arr[3] = 30; // Апрель
    arr[4] = 31; // Май
    arr[5] = 30; // Июнь
    arr[6] = 31; // Июль
    arr[7] = 30; // Август
    arr[8] = 31; // Сентябрь
    arr[9] = 30; // Остябрь
    arr[10] = 31; // Ноябрь
    arr[11] = 30; // Декабрь
    return arr[month];
}




function startDay (){   
    var start = new Date (currentYear, currentMonth, 1);
    return (start.getDay()-1) === -1 ? 6 : start.getDay()-1;    
}

function isLeap () {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}


function prevItem() {
    if(currentMonth !== 0){
        currentMonth--;
    }else{
        currentMonth = 11;
        currentYear--;
    }

    setNewCalendar();
}

  function nextItem(){
    if(currentMonth !== 11){
        currentMonth++;
    }else{
        currentMonth = 0;
        currentYear++;
    }
    setNewCalendar();
}


// очистка нового месяца создание нового месяца
function setNewCalendar() {
    today.setFullYear(currentYear, currentMonth, currentDay);
    month.textContent = monthNames[currentMonth];
    year.textContent = currentYear.toString();
    date.textContent = '';
    createMonth(currentMonth);
}

