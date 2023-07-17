const state = (function () {
  let instance;

  function createState() {
    const stateData = {
      favorites: [],
      interestedEvents: [],
      goingEvents: [],
    };

    return {
      getFavorites() {
        return stateData.favorites.slice();
      },
      getInterestedEvents() {
        return stateData.interestedEvents.slice();
      },
      getGoingEvents() {
        return stateData.goingEvents.slice();
      },
      addFavorite(event) {
        stateData.favorites.push(event);
      },
      removeFavorite(eventId) {
        const index = stateData.favorites.findIndex(
          (favorite) => favorite.id === eventId,
        );
        if (index > -1) {
          stateData.favorites.splice(index, 1);
        }
      },
      addInterestedEvent(event) {
        stateData.interestedEvents.push(event);
      },
      removeInterestedEvent(eventId) {
        const index = stateData.interestedEvents.findIndex(
          (interestedEvent) => interestedEvent.id === eventId,
        );
        if (index > -1) {
          stateData.interestedEvents.splice(index, 1);
        }
      },
      addGoingEvent(event) {
        stateData.goingEvents.push(event);
      },
      removeGoingEvent(eventId) {
        const index = stateData.goingEvents.findIndex(
          (goingEvent) => goingEvent.id === eventId,
        );
        if (index > -1) {
          stateData.goingEvents.splice(index, 1);
        }
      },
    };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createState();
      }
      return instance;
    },
  };
})();

export default state;
