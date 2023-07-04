import cache from '../proxy/proxy.js';

async function getEventsByCategory(category) {
  const events = await cache[category];
  return events;
}

export { getEventsByCategory };

