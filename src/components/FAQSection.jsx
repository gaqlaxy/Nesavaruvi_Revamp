import { useState } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer hassle-free returns within 7 days of delivery. Please ensure the product is unused and in its original packaging.",
  },
  {
    question: "Do you offer custom tailoring?",
    answer:
      "Yes! Many of our products can be custom tailored. Please contact us or mention your requirements at checkout.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3-7 business days. Express options are available at checkout.",
  },
  {
    question: "Are your products sustainable?",
    answer:
      "We are committed to sustainability and use eco-friendly materials and ethical production practices.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-4 bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200  rounded-xl overflow-hidden bg-gray-50 transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left cursor-pointer  focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <span
                  className="ml-4 text-2xl transition-transform duration-300 text-orange-500"
                  style={{
                    transform:
                      openIndex === idx ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`px-6 pb-4 text-gray-600 text-base transition-all duration-300 ${
                  openIndex === idx
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
                aria-hidden={openIndex !== idx}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
