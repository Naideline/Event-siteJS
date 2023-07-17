export function initializeTabs() {
  const interestedEventsContainer = document.getElementById("interested-events");
  const goingEventsContainer = document.getElementById("going-events");
  const favoritesEventsContainer = document.getElementById("favorites-events");
  const calendarEventsContainer = document.getElementById("calendar-events");

  const tabs = document.querySelectorAll(".tab-button");

  goingEventsContainer.style.display = "none";
  favoritesEventsContainer.style.display = "none";
  calendarEventsContainer.style.display = "none";

  interestedEventsContainer.style.display = "grid";

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });

      const category = tab.dataset.category;

      switch (category) {
        case "interested":
          interestedEventsContainer.style.display = "grid";
          goingEventsContainer.style.display = "none";
          favoritesEventsContainer.style.display = "none";
          calendarEventsContainer.style.display = "none";
          break;
        case "going":
          interestedEventsContainer.style.display = "none";
          goingEventsContainer.style.display = "grid";
          favoritesEventsContainer.style.display = "none";
          calendarEventsContainer.style.display = "none";
          break;
        case "favorites":
          interestedEventsContainer.style.display = "none";
          goingEventsContainer.style.display = "none";
          favoritesEventsContainer.style.display = "grid";
          calendarEventsContainer.style.display = "none";
          break;
        case "calendar":
          interestedEventsContainer.style.display = "none";
          goingEventsContainer.style.display = "none";
          favoritesEventsContainer.style.display = "none";
          calendarEventsContainer.style.display = "grid";
          break;
      }

      tab.classList.add("active");
    });
  });
}
