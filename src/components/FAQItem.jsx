import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { FaChevronDown } from 'react-icons/fa';
    import styles from './FAQItem.module.css';

    const FAQItem = ({ question, answer }) => {
      const [isOpen, setIsOpen] = useState(false);

      const toggleOpen = () => setIsOpen(!isOpen);

      return (
        <motion.div
          className={styles.faqItem}
          initial={false}
          animate={{ backgroundColor: isOpen ? '#e91e63' : '#333' }}
          onClick={toggleOpen}
        >
          <motion.div className={styles.questionContainer}>
            <h3 className={styles.question}>{question}</h3>
            <motion.div
              className={styles.icon}
              animate={{ rotate: isOpen ? 180 : 0 }}
            >
              <FaChevronDown />
            </motion.div>
          </motion.div>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                className={styles.answerContainer}
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <p className={styles.answer}>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    };

    export default FAQItem;
