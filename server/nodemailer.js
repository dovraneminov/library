const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'test.tester.test@internet.ru',
      pass: 'YRE1PKtfAunVwNUVjFeY',
    },
  },
  {
    from: 'Mailer test <test.tester.test@internet.ru>',
  },
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) { return console.log(err); }
    return ('Email sent: ', info);
  });
};

module.exports = mailer;
