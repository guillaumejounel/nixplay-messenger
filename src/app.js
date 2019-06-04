require("dotenv").config();
const utils = require("./utils");
const db = require("./db");

// TODO: Use official Facebook API
const main = async () => {
  console.log("Bob is waking up...");
  try {
    const api = await utils.getApi();
    api.listen(async (err, message) => {
      const targetEmail = await db.getTargetEmail(message.threadID);
      if (targetEmail) {
        message.attachments
          .filter(a => a.type === "photo")
          .forEach(async photo => {
            try {
              const photoUrl = await utils.getPhotoUrl(api, photo.ID);
              const response = await utils.sendEmail(photoUrl, targetEmail);
              api.sendMessage(utils.getMessage("sent"), message.threadID);
            } catch (err) {
              api.sendMessage(utils.getMessage("error"), message.threadID);
            }
          });
      } else {
        if (message.body.includes("@")) {
          await db.setTargetEmail(message.threadID, message.body);
        } else {
          api.sendMessage(
            "Yo moi c'est Bobby ! À qui veux-tu envoyer tes tofs ?",
            message.threadID
          );
        }
      }
    });
  } catch (err) {
    console.error(err);
    main();
  }
};

main();
