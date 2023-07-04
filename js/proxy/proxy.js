const cache = new Proxy(
  {},
  {
    get: async function (target, category) {
      if (!Reflect.has(target, category)) {
        const events = await fetchEventData(category);
        Reflect.set(target, category, events);
      }
      return Reflect.get(target, category);
    },
  }
);

async function fetchEventData(category) {
  try {
    console.log(`Fetching events for category: ${category}`);
    const response = await fetch(
      `https://knassbani2.execute-api.us-east-2.amazonaws.com/events/${category}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    
    return [];
  }
}

export default cache;
