const mongoose = require('mongoose');
const path = require("path");
const nodemailer = require('nodemailer');

module.exports = {

    sendInfo(req, res) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kevintestnode@gmail.com',
                pass: 'Testnode2018'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const content = `
                <p>You have a new contact request</p>
                <h3>Contact Details</h3>
                <ul>
                    <li>Name: ${req.body.name}</li>
                    <li>Subject: ${req.body.subject}</li>
                    <li>Email: ${req.body.email}</li>
                </ul>
                <h3>Message</h3>
                <p>${req.body.message}</p>
            `;

        const mailOptions = {
            from: 'kevintestnode@gmail.com',
            to: 'kevintestnode@gmail.com',
            subject: 'Duxwell new business request',
            html: content
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);

                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            }
        });
        res.json({ success: "success send message" });

    }


}