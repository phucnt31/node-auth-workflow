const nodemailer = require("nodemailer");

const sendEmail = async () => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "stephen.oreilly@ethereal.email",
      pass: "52BmaTAG5RbNhfrk6z",
    },
  });

  let info = await transporter.sendMail({
    from: '"Rolbin Foo" <rolbin@gmail.com>', // sender address
    to: "user@user.com, baz@example.com", // list of receivers
    subject: "Testing Email", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Testing Email?</b>", // html body
  });
};

module.exports = sendEmail;
