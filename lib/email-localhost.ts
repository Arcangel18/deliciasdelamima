// OPCIÓN 1: Resend con dominio sandbox (RECOMENDADA para desarrollo)
export async function sendContactEmailResendProduction(data: any) {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // ✅ Usar el dominio sandbox de Resend para pruebas
        from: "info@deliciasdelamima.com", // Dominio sandbox gratuito
        to: ["delamima.business@outlook.com"], // Tu email real de destino
        subject: `[PRUEBA] Nueva consulta de ${data.name} - ${data.service}`,
        html: `
                <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 10px; overflow: hidden; border: 1px solid #e5e7eb;">
                    <div style="background: #111827; padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px; letter-spacing: 1px;">Delicias de la Mima</h1>
                    <p style="color: #9ca3af; margin: 5px 0 0 0; font-size: 16px;">Nueva consulta desde el sitio web</p>
                    </div>
                    
                    <div style="padding: 30px; background: #ffffff;">
                    <h2 style="color: #111827; margin-bottom: 20px; font-size: 20px;">Información del Cliente</h2>
                    
                    <div style="margin-bottom: 20px;">
                        <p style="margin: 0 0 8px 0; color: #374151;"><strong>Nombre:</strong> ${data.name}</p>
                        <p style="margin: 0 0 8px 0; color: #374151;"><strong>Teléfono:</strong> ${data.phone}</p>
                        <p style="margin: 0 0 8px 0; color: #374151;"><strong>Email:</strong> ${data.email}</p>
                        <p style="margin: 0; color: #374151;"><strong>Servicio de interés:</strong> ${data.service}</p>
                    </div>
                    
                    <div style="padding: 20px; background: #f9fafb; border-radius: 8px;">
                        <h3 style="margin-top: 0; color: #111827; font-size: 18px;">Mensaje</h3>
                        <p style="margin: 0; color: #4b5563; line-height: 1.6;">${data.message}</p>
                    </div>
                    </div>
                    
                    <div style="background: #f3f4f6; text-align: center; padding: 20px; font-size: 12px; color: #9ca3af;">
                    © ${new Date().getFullYear()} Delicias de la Mima
                    </div>
                </div>
                `,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Error ${response.status}: ${error}`)
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)

    if (error instanceof Error) {
        return { success: false, error: error.message };
    }
    return { success: false, error: String(error) };
  }
}

