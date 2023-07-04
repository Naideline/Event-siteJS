import { showEventsByTab } from "./events.js";

export function initializeTabs() {
  const tabsContainer = document.getElementById("tabs-container");

  tabsContainer.addEventListener("click", (event) => {
    const tabButton = event.target.closest(".tab-button");
    if (tabButton) {
      const category = tabButton.dataset.category;
      showEventsByTab(category);
    }
  });
}
