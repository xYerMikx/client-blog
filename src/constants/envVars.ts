export const envVars = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
}

export type EnvVarsType = keyof typeof envVars
