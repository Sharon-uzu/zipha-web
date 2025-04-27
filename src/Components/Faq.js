import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqData = [
  {
    question: "What is a Telegram bot?",
    answer: "A Telegram bot is an automated tool that helps manage tasks like group moderation, updates, and payments. It’s safe to use, as it operates within Telegram’s secure system and respects user privacy.",
  },
  {
    question: "What can Ziphabot do for me and my business?",
    answer: "Ziphabot turns Telegram into a fully automated paid membership platform. The bot requests payments from your members, adds them to your chats when they pay and kicks them out if they don't renew...",
  },
  {
    question: "What currencies does Ziphabot support?",
    answer: "Ziphabot supports various payment methods and currencies, including crypto, cards, bank transfers, and local options, for seamless transactions across regions.",
  },
  {
    question: "Will the bot notify me when subscriptions have been bought?",
    answer: "Ziphabot will send a notification to all set administrators when a subscription is bought.",
  },
  {
    question: "What permissions does the bot need?",
    answer: 'Ziphabot only needs "Invite User" and "Ban User" permissions. This is required since the bot will send links to your customers and kick them when their membership is over.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); // open first by default

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className='faq' id='faq'>
      <h2>Questions? We’ve Got Answers.</h2>

      {faqData.map((item, index) => (
        <div className="q-a" key={index}>
          <div className="q-header" onClick={() => toggleIndex(index)} style={{cursor: 'pointer'}}>
            <h4>{item.question}</h4>
            {activeIndex === index ? (
              <IoIosArrowUp className='q-i' />
            ) : (
              <IoIosArrowDown className='q-i' />
            )}
          </div>

          {activeIndex === index && (
            <p className="q-answer">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
