const nodemailer = require('nodemailer');

// const testEmailAccount = await nodemailer.createTestAccount();

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
    if (err) return console.log(err);
    console.log('Email sent: ', info);
  });
};

// const result = await transporter.sendMail({
//   from: '"MyBook" <smtp.ethereal.email>',
//   to: 'porunowaolga@yandex.ru',
//   subject: 'Message from Node js',
//   text: 'This message was sent from Node js server.',
//   html:
//     'This <i>message</i> was sent from <strong>Node js</strong> server.',
// });

// console.log(result);

module.exports = mailer;
