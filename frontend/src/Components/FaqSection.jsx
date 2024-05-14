import React, { useState } from 'react';
import './FaqSection.css'; // Make sure to import your stylesheet


const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq ${isOpen ? 'active' : ''}`}>
      <button className="accordion" onClick={toggleAccordion}>
        {question}
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div className="panel" style={{ display: isOpen ? 'block' : 'none' }}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const faqData = [
    {
      question: 'What are the common symptoms of COVID-19?',
      answer: ' Common symptoms include fever, cough, and shortness of breath. Other symptoms may include fatigue, body aches, loss of taste or smell, sore throat, and difficulty breathing.',
    },
    {
      question: ' How can I protect myself and others from COVID-19?',
      answer: ' Practice good hand hygiene, wear a mask in crowded places, maintain social distancing, and stay updated on vaccination guidelines. Follow public health guidelines and regulations in your area.',
    },
    {
      question: 'Are COVID-19 vaccines safe and effective?',
      answer: ' Yes, COVID-19 vaccines authorized by health agencies have undergone rigorous testing for safety and efficacy. They play a crucial role in preventing severe illness and reducing transmission.',
    },
    {
      question: 'What is the difference between quarantine and isolation?',
      answer: 'Quarantine is for individuals who may have been exposed to the virus, while isolation is for those who are confirmed to be infected. Both aim to prevent the spread of COVID-19.',
    },
    {
      question: ' Can I get COVID-19 from touching surfaces?',
      answer: 'While it is possible to contract the virus from surfaces, the primary mode of transmission is through respiratory droplets. Regular handwashing and sanitizing are essential to reduce the risk.',
    },
    {
      question: ' Can I still get COVID-19 after being fully vaccinated?',
      answer: 'While breakthrough infections can occur, vaccines significantly reduce the risk of severe illness and hospitalization. Follow recommended guidelines and get booster shots as advised.',
    },
    {
      question:'How can I find information about vaccination centers in my area?',
      answer:'Visit our  official health department websites, use vaccine locator tools, or check with local pharmacies and healthcare providers for up-to-date information on vaccination sites.'

    },
  ];

  return (
    <section  id = "FaqSection" className="faq-section">
      <h1><b>Frequently Asked Questions (FAQ)</b></h1>
      <div className="wrapper">
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
