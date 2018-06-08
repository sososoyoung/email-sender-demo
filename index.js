const nodemailer = require('nodemailer');

const emailConfig = {
  email: ' your email address',
  pass: ' your email password'
};
const testContent = {
  html: '',
  subject: 'hello',
  text: 'hello text'
};

const sendEmail = async (content = {}, email = '') => {
  const { html, subject = '', text = '' } = content;

  const mailTransport = nodemailer.createTransport(
    `smtps://${emailConfig.email}:${emailConfig.pass}@smtp.gmail.com`
  );
  const mailOptions = {
    from: emailConfig.user, // sender address
    to: email, // list of receivers
    subject, // Subject line
    text, // plain text body
    html
  };
  return mailTransport
    .sendMail(mailOptions)
    .then(info => {
      console.log('send over!');
    })
    .catch(err => {
      console.error('sendMail err', err);
    });
};

// run test

sendEmail(testContent, 'email address');
