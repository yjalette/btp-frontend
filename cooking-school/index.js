
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log('We are live on port 3001');
});


app.get('/', (req, res) => {
  res.send('Welcome to my api');
})

app.post('/', (req,res) => {
  var data = req.body;

var smtpTransport = nodemailer.createTransport({
  service: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'sabrina80@ethereal.email',
    pass: 'dzRX73rp8vHFxGQcS4'
  }
});

var mailOptions = {
  from: data.email,
  to: 'ENTER_YOUR_EMAIL',
  subject: 'ENTER_YOUR_SUBJECT',
  html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
};

smtpTransport.sendMail(mailOptions,
(error, response) => {
  if(error) {
    res.send(error)
  }else {
    res.send('Success')
  }
  smtpTransport.close();
});

})

