import { z } from "zod"

export interface IContactFormFields {
  name: string
  email: string
  place: string
  message: string
}

export const contactSchema = z
  .object({
    name: z
      .string()
      .min(2, "Your name has to consist of 2 characters at least")
      .max(20, "Your name can't be more than 20 characters"),
    email: z.string().email(),
    place: z.string(),
    message: z.string().min(30, "Your message must be more than 30 symbols"),
  })
  .required()

export const defaultFields = {
  name: "",
  email: "",
  place: "Warsaw",
  message: "",
}
export type TypeContact = z.infer<typeof contactSchema>
