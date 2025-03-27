import React, { useState } from 'react'
import ChatBot from './support/ChatBot'
import LiveChat from './support/LiveChat'
import FAQSection from './support/FAQSection'
import SupportTicket from './support/SupportTicket'

const CustomerSupport = () => {
  const [activeTab, setActiveTab] = useState('faq')
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  return (
    <>
      {/* Floating Support Button */}
      <button
        onClick={() => setIsSupportOpen(true)}
        className="fixed bottom-24 right-8 bg-[#FA6000] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-[#ea580c] transition-all"
      >
        💬
      </button>

      {/* Support Modal */}
      {isSupportOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl h-[80vh] rounded-2xl overflow-hidden shadow-xl">
            {/* Header */}
            <div className="bg-[#FA6000] text-white p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Customer Support</h2>
              <button 
                onClick={() => setIsSupportOpen(false)}
                className="text-white hover:text-gray-200"
              >
                ✕
              </button>
            </div>

            {/* Support Tabs */}
            <div className="flex border-b">
              {['FAQ', 'Chat', 'Ticket', 'Call'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`flex-1 p-4 ${
                    activeTab === tab.toLowerCase()
                      ? 'border-b-2 border-[#FA6000] text-[#FA6000]'
                      : 'text-gray-500 hover:text-[#FA6000]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="p-4 h-[calc(80vh-8rem)] overflow-y-auto">
              {activeTab === 'faq' && <FAQSection />}
              {activeTab === 'chat' && <LiveChat />}
              {activeTab === 'ticket' && <SupportTicket />}
              {activeTab === 'call' && (
                <div className="text-center py-8">
                  <h3 className="text-xl font-bold mb-4">Call Center</h3>
                  <p className="text-gray-600 mb-4">Our support team is available 24/7</p>
                  <a 
                    href="tel:+2341234567890"
                    className="inline-flex items-center gap-2 bg-[#FA6000] text-white px-6 py-3 rounded-full hover:bg-[#ea580c]"
                  >
                    📞 Call Now
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CustomerSupport 