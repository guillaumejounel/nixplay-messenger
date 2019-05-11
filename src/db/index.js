const Datastore = require("nedb"),
  db = new Datastore({ filename: "./src/db/data.db", autoload: true });

const getTargetEmail = threadId => {
  return new Promise((resolve, reject) => {
    db.findOne({ threadId: threadId }, function(err, doc) {
      if (err) reject(err);
      resolve(doc && doc.email);
    });
  });
};

const setTargetEmail = (threadId, email) => {
  return new Promise((resolve, reject) => {
    db.update(
      { threadId: threadId },
      { $set: { email: email } },
      { upsert: true },
      err => {
        if (err) reject(err);
        resolve();
      }
    );
  });
};

module.exports = {
  getTargetEmail,
  setTargetEmail
};
