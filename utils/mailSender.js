const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            // host: process.env.MAIL_HOST,
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })
        // Send mail
        let info = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        })
        console.log(info);
        return info;
    } catch (error) {
        console.log(error);
    }
}

module.exports = mailSender;