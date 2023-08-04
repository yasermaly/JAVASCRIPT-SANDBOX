console.log(100);

console.log("hello world");

console.log(20, "hello", true);

const x = 200;

console.log(x);

console.error("Alert");

console.warn("Warning");

console.table({ name: "yaser", email: "test@example.com" });

console.group("sample group");
console.log(x);
console.error("Alert");
console.warn("Warning");
console.groupEnd();

const styles = "padding: 10px; background-color: grey; color: white;";
console.log("%cHello World", styles);
