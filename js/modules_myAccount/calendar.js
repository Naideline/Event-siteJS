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

    const firstDay = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startDay = firstDay.getDay();

    daysTable.innerHTML = "";

    const daysOfWeekRow = document.createElement("tr");
    for (let i = 0; i < 7; i++) {
      const dayOfWeekCell = document.createElement("th");
      dayOfWeekCell.textContent = getDayOfWeekName(i);
      daysOfWeekRow.appendChild(dayOfWeekCell);
    }
    daysTable.appendChild(daysOfWeekRow);

    let row = document.createElement("tr");
    for (let i = 0; i < startDay; i++) {
      const emptyCell = document.createElement("td");
      row.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const cell = document.createElement("td");
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
    const months = [
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
    const daysOfWeek = [
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

  const currentDate = new Date();
  currentMonth = currentDate.getMonth();
  currentYear = currentDate.getFullYear();

  monthYearElement.textContent = getMonthName(currentMonth) + " " + currentYear;
  updateCalendar();
}
