const { urlModel } = require('../models/email');
const { mailServerConnect } = require('../configuration/mail_server_connect');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
async function saveEmailDetails(req,res) {
    try {
        console.log(req.body)
        console.log(req.files)
        const transporter = await nodemailer.createTransport({
            host: "smtp.gmail.com",
            auth: {
                user: 'srijan.s.samanta@inorg.com',
                pass: 'cdjd pokv apbg nvsh'
            },
        });
        const attachments = req.files.map(file => ({
            filename: file.originalname,
            path: file.path
        }));
        const info = await transporter.sendMail({
            from: '"Srijan Samanta 👻" <srijan.s.samanta@inorg.com>', // sender address
            to: req.body.email, // list of receivers
            subject: req.body.subject,
            html: req.body.message, // html body
            attachments: attachments
        });
        console.log("Message sent: %s", info.messageId);
        res.status(200).json({ "message": "Email Is Sent Successfully" });
    }
    catch (err) {
        console.log(err)
        res.status(404).sendFile('error.html', { root: 'static' });
    }
}
module.exports = saveEmailDetails;