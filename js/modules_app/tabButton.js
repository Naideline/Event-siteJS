export function setActiveTabButton(category) {
    const tabButtons = Array.from(document.getElementsByClassName("tab-button"));
    tabButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.category === category);
    });
  }
  