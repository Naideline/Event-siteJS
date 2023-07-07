import { getItemsFromLocalStorage, saveItemsToLocalStorage } from "../utils/localStorage.js";
import { formatDate } from "../utils/formatDate.js";
import { formatPrice } from "../utils/formatPrice.js";

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

export function removeEvent(event) {
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
