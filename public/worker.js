console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: data.description,
    icon: data.icon,
    data: {
      url: "https://www.google.com"
    },
    actions: [
      { "action": "yes", "title": "Open"},
      { "action": "no", "title": "Dismiss"}
    ]
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === "yes") {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  } else if (event.action === "no") {
    //placeholder
    return;
  } else {
    return;
  }
})
