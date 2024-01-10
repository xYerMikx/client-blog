import emailjs from "@emailjs/browser"

import { getEnv } from "./getEnv"

const serviceId = getEnv("serviceId")
const templateId = getEnv("templateId")
const userId = getEnv("userId")

interface EmailContacts {
  email: string
  name: string
  place: string
  message: string
}
export const sendEmailContacts = async ({
  email,
  name,
  place,
  message,
}: EmailContacts) => {
  if (serviceId && templateId && userId) {
    await emailjs.send(
      serviceId,
      templateId,
      { user_email: email, to_name: name, to_place: place, to_message: message },
      userId,
    )
  }
}
export const sendEmailFooter = async (email: string) => {
  if (serviceId && templateId && userId) {
    await emailjs.send(serviceId, templateId, { user_email: email }, userId)
  }
}
