import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { BsSun, BsMoon } from 'react-icons/bs';
    import { Routes, Route } from 'react-router-dom';
    import FAQPage from './pages/FAQPage';
    import CodeSnippetsPage from './pages/CodeSnippetsPage';
    import Header from './components/Header';
    import styles from './App.module.css';

    const App = () => {
      const [isDarkMode, setIsDarkMode] = useState(true);
      const [language, setLanguage] = useState('en');

      useEffect(() => {
        document.body.classList.toggle('light', !isDarkMode);
      }, [isDarkMode]);

      const toggleTheme = () => setIsDarkMode(!isDarkMode);
      const toggleLanguage = () => setLanguage(language === 'en' ? 'de' : 'en');

      return (
        <div className={styles.container}>
          <Header language={language} toggleLanguage={toggleLanguage} />

          <Routes>
            <Route path="/" element={<FAQPage language={language} />} />
            <Route
              path="/code-snippets"
              element={<CodeSnippetsPage language={language} />}
            />
          </Routes>

          <motion.div
            className={`${styles.themeToggle} ${isDarkMode ? '' : styles.lightMode}`}
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <BsMoon /> : <BsSun />}
          </motion.div>
        </div>
      );
    };

    export default App;
