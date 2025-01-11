import React from 'react';
    import { motion } from 'framer-motion';
    import { FaGlobe } from 'react-icons/fa';
    import { Link } from 'react-router-dom';
    import styles from './Header.module.css';

    const Header = ({ language, toggleLanguage }) => {
      return (
        <div className={styles.header}>
          <Link to="/" className={styles.logo}>
            bolt.diy
          </Link>
          <div className={styles.nav}>
            <Link to="/" className={styles.navItem}>
              FAQ
            </Link>
            <Link to="/code-snippets" className={styles.navItem}>
              Code Snippets
            </Link>
          </div>
          <motion.div
            className={styles.languageToggle}
            onClick={toggleLanguage}
            whileTap={{ scale: 0.9 }}
          >
            <FaGlobe />
            <span>{language === 'en' ? 'EN' : 'DE'}</span>
          </motion.div>
        </div>
      );
    };

    export default Header;
