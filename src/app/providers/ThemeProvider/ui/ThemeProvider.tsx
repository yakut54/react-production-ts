import { FC, useMemo, useState } from 'react'
import { Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { LOCALSTORAGE_THEME_KEY } from 'shared/const/localStorage'

const defaultTheme = localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
  document.body.className = theme

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
