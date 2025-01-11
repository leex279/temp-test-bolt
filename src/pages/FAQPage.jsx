import React from 'react';
    import FAQItem from '../components/FAQItem';
    import faqData from '../data/faqData';
    import styles from './FAQPage.module.css';

    const FAQPage = ({ language }) => {
      return (
        <div className={styles.container}>
          <h1>bolt.diy - FAQ/Troubleshooting</h1>
          <div className={styles.faqContainer}>
            {faqData[language].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      );
    };

    export default FAQPage;
