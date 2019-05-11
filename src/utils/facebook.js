const login = require("facebook-chat-api");

const credentials = {
  email: process.env.FB_USR,
  password: process.env.FB_PWD
};

const getApi = () => {
  return new Promise((resolve, reject) => {
    login(credentials, (err, api) => {
      if (err) reject(err);
      api.setOptions({ selfListen: true });
      resolve(api);
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
