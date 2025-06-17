// import { useState } from "react";

// const faqs = [
//   {
//     question: "What is your return policy?",
//     answer:
//       "We offer hassle-free returns within 7 days of delivery. Please ensure the product is unused and in its original packaging.",
//   },
//   {
//     question: "Do you offer custom tailoring?",
//     answer:
//       "Yes! Many of our products can be custom tailored. Please contact us or mention your requirements at checkout.",
//   },
//   {
//     question: "How long does shipping take?",
//     answer:
//       "Standard shipping takes 3-7 business days. Express options are available at checkout.",
//   },
//   {
//     question: "Are your products sustainable?",
//     answer:
//       "We are committed to sustainability and use eco-friendly materials and ethical production practices.",
//   },
// ];

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <section className="py-16 px-4 bg-white overflow-hidden" id="faq">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
//           Frequently Asked Questions
//         </h2>
//         <div className="space-y-4">
//           {faqs.map((faq, idx) => (
//             <div
//               key={idx}
//               className="border border-gray-200  rounded-xl overflow-hidden bg-gray-50 transition-all duration-300 hover:shadow-lg"
//             >
//               <button
//                 className="w-full flex justify-between items-center px-6 py-4 text-left cursor-pointer  focus:outline-none"
//                 onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
//                 aria-expanded={openIndex === idx}
//                 aria-controls={`faq-answer-${idx}`}
//               >
//                 <span className="font-medium text-lg">{faq.question}</span>
//                 <span
//                   className="ml-4 text-2xl transition-transform duration-300 text-orange-500"
//                   style={{
//                     transform:
//                       openIndex === idx ? "rotate(45deg)" : "rotate(0deg)",
//                   }}
//                 >
//                   +
//                 </span>
//               </button>
//               <div
//                 id={`faq-answer-${idx}`}
//                 className={`px-6 pb-4 text-gray-600 text-base transition-all duration-300 ${
//                   openIndex === idx
//                     ? "max-h-40 opacity-100"
//                     : "max-h-0 opacity-0"
//                 } overflow-hidden`}
//                 aria-hidden={openIndex !== idx}
//               >
//                 {faq.answer}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useRef } from "react";
import gsap from "gsap";

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
  const containerRef = useRef();
  const answerRefs = useRef([]);
  const plusIconsRef = useRef([]);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      // Closing animation
      gsap.to(answerRefs.current[index], {
        height: 0,
        opacity: 0,
        paddingBottom: 0,
        duration: 0.1,
        ease: "power2.inOut",
        onComplete: () => setOpenIndex(null),
      });

      // Rotate icon back
      gsap.to(plusIconsRef.current[index], {
        rotate: 0,
        duration: 0.1,
        ease: "power2.inOut",
      });
    } else {
      const prevIndex = openIndex;
      const newIndex = index;

      if (prevIndex !== null) {
        // Close previous FAQ
        gsap.to(answerRefs.current[prevIndex], {
          height: 0,
          opacity: 0,
          paddingBottom: 0,
          duration: 0.1,
          ease: "power2.inOut",
        });

        // Rotate previous icon back
        gsap.to(plusIconsRef.current[prevIndex], {
          rotate: 0,
          duration: 0.1,
          ease: "power2.inOut",
        });
      }

      // Open new FAQ
      const answerEl = answerRefs.current[newIndex];
      setOpenIndex(newIndex);

      // Get content height
      const contentHeight = answerEl.scrollHeight;

      gsap.to(answerEl, {
        height: contentHeight,
        opacity: 1,
        paddingBottom: "1rem",
        duration: 0.5,
        ease: "power2.inOut",
        delay: prevIndex !== null ? 0.3 : 0,
      });

      // Rotate new icon
      gsap.to(plusIconsRef.current[newIndex], {
        rotate: 45,
        duration: 0.1,
        ease: "power2.inOut",
        delay: prevIndex !== null ? 0.3 : 0,
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-white" id="faq" ref={containerRef}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="faq-item border border-gray-200 rounded-xl overflow-hidden bg-gray-50 transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left cursor-pointer focus:outline-none"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <div
                  ref={(el) => (plusIconsRef.current[idx] = el)}
                  className="ml-4 w-6 h-6 flex items-center justify-center transition-transform duration-300"
                >
                  <div className="w-0.5 h-4 bg-orange-500 rounded-full absolute"></div>
                  <div className="w-4 h-0.5 bg-orange-500 rounded-full absolute"></div>
                </div>
              </button>
              <div
                id={`faq-answer-${idx}`}
                ref={(el) => (answerRefs.current[idx] = el)}
                className="px-6 overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                <div className="pb-4 text-gray-600 text-base">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
