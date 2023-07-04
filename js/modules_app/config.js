import { showCategory } from './eventsTabs.js';

export function createTabs() {
  const tabsContainer = document.querySelector('.tabs');
  const categories = ['music', 'sports', 'business', 'food', 'art'];

  categories.forEach(function(category) {
    const button = document.createElement('button');
    button.className = 'tab-button';
    button.setAttribute('data-category', category);
    button.id = `tab-${category}`; 
    button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    button.addEventListener('click', () => showCategory(category));
    tabsContainer.appendChild(button);
  });
}
