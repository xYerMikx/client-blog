import messages from "../../messages/en.json"
import messagesRU from "../../messages/ru.json"

export const getLinkText = (localeName: string, locale: string) => {
  const currMessages = locale === "ru" ? messagesRU : messages
  return (currMessages.header.links as Record<string, unknown>)[localeName] as string
}
