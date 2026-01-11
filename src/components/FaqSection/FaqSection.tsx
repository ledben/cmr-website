"use client";

import { useState } from 'react';
import styles from './FaqSection.module.css';

const faqData = [
  {
    question: "Quels types d'articles acceptez-vous en dépôt ?",
    answer: "Nous acceptons les vêtements pour femmes, hommes et enfants, ainsi que les chaussures, sacs à main et accessoires de mode. Tous les articles doivent être récents, en excellent état, propres, de saison, lavés repassés et mis sur cintre."
  },
  {
    question: "Comment fonctionne le processus de dépôt-vente ?",
    answer: "Il est impératif de prendre rendez-vous avant de vous présenter vos articles. Nous effectuons une sélection ensemble, puis nous fixons les prix. Vos articles sont mis en vente pour une durée de deux mois. Vous percevez 50% sur les ventes réalisées."
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer: "Par téléphone ou par SMS au 07 48 45 88 48 (pas de message vocal)"
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer: "La boutique est ouverte du mardi au vendredi de 10h15 à 12h15 et de 14h45 à 19h00, et le samedi de 10h15 à 12h15 et de 15h00 à 19h00. Nous sommes fermés le dimanche et le lundi."
  },
  {
    question: "Puis-je retourner un article acheté en boutique ?",
    answer: "Les articles achetés en dépôt-vente sont des ventes finales. Nous ne proposons ni échange, ni remboursement. Nous vous encourageons à bien vérifier les articles avant l'achat."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`section section-primary ${styles.faqSection}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Questions Fréquentes</h2>
        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                {faq.question}
                <span className={`${styles.icon} ${openIndex === index ? styles.open : ''}`}>+</span>
              </button>
              <div className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
