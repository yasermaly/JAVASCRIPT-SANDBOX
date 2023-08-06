let x;
let d = new Date();

x = d.getFullYear(); // returns just the year.

x = d.getMonth(); // returns just the month.

x = d.getDay(); // returns just the day.

x = d.getHours(); // returns just the hours.

x = d.getMinutes(); // returns just the minutes.

x = d.getSeconds(); // returns just the seconds.

x = d.getMilliseconds(); // returns just the milliseconds.

x = Intl.DateTimeFormat("ar-EG").format(d); // The Intl.DateTimeFormat object enables language-sensitive date and time formatting.

x = Intl.DateTimeFormat("default", { month: "long" }).format(d); // default is the language where you are. and then specifiying the month in 'long' format.

x = d.toLocaleString("default", { month: "short" }); // returns a Date object as a string, using locale settings.

x = d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/Los_Angeles",
});

console.log(x);
