const login = require("facebook-chat-api");
const fs = require("fs");

const credentials = {
  email: process.env.FB_USR,
  password: process.env.FB_PWD
};

const reLogIn = () => {
  return new Promise((resolve, reject) => {
    login(
      { appState: JSON.parse(fs.readFileSync("appstate.json", "utf8")) },
      (err, api) => {
        if (err) reject(err);
        console.log("Logged back from previous session.");
        resolve(api);
      }
    );
  });
};

const logIn = () => {
  return new Promise((resolve, reject) => {
    login(credentials, (err, api) => {
      if (err) reject(err);
      fs.writeFileSync("appstate.json", JSON.stringify(api.getAppState()));
      resolve(api);
    });
  });
};

const getApi = () => {
  return new Promise((resolve, reject) => {
    reLogIn()
      .then(api => resolve(api))
      .catch(() => {
        logIn()
          .then(api => resolve(api))
          .catch(err => reject(err));
      });
  });
};

const getPhotoUrl = (api, photoId) => {
  return new Promise((resolve, reject) => {
    api.resolvePhotoUrl(photoId, (err, url) => {
      if (err) reject(err);
      resolve(url);
    });
  });
};

module.exports = { getApi, getPhotoUrl };
