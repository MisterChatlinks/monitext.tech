import { useState } from 'preact/hooks';

// Vous pouvez remplacer ces icônes par vos propres SVGs si vous le souhaitez
const ChevronDown = () => (
  <svg
    className="h-5 w-5 transition-transform duration-300 transform group-hover:text-brand"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export const FaqItem = ({ question, answer }:{ question: string, answer: string}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-md border border-border-light dark:border-border-neutral overflow-hidden transition-all duration-300 ease-in-out">
      <h3
        className="flex justify-between items-center px-6 py-4 cursor-pointer text-lg font-semibold text-text-dark dark:text-text-light group"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className={`${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDown />
        </span>
      </h3>
      <div
        className={`px-6 overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-text-soft leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export const FaqSection = ({ items }:{ items: { question: string, answer: string}[] }) => (
  <div className="flex flex-col items-center py-16 px-6 bg-background-lighter dark:bg-background-nightly font-satoshi transition-colors duration-500">
    <h2 className="text-4xl sm:text-5xl font-bold text-text-dark dark:text-text-light mb-12 text-center">
      Frequently Asked Questions
    </h2>
    <div className="space-y-6 w-full max-w-4xl">
      {items.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  </div>
);

// Exemple d'utilisation dans votre page
const faqData = [
  {
    question: "How does Monitext work?",
    answer: "Monitext works by wrapping your functions with our SDK, allowing you to define policies for logging, profiling, and error tracing. We send this data to your dashboard for real-time monitoring and alerting.",
  },
  {
    question: "What runtimes are supported?",
    answer: "Our SDK supports all runtimes that can run ES2015+, including Node.js, Deno, Bun, and all major browsers.",
  },
  {
    question: "How is my data handled?",
    answer: "We prioritize your privacy and data security. All logs are encrypted in transit and at rest. You can configure data retention policies for your projects.",
  },
  {
    question: "Is there a free plan?",
    answer: "Yes, we offer a generous free plan that includes 20,000 logs per month and 7 days of log retention. It's a great way to get started with Monitext.",
  },
];


export default function FAQMainIsland() {
  return (
    <>
      <FaqSection items={faqData} />
    </>
  );
}