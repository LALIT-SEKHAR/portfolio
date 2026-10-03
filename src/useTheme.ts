import { useEffect, useState } from "react"
import {
  applyTheme,
  getSystemTheme,
  persistTheme,
  readStoredTheme,
  resolveTheme,
  type Theme,
} from "./theme"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "light"
    const current = document.documentElement.getAttribute("data-theme")
    return current === "dark" || current === "light" ? current : resolveTheme()
  })

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => {
      if (readStoredTheme()) return
      const next = getSystemTheme()
      setTheme(next)
      applyTheme(next)
    }
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  const toggleTheme = () => {
    setTheme((current) => {
      const next: Theme = current === "light" ? "dark" : "light"
      persistTheme(next)
      applyTheme(next)
      return next
    })
  }

  return { theme, toggleTheme }
}
