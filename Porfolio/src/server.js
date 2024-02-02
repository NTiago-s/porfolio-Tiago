const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/enviar-correo', (req, res) => {
    const { nombre, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'brasiltiago1908@gmail.com',
            pass: 'dgae oqjn einl xicw'
        }
    });
    const mailOptions = {
        from: email,
        to: 'navarrotiago194@gmail.com',
        subject: 'Nuevo mensaje desde el formulario de contacto',
        text: `Nombre: ${nombre}\nCorreo electrónico: ${email}\nMensaje: ${message}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error al enviar el correo electrónico');
        } else {
            console.log('Correo electrónico enviado: ' + info.response);
            res.send('Correo electrónico enviado correctamente');
        }
    });
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
