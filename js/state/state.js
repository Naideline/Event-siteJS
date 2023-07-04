const state = (function () {
  let instance;

  function createState() {
    const stateData = {
      favorites: [],
      interestedEvents: [],
      goingEvents: [],
    };

    function getFavorites() {
      return stateData.favorites.slice();
    }

    function getInterestedEvents() {
      return stateData.interestedEvents.slice();
    }

    function getGoingEvents() {
      return stateData.goingEvents.slice();
    }

    function addFavorite(event) {
      stateData.favorites.push(event);
    }

    function removeFavorite(eventId) {
      const index = stateData.favorites.findIndex(
        (favorite) => favorite.id === eventId
      );
      if (index > -1) {
        stateData.favorites.splice(index, 1);
      }
    }

    function addInterestedEvent(event) {
      stateData.interestedEvents.push(event);
    }

    function removeInterestedEvent(eventId) {
      const index = stateData.interestedEvents.findIndex(
        (interestedEvent) => interestedEvent.id === eventId
      );
      if (index > -1) {
        stateData.interestedEvents.splice(index, 1);
      }
    }

    function addGoingEvent(event) {
      stateData.goingEvents.push(event);
    }

    function removeGoingEvent(eventId) {
      const index = stateData.goingEvents.findIndex(
        (goingEvent) => goingEvent.id === eventId
      );
      if (index > -1) {
        stateData.goingEvents.splice(index, 1);
      }
    }

    return {
      getFavorites,
      getInterestedEvents,
      getGoingEvents,
      addFavorite,
      removeFavorite,
      addInterestedEvent,
      removeInterestedEvent,
      addGoingEvent,
      removeGoingEvent,
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createState();
      }
      return instance;
    },
  };
})();

export default state;
