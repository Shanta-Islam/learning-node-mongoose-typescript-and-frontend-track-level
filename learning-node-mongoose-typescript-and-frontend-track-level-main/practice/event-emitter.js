const EventEmiter = require("events");

const myEmitter = new EventEmiter();
//listener
myEmitter.on("birthday", () => {
    console.log("Happy Birthday");
})
myEmitter.on("birthday", (gift) => {
    console.log(`I will send a ${gift}`);
})

myEmitter.emit("birthday", "bike")