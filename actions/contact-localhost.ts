"use server"

import { sendContactEmailResendProduction } from "@/lib/email-localhost"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  phone: z.string().min(8, "El teléfono debe tener al menos 8 dígitos"),
  email: z.string().email("Email inválido"),
  service: z.string().min(1, "Selecciona un servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

export async function submitContactFormLocalhost(prevState: any, formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    }

    const validatedData = contactSchema.parse(data)

    // 🎯 ELIGE UNA OPCIÓN:

    // Opción 1: Resend con sandbox (RECOMENDADA)
    const result = await sendContactEmailResendProduction(validatedData);

    
    if (result.success) {
      return {
        success: true,
        message: "✅ ¡Email enviado!",
      }
    } else {
      return {
        success: false,
        message: `❌ Error: ${result.error}`,
      }
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      }
    }

    return {
      success: false,
      message: "Error inesperado. Revisa la consola para más detalles.",
    }
  }
}
