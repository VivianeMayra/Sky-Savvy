interface LanguageSelectionProps {
  selectedLang: string
  onSelectLang: (lang: string) => void
}

export function LanguageSelection({
  selectedLang,
  onSelectLang,
}: LanguageSelectionProps) {
  const lang = ["pt_br", "en", "es"]
  return (
    <div>
      <p className="text-white font-medium">
        Escolha o idioma que deseja receber suas informações:
      </p>
      <div className="flex flex-row gap-4">
        {lang.map((lang) => (
          <label key={lang} className="flex items-center space-x-2">
            <input
              type="radio"
              value={lang}
              checked={selectedLang === lang}
              onChange={() => onSelectLang(lang)}
            />
            <span className="text-white font-medium">
              {lang === "pt_br"
                ? "Português"
                : lang === "en"
                ? "Inglês"
                : "Espanhol"}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}
