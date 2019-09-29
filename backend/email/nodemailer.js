const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');
const { SENDGRID_API_KEY } = require('../config');

module.exports = nodemailer.createTransport(sendgrid({
    auth: { api_key: SENDGRID_API_KEY }
}));
