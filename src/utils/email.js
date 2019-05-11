const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USR,
    pass: process.env.EMAIL_PWD
  }
});

const mailOptions = imageUrl => {
  return {
    from: process.env.EMAIL_USR,
    to: process.env.TARGET,
    subject: "Bob FotoBot",
    html: "<p>Photo envoyée via nixplay-messenger</p>",
    attachments: [{ path: imageUrl }]
  };
};

const sendEmail = imageUrl => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions(imageUrl), (err, info) => {
      if (err) reject(err);
      resolve(info);
    });
  });
};

module.exports = { sendEmail };
