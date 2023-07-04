import { getItemsFromLocalStorage, saveItemsToLocalStorage } from "../utils/localStorage.js";

export function isEventInterested(event) {
  const interestedEvents = getItemsFromLocalStorage("interestedEvents");
  return interestedEvents.some((interestedEvent) => interestedEvent.id === event.id);
}

export function isEventGoing(event) {
  const goingEvents = getItemsFromLocalStorage("goingEvents");
  return goingEvents.some((goingEvent) => goingEvent.id === event.id);
}

export function toggleInterested(event, interestedButton, goingButton) {
  const interestedEvents = getItemsFromLocalStorage("interestedEvents");
  const goingEvents = getItemsFromLocalStorage("goingEvents");
  const eventIndex = interestedEvents.findIndex((interestedEvent) => interestedEvent.id === event.id);

  if (eventIndex > -1) {
    interestedEvents.splice(eventIndex, 1);
    interestedButton.textContent = "Interested"; 
  } else {
    const goingIndex = goingEvents.findIndex((goingEvent) => goingEvent.id === event.id);
    if (goingIndex > -1) {
      goingEvents.splice(goingIndex, 1);
      goingButton.textContent = "Going!"; 
    }
    interestedEvents.push(event);
    interestedButton.textContent = "Remove interested"; 
  }

  saveItemsToLocalStorage("interestedEvents", interestedEvents);
  saveItemsToLocalStorage("goingEvents", goingEvents);
}

export function toggleGoing(event, interestedButton, goingButton) {
  const interestedEvents = getItemsFromLocalStorage("interestedEvents");
  const goingEvents = getItemsFromLocalStorage("goingEvents");
  const eventIndex = goingEvents.findIndex((goingEvent) => goingEvent.id === event.id);

  if (eventIndex > -1) {
    goingEvents.splice(eventIndex, 1);
    goingButton.textContent = "Going!"; 
  } else {
    const interestedIndex = interestedEvents.findIndex((interestedEvent) => interestedEvent.id === event.id);
    if (interestedIndex > -1) {
      interestedEvents.splice(interestedIndex, 1);
      interestedButton.textContent = "Interested"; 
    }
    goingEvents.push(event);
    goingButton.textContent = "Remove going"; 
  }

  saveItemsToLocalStorage("interestedEvents", interestedEvents);
  saveItemsToLocalStorage("goingEvents", goingEvents);
}