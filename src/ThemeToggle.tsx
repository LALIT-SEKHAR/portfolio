import { MoonStars, Sun } from "@phosphor-icons/react"

type ThemeToggleProps = {
  theme: "light" | "dark"
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const nextLabel = theme === "light" ? "dark" : "light"
  const Icon = theme === "light" ? Sun : MoonStars

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${nextLabel} mode`}
      title={`Switch to ${nextLabel} mode`}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        <Icon size={16} weight="bold" />
      </span>
      <span className="theme-toggle-label">{theme === "light" ? "Light" : "Dark"}</span>
    </button>
  )
}
