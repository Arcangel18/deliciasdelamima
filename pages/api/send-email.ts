import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, phone, email, service, message } = req.body;

    // Crear el transporte de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'outlook',  // Usa 'outlook' o 'hotmail' según corresponda
      auth: {
        user: process.env.EMAIL_USER,  // Tu correo de Outlook
        pass: process.env.EMAIL_PASS,  // La contraseña de aplicación generada
      },
    });

    // Configuración del email
    const mailOptions = {
      from:process.env.EMAIL_USER,
      to: process.env.EMAIL_USER , // Correo de la empresa
      subject: `Solicitud de cotización: ${service}`,  // El asunto será el tipo de servicio
      text: `
        Nombre: ${name}
        Teléfono: ${phone}
        Email: ${email}
        Servicio: ${service}
        Mensaje: ${message}
      `,
    };

    try {
      // Intentar enviar el correo
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Correo enviado con éxito' });
    } catch (error: unknown) {
      // TypeScript no sabe qué tipo tiene `error`, así que lo casteamos a `Error`
      if (error instanceof Error) {
        console.error("Error al enviar el correo:", error);  // Imprime el error completo en la consola del servidor
        return res.status(500).json({
          message: 'Error al enviar correo',
          error: error.message,  // Accede a `message` si `error` es una instancia de `Error`
        });
      } else {
        // Si el error no es un Error, devolver un mensaje genérico
        console.error("Error desconocido:", error);
        return res.status(500).json({
          message: 'Error desconocido al enviar correo',
        });
      }
    }
  } else {
    // Si la solicitud no es POST, devolver un error 405 (Método no permitido)
    return res.status(405).json({ message: 'Método no permitido' });
  }
}