const { getMessage } = require("./messages");
const { setTargetEmail } = require("../db");

const hooks = {
  thanks: {
    all: ["bobby", "merci"],
    action: (api, message) => {
      api.sendMessage(getMessage("welcome"), message.threadID);
    }
  },
  email_set: {
    all: ["@"],
    action: (api, message) => {
      const email = message.body.match(/\S*@mynixplay.com/);
      if (email) {
        setTargetEmail(message.threadID, email[0]);
        api.sendMessage(getMessage("email_ok"), message.threadID);
      }
    }
  },
  hi: {
    all: ["bobby"],
    any: ["coucou", "bonjour", "salut", "yo", "hey"],
    action: (api, message) => {
      api.sendMessage(getMessage("hi"), message.threadID);
    }
  }
};

const actionHook = (api, message) => {
  const activatedHook = Object.keys(hooks).find(
    key =>
      (!hooks[key].all ||
        hooks[key].all.every(w => message.body.toLowerCase().includes(w))) &&
      (!hooks[key].any ||
        hooks[key].any.some(w => message.body.toLowerCase().includes(w)))
  );
  if (activatedHook) {
    hooks[activatedHook].action(api, message);
  }
};

module.exports = { actionHook };
