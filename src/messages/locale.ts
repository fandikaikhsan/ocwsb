import en from "./en.json"
import id from "./id.json"

interface Locale {
  [key: string]: {
    Navbar: {
      [key: string]: string
    }
    Banner: {
      [key: string]: string
    }
    ContactForm: {
      [key: string]: any
    }
  }
}

const locales: Locale = { en, id }

export default locales
