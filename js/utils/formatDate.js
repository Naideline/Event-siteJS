export function formatDate(timestamp) {
    const date = new Date(timestamp);
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }
  