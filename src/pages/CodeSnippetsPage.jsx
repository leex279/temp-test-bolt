import React, { useState } from 'react';
    import { CopyToClipboard } from 'react-copy-to-clipboard';
    import { motion } from 'framer-motion';
    import { FaCopy, FaCheck } from 'react-icons/fa';
    import codeSnippetsData from '../data/codeSnippetsData';
    import styles from './CodeSnippetsPage.module.css';

    const CodeSnippetsPage = ({ language }) => {
      const [copied, setCopied] = useState(null);

      const onCopy = (id) => {
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
      };

      return (
        <div className={styles.container}>
          <h1>bolt.diy - Code Snippets</h1>
          <div className={styles.snippetsContainer}>
            {codeSnippetsData[language].map((snippet) => (
              <div key={snippet.id} className={styles.snippet}>
                <h3 className={styles.snippetTitle}>{snippet.title}</h3>
                <div className={styles.codeContainer}>
                  <pre className={styles.code}>{snippet.code}</pre>
                  <CopyToClipboard text={snippet.code} onCopy={() => onCopy(snippet.id)}>
                    <motion.button
                      className={styles.copyButton}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {copied === snippet.id ? (
                        <FaCheck className={styles.checkIcon} />
                      ) : (
                        <FaCopy />
                      )}
                    </motion.button>
                  </CopyToClipboard>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

    export default CodeSnippetsPage;
