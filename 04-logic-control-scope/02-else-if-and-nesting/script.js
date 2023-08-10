const d = new Date();
const hour = d.getHours();

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

// Nested if

if (hour < 12) {
  console.log('Good Morning');
  if (hour === 6) {
    console.log('Wake Up!'); // nested if
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
  if (hour >= 20) {
    console.log('zzzzzzzzz'); // nested if
  }
}

// multiple conditions in an if statement:

if (hour >= 7 && hour < 15) {
  console.log('It is work time!'); // && means and
}

if (hour === 6 || hour === 20) {
  console.log('Brush your teeth');
}
