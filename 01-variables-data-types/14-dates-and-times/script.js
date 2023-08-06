let d;

d = new Date(); // returns the current date and time

d = new Date(2023, 0, 10, 12, 30, 0); // returns a date you specify in the arguments. (year, month(index based), day, hour, minute, second).

d = new Date("2021-07-10T12:30:00"); // We can pass a string in as an argument. The month is not index based in this case.
d = new Date("07/10/2021 12:30:00"); // Another format to pass the date as a string

d = Date.now(); // returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

d = new Date("08-20-2023 12:30:00");
d = d.getTime(); // returns the time of the date in milliseconds relative to the epoch. Works like valueOf.
d = d.valueOf(); // works like getTime().

d = new Date(1692559800000); // milliseconds can be used as an argument and will return the coinciding date.

d = Math.floor(Date.now() / 1000); // gets the date in seconds instead of milliseconds.

console.log(d);
