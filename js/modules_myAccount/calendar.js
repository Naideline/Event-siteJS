import { getItemsFromLocalStorage } from "../utils/localStorage.js";
import { renderEvent } from "../modules_myAccount/eventRenderer.js";

export function initializeCalendar() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const monthYearElement = document.getElementById("monthYear");
  const daysTable = document.getElementById("daysTable");
  const eventCardContainer = document.getElementById("event-card-container");

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

    const interestedEvents = getItemsFromLocalStorage("interestedEvents");
    const goingEvents = getItemsFromLocalStorage("goingEvents");
    const favoritesEvents = getItemsFromLocalStorage("favoritesEvents");

    const eventsForCurrentMonth = interestedEvents
      .concat(goingEvents, favoritesEvents)
      .filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getMonth() === currentMonth &&
          eventDate.getFullYear() === currentYear
        );
      });

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

      const eventsForCurrentDay = eventsForCurrentMonth.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getDate() === day;
      });

      const eventsContainer = document.createElement("div");
      eventsContainer.className = "events-container";

      eventsForCurrentDay.forEach((event) => {
        const eventCard = document.createElement("div");
        eventCard.className = "event-card";

        if (goingEvents.some((goingEvent) => goingEvent.id === event.id)) {
          eventCard.classList.add("going-event");
        } else if (
          interestedEvents.some((interestedEvent) => interestedEvent.id === event.id)
        ) {
          eventCard.classList.add("interested-event");
        } else if (
          favoritesEvents.some((favoriteEvent) => favoriteEvent.id === event.id)
        ) {
          eventCard.classList.add("favorite-event");
        }

        eventCard.textContent = event.title;
        eventsContainer.appendChild(eventCard);

        eventCard.addEventListener("click", () => {
          showEventCard(event); 
        });
      });

      cell.appendChild(eventsContainer);

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

  function showEventCard(event) {

    eventCardContainer.innerHTML = ""; 

    const eventCard = renderEvent(event, eventCardContainer); 

    const removeButton = eventCard.querySelector(".remove-button");
    if (removeButton) {
      removeButton.style.display = "none";
    }
  }
}
