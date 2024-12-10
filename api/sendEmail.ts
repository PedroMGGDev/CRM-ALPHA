import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

    // Configure o transporte do nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Variáveis de ambiente
        pass: process.env.EMAIL_PASS, // Variáveis de ambiente
      },
    });

    try {
      // Envie o e-mail
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
      });

      res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao enviar o email.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido.' });
  }
}
