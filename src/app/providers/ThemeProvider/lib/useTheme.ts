import { useContext } from 'react'
import { LOCALSTORAGE_THEME_KEY } from 'shared/const/localStorage'
import { Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const { setTheme, theme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}