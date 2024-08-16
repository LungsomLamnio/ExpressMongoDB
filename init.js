const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Lungsom",
        to: "Nitesh",
        mssg: "What are you doing now?",
        created_at: new Date()
    },
    {
        from: "Khanjan",
        to: "MD",
        mssg: "Khana kon banayega?",
        created_at: new Date()
    },
    {
        from: "Nitesh",
        to: "Lungsom",
        mssg: "Bhai tu bhot handsome",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);