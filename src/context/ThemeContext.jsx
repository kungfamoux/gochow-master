import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [language, setLanguage] = useState('en')
  const [fontSize, setFontSize] = useState('normal')

  useEffect(() => {
    // Load saved preferences
    const savedTheme = localStorage.getItem('theme')
    const savedLanguage = localStorage.getItem('language')
    const savedFontSize = localStorage.getItem('fontSize')

    if (savedTheme) setIsDarkMode(savedTheme === 'dark')
    if (savedLanguage) setLanguage(savedLanguage)
    if (savedFontSize) setFontSize(savedFontSize)
  }, [])

  useEffect(() => {
    // Apply dark mode
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const changeFontSize = (size) => {
    setFontSize(size)
    localStorage.setItem('fontSize', size)
  }

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleTheme,
      language,
      changeLanguage,
      fontSize,
      changeFontSize
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext) 