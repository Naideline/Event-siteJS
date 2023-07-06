import { getItemsFromLocalStorage } from "../utils/localStorage.js";
import { formatDate } from "../utils/formatDate.js";
import { formatPrice } from "../utils/formatPrice.js";
import { saveItemsToLocalStorage } from "../utils/localStorage.js";

export function renderEvent(event, container) {
  const eventDiv = document.createElement("div");
  eventDiv.className = "event";
  eventDiv.innerHTML = `
    <img src="${event.image}">
    <div class="event-title">${event.title}</div>
    <div class="events-details">${formatDate(event.date)}</div>
    <div class="event-details">${event.location.address} • ${event.location.city}, ${event.location.state}</div>
    <div class="event-details">${formatPrice(event.price)}</div>
    <button class="remove-button">Remove</button>
  `;

  const removeButton = eventDiv.querySelector(".remove-button");
  removeButton.addEventListener("click", () => {
    removeEvent(event);
    container.removeChild(eventDiv);
  });

  container.appendChild(eventDiv);
}

document.addEventListener("DOMContentLoaded", () => {
  const interestedEventsContainer = document.getElementById("interested-events");
  const goingEventsContainer = document.getElementById("going-events");
  const favoritesEventsContainer = document.getElementById("favorites-events");
  
  const tabs = document.querySelectorAll(".tab-button");
  const eventsGrids = document.querySelectorAll(".events-grid");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      eventsGrids.forEach(grid => {
        grid.style.display = "none";
      });

      tabs.forEach(tab => {
        tab.classList.remove("active");
      });

      const category = tab.dataset.category;
      let container;

      switch (category) {
        case "interested":
          container = interestedEventsContainer;
          break;
        case "going":
          container = goingEventsContainer;
          break;
        case "favorites":
          container = favoritesEventsContainer;
          break;
        default:
          container = interestedEventsContainer;
          break;
      }

      container.style.display = "flex";
      tab.classList.add("active");

    });
  });

  interestedEventsContainer.style.display = "grid";
  goingEventsContainer.style.display = "none";
  favoritesEventsContainer.style.display = "none";
  
  const interestedEvents = getItemsFromLocalStorage("interestedEvents");
  const goingEvents = getItemsFromLocalStorage("goingEvents");
  const favoritesEvents = getItemsFromLocalStorage("favorites"); 

  interestedEvents.forEach(event => {
    renderEvent(event, interestedEventsContainer);
  });

  goingEvents.forEach(event => {
    renderEvent(event, goingEventsContainer);
  });

  favoritesEvents.forEach(event => {
    renderEvent(event, favoritesEventsContainer);
  });
});

function removeEvent(event) {
  const interestedEvents = getItemsFromLocalStorage("interestedEvents");
  const goingEvents = getItemsFromLocalStorage("goingEvents");
  const favoritesEvents = getItemsFromLocalStorage("favoritesEvents");

  const updatedInterestedEvents = interestedEvents.filter(e => e.id !== event.id);
  const updatedGoingEvents = goingEvents.filter(e => e.id !== event.id);
  const updatedFavoritesEvents = favoritesEvents.filter(e => e.id !== event.id);

  saveItemsToLocalStorage("interestedEvents", updatedInterestedEvents);
  saveItemsToLocalStorage("goingEvents", updatedGoingEvents);
  saveItemsToLocalStorage("favoritesEvents", updatedFavoritesEvents);
}

