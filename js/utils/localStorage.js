export function getItemsFromLocalStorage(key) {
    const itemsJson = localStorage.getItem(key);
    return itemsJson ? JSON.parse(itemsJson) : [];
  }
  
  export function saveItemsToLocalStorage(key, items) {
    const itemsJson = JSON.stringify(items);
    localStorage.setItem(key, itemsJson);
  }
  
  export function getEventsFromLocalStorage(category) {
    const eventsJson = localStorage.getItem(category);
    return eventsJson ? JSON.parse(eventsJson) : [];
  }
  
  export function saveEventsToLocalStorage(category, events) {
    const eventsJson = JSON.stringify(events);
    localStorage.setItem(category, eventsJson);
  }