export function initializeCalendar() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const monthYearElement = document.getElementById("monthYear");
  const daysTable = document.getElementById("daysTable");

  let currentMonth;
  let currentYear;

  prevBtn.addEventListener("click", function () {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    updateCalendar();
  });

  nextBtn.addEventListener("click", function () {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    updateCalendar();
  });

  function updateCalendar() {
    monthYearElement.textContent =
      getMonthName(currentMonth) + " " + currentYear;

    var firstDay = new Date(currentYear, currentMonth, 1);
    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    var startDay = firstDay.getDay();

    daysTable.innerHTML = "";

    var daysOfWeekRow = document.createElement("tr");
    for (var i = 0; i < 7; i++) {
      var dayOfWeekCell = document.createElement("th");
      dayOfWeekCell.textContent = getDayOfWeekName(i);
      daysOfWeekRow.appendChild(dayOfWeekCell);
    }
    daysTable.appendChild(daysOfWeekRow);

    var row = document.createElement("tr");
    for (var i = 0; i < startDay; i++) {
      var emptyCell = document.createElement("td");
      row.appendChild(emptyCell);
    }

    for (var day = 1; day <= daysInMonth; day++) {
      var cell = document.createElement("td");
      cell.textContent = day;
      row.appendChild(cell);

      if ((startDay + day - 1) % 7 === 6) {
        daysTable.appendChild(row);
        row = document.createElement("tr");
      }
    }

    daysTable.appendChild(row);
  }

  function getMonthName(month) {
    var months = [
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
    return months[month];
  }

  function getDayOfWeekName(dayOfWeek) {
    var daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[dayOfWeek];
  }

  var currentDate = new Date();
  currentMonth = currentDate.getMonth();
  currentYear = currentDate.getFullYear();

  monthYearElement.textContent = getMonthName(currentMonth) + " " + currentYear;
  updateCalendar();
}
