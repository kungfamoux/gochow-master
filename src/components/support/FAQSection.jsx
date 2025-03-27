import React, { useState } from 'react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order by clicking on the 'Track Order' button in the navigation bar and entering your order ID."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash on delivery and online payments through Paystack, including cards and bank transfers."
    },
    {
      question: "How long does delivery take?",
      answer: "Typical delivery time is 45-60 minutes, depending on your location and restaurant preparation time."
    },
    {
      question: "Can I cancel my order?",
      answer: "You can cancel your order within 5 minutes of placing it. After that, please contact our support team."
    },
    {
      question: "Do you have a minimum order value?",
      answer: "Yes, the minimum order value is ₦1,500 excluding delivery fee."
    }
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className="border rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
          >
            <span className="font-medium">{faq.question}</span>
            <span className="text-[#FA6000]">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50 text-gray-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQSection 