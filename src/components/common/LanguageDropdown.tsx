import { useState } from "react"

const languages = [
  {
    code: "en",
    name: "English",
    flag: "/flags/en.png",
  },
  {
    code: "id",
    name: "Indonesia",
    flag: "/flags/id.png",
  },
  // Add more countries here
]

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code) // default language is the first language in the array
  const [dropdownOpen, setDropdownOpen] = useState(false) // state for toggling the language dropdown

  const handleChangeLanguage = (languageCode: any) => {
    setSelectedLanguage(languageCode)
    setDropdownOpen(false)
    // TODO: update the language of the app here
  }

  return (
    <div className="relative">
      {/* Language toggle button */}
      <button
        type="button"
        className="flex items-center gap-2 focus:outline-none"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {/* Language flag icon */}
        <img
          src={languages?.find((lang) => lang?.code === selectedLanguage)?.flag}
          alt={`${selectedLanguage} flag`}
          className="w-4 h-4 rounded-full border"
        />

        {/* Language label */}
        <div className="text-white ml-2">
          <span>
            {languages?.find((lang) => lang?.code === selectedLanguage)?.name}
          </span>
        </div>

        {/* Dropdown arrow */}
        <svg viewBox="0 0 20 20" fill="white" className="w-4 h-4">
          <path fillRule="evenodd" d="M10 14l6-6H4l6 6z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Language dropdown */}
      {dropdownOpen && (
        <div className="absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-700 ring-1 ring-blue-700 ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-selector"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                className={`${
                  selectedLanguage === language.code
                    ? "bg-orange-700 text-white"
                    : "text-white"
                } block w-full text-left px-4 py-2 text-sm`}
                onClick={() => handleChangeLanguage(language.code)}
                role="menuitem"
              >
                <img
                  src={language.flag}
                  alt={`${language.code} flag`}
                  className="w-4 h-4 border rounded-full mr-2"
                />
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageDropdown
