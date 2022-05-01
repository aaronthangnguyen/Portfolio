(() => {
  console.log("Hello World!");
  initializeTime();
})();

function initializeTime() {
  const element = document.querySelector("#daytime");
  const datetimeText = new Date()
    .toLocaleString("en-US", {
      timeZone: "America/New_York",
      weekday: "short",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .toLocaleLowerCase();
  element.textContent = datetimeText;
}
