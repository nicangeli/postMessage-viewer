window.addEventListener("message", function (event) {
  console.log(`Post Message Received by ${document.title}`);
  console.log(`Post message sent from ${event.origin}`);
  console.log(JSON.stringify(event.data));
});
