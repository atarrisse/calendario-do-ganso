// TODO: convert to ts

const formatResponse = (events) => {
  const eventsData = events.map((event) => {
    return {
      title: event.querySelector(".title")?.innerHTML.trim(),
      content: event.querySelector(".content")?.innerHTML.trim(),
      datetime: event.querySelector(".datetime")?.innerHTML.trim(),
    };
  });
  return eventsData;
};

module.exports = formatResponse;
