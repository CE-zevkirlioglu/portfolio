import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    // Öncelikle localStorage'da tema adını kontrol edin, eğer yoksa varsayılan olarak 'light' temasını ayarlayın.
    const savedTheme = localStorage.getItem('themeName')
    return savedTheme || 'light'
  })

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    // Sistem temasına göre temayı ayarlayın, ancak localStorage'da zaten bir tema kaydedilmişse bu önemli değil.
    if (!localStorage.getItem('themeName')) {
      setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
    }
    const handleChange = (e) => {
      setThemeName(e.matches ? 'dark' : 'light')
    };
    darkMediaQuery.addEventListener('change', handleChange);
    return () => darkMediaQuery.removeEventListener('change', handleChange);
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }