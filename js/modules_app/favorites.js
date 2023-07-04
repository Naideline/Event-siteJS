import { getItemsFromLocalStorage, saveItemsToLocalStorage } from "../utils/localStorage.js";

export function isEventFavorite(event) {
  const favorites = getItemsFromLocalStorage("favorites");
  return favorites.some((favorite) => favorite.id === event.id);
}

export function createFavoriteButton(event) {
  const favorites = getItemsFromLocalStorage("favorites");
  const isFavorite = isEventFavorite(event);

  const eventFavoriteButton = document.createElement("span");
  eventFavoriteButton.className = "event-favorite-button";

  const heartIcon = document.createElement("i");
  heartIcon.className = isFavorite ? "fas fa-heart" : "far fa-heart";

  eventFavoriteButton.appendChild(heartIcon);
  eventFavoriteButton.addEventListener("click", () => {
    toggleFavorite(event, eventFavoriteButton);
  });

  return eventFavoriteButton;
}

export function toggleFavorite(event, button) {
  const favorites = getItemsFromLocalStorage("favorites");
  const eventIndex = favorites.findIndex((favorite) => favorite.id === event.id);

  if (eventIndex > -1) {
    favorites.splice(eventIndex, 1);
    button.querySelector('i').className = "far fa-heart"; 
  } else {
    favorites.push(event);
    button.querySelector('i').className = "fas fa-heart";
  }

  saveItemsToLocalStorage("favorites", favorites);
}
