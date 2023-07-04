import { formatPrice } from "../utils/formatPrice.js";
import { formatDate } from "../utils/formatDate.js";

export function showEventsByTab(category) {
  const events = getEventsFromLocalStorage(category);
  showEvents(events);
}

export function showEvents(events) {
  const eventsGrid = document.getElementById("events-grid");
  eventsGrid.innerHTML = "";

  if (events.length === 0) {
    const message = createMessage("There are no events in this category");
    eventsGrid.appendChild(message);
    return;
  }

  events.forEach((event) => {
    const eventDiv = document.createElement("div");
    eventDiv.className = "event";

    eventDiv.innerHTML = `
      <img src="${event.image}">
      <div class="event-title">${event.title}</div>
      <div class="events-details">${formatDate(event.date)}</div>
      <div class="event-details">${event.location.address} • ${event.location.city}, ${event.location.state}</div>
      <div class="event-details">${formatPrice(event.price)}</div>
      <button class="event-remove-button">Remove</button>
    `;

    const removeButton = eventDiv.querySelector(".event-remove-button");
    removeButton.addEventListener("click", () => {
      removeEventFromList(event.category, event.id);
    });

    eventsGrid.appendChild(eventDiv);
  });
  console.log("Received events:", events);
}

export function createMessage(textContent) {
  const message = document.createElement("div");
  message.className = "message";
  message.textContent = textContent;
  return message;
}

export function removeEventFromList(category, eventId) {
  const events = getEventsFromLocalStorage(category);
  const updatedEvents = events.filter((event) => event.id !== eventId);
  saveEventsToLocalStorage(category, updatedEvents);
  showEventsByTab(category);
}

export function getEventsFromLocalStorage(category) {
  const eventsJson = localStorage.getItem(category);
  return eventsJson ? JSON.parse(eventsJson) : [];
}

export function saveEventsToLocalStorage(category, events) {
  const eventsJson = JSON.stringify(events);
  localStorage.setItem(category, eventsJson);
}