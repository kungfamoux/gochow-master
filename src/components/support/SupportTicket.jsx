import React, { useState } from 'react'

const SupportTicket = () => {
  const [ticketData, setTicketData] = useState({
    subject: '',
    category: '',
    description: '',
    email: '',
    orderId: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle ticket submission
    console.log('Ticket submitted:', ticketData)
    alert('Support ticket submitted successfully!')
    setTicketData({
      subject: '',
      category: '',
      description: '',
      email: '',
      orderId: ''
    })
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Submit a Support Ticket</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Subject</label>
          <input
            type="text"
            value={ticketData.subject}
            onChange={(e) => setTicketData({ ...ticketData, subject: e.target.value })}
            required
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FA6000]"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Category</label>
          <select
            value={ticketData.category}
            onChange={(e) => setTicketData({ ...ticketData, category: e.target.value })}
            required
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FA6000]"
          >
            <option value="">Select a category</option>
            <option value="order">Order Issue</option>
            <option value="delivery">Delivery Problem</option>
            <option value="payment">Payment Issue</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            value={ticketData.description}
            onChange={(e) => setTicketData({ ...ticketData, description: e.target.value })}
            required
            rows="4"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FA6000]"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={ticketData.email}
            onChange={(e) => setTicketData({ ...ticketData, email: e.target.value })}
            required
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FA6000]"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Order ID (Optional)</label>
          <input
            type="text"
            value={ticketData.orderId}
            onChange={(e) => setTicketData({ ...ticketData, orderId: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FA6000]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FA6000] text-white py-3 rounded-full hover:bg-[#ea580c]"
        >
          Submit Ticket
        </button>
      </form>
    </div>
  )
}

export default SupportTicket 