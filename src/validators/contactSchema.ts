import { z } from "zod"

export interface ContactFormFields {
  name: string
  email: string
  place: string
  message: string
}

export const contactSchema = z
  .object({
    name: z.string().min(2, "invalidNameMin").max(20, "invalidNameMax"),
    email: z.string().email("invalidEmail"),
    place: z.string(),
    message: z.string().min(30, "invalidMessage"),
  })
  .required()

export const defaultFields = {
  name: "",
  email: "",
  place: "Warsaw",
  message: "",
}
export type TypeContact = z.infer<typeof contactSchema>
