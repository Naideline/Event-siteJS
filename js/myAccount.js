import { getItemsFromLocalStorage } from "../js/utils/localStorage.js";
import { renderEvent } from "./modules_myAccount/eventRenderer.js";
import { initializeTabs } from "./modules_myAccount/events.js";
import { initializeCalendar } from "./modules_myAccount/Calendar.js";

document.addEventListener("DOMContentLoaded", function () {
  initializeTabs();
  initializeCalendar();

  const interestedEventsContainer =
    document.getElementById("interested-events");
  const goingEventsContainer = document.getElementById("going-events");
  const favoritesEventsContainer = document.getElementById("favorites-events");

  const interestedEvents = getItemsFromLocalStorage("interestedEvents");
  const goingEvents = getItemsFromLocalStorage("goingEvents");
  const favoritesEvents = getItemsFromLocalStorage("favorites");

  if (interestedEvents.length === 0) {
    interestedEventsContainer.innerHTML =
      "<p>There are no events in your interested</p>";
  } else {
    interestedEvents.forEach((event) => {
      renderEvent(event, interestedEventsContainer);
    });
  }

  if (goingEvents.length === 0) {
    goingEventsContainer.innerHTML = "<p>There are no events in your going</p>";
  } else {
    goingEvents.forEach((event) => {
      renderEvent(event, goingEventsContainer);
    });
  }

  if (favoritesEvents.length === 0) {
    favoritesEventsContainer.innerHTML =
      "<p>There are no events in your favorites</p>";
  } else {
    favoritesEvents.forEach((event) => {
      renderEvent(event, favoritesEventsContainer);
    });
  }
});
