const date = new Date();

const daysOptions = document.getElementById("days");


for (let i = 1; i <= 31; i++) {
  const dayOption = document.createElement("option");
  dayOption.innerHTML = `<select value="${i}">${i}</select>`;
  daysOptions.appendChild(dayOption);
}

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


const monthsOptions = document.getElementById("months");
for (let i = 0; i < 12; i++) {
  const monthOption = document.createElement("option");
  monthOption.innerHTML = `<select value="${i + 1}">${month[i]}</select>`;
  monthsOptions.appendChild(monthOption);
}

const yearsOptions = document.getElementById("years");
for (let i = 1950; i <= date.getFullYear(); i++) {
  const yearOption = document.createElement("option");
  yearOption.innerHTML = `<select value="${i}">${i}</select>`;
  yearsOptions.appendChild(yearOption);
}

const calculate = document.getElementById("calculate");
calculate.addEventListener("click", () => {


  // Date of birth
  var dobDate = document.getElementById("days").value;
  var dobMonth = document.getElementById("months").value;
  var dobNumber = month.indexOf(dobMonth) + 1;
  var dobYear = document.getElementById("years").value;



  if (dobDate == "day" || dobMonth == "month" || dobYear == "year") {
    document.getElementById("error").style.visibility = "visible";
  } 
  
  else {


    // get the some tag from the html file for display result
    const AgeYear = document.getElementById("AgeYear");
    const AgeMonth = document.getElementById("AgeMonth");
    const AgeDate = document.getElementById("AgeDate");

    const AgeClass = document.querySelector(".AgeClass");

    // get current dates from the system
    var currentDate = date.getDate();
    var currentMonth = date.getMonth() + 1;
    var currentYear = date.getFullYear();


    // get years
    var yearAge = currentYear - dobYear;

    // get months
    if (currentMonth >= dobMonth) {
      var monthAge = currentMonth - dobNumber;
    } 
    
    else {
      yearAge--;
      var monthAge = 12 + currentMonth - dobNumber;
    }


    // get days
    if (currentDate >= dobDate) {
      var dateAge = currentDate - dobDate;
    } 
    
    else {
      monthAge--;
      var dateAge = 31 + currentDate - dobDate;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    AgeClass.style.visibility = "visible";

    AgeYear.innerHTML = `${yearAge}`;
    AgeMonth.innerHTML = `${monthAge}`;
    AgeDate.innerHTML = `${dateAge}`;
  }
});
