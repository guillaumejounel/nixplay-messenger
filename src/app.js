require("dotenv").config();
const login = require("facebook-chat-api");

login(
  { email: process.env.FB_USR, password: process.env.FB_PWD },
  (err, api) => {
    if (err) return console.error(err);

    api.listen((err, message) => {
      console.log(message);
      // api.sendMessage(message.body, message.threadID);
    });
  }
);
