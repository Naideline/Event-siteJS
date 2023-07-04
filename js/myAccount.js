import { initializeTabs } from "../js/modules_myAccount/tabs.js";
import { showEventsByTab } from "../js/modules_myAccount/events.js";
import { removeEventFromList } from "../js/modules_myAccount/events.js";
import { getEventsFromLocalStorage, saveEventsToLocalStorage } from "../js/utils/localStorage.js";

document.addEventListener("DOMContentLoaded", () => {
  showEventsByTab("favorites");
 
 const categories = ["favorites", "interested", "going", "calendar"];

  const tabsContainer = document.getElementById("tabs-container");

  categories.forEach(category => {
    const button = document.createElement("button");
    button.classList.add("tab-button");
    button.dataset.category = category;
    button.textContent = category.charAt(0).toUpperCase() + category.slice(1);

    tabsContainer.appendChild(button);
  });

  initializeTabs();
}); 


