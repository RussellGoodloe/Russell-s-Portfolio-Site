import { SMTPClient } from 'emailjs';



const client = new SMTPClient({
    user: 'rgoodloe11@gmail.com',
    password: 'appleninja',
    host: 'smtp.gmail.com',
    ssl: true,
});

const sendEmail = (senderName, senderEmail, subject, body) => {
    return client.send({
        text: `You recieved an inquiry from your site. Contents are: Sender name: ${senderName} - Sender email: ${senderEmail} - Subject: ${subject} - Body: ${body}`,
        from: 'rgoodloe11@gmail.com',
        to: 'rgoodloe11@gmail.com',
        subject: 'Website Inquiry',
    },
    (err, message) => {
        console.log(err || message);
    });
};

export default sendEmail;