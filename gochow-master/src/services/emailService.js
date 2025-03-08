import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Initialize EmailJS
emailjs.init(PUBLIC_KEY)

export const sendOrderConfirmation = async (orderDetails) => {
  try {
    console.log('Starting email send process...')
    
    if (!orderDetails.email) {
      throw new Error('Customer email is required')
    }

    const templateParams = {
      to_email: orderDetails.email,
      to_name: orderDetails.fullName,
      order_number: orderDetails.id,
      order_date: new Date().toLocaleDateString('en-NG', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      order_total: `₦${orderDetails.total.toLocaleString()}`,
      delivery_address: orderDetails.address,
      order_items: orderDetails.items
        .map(item => `• ${item.quantity}x ${item.name} - ₦${(item.price * item.quantity).toLocaleString()}`)
        .join('\n'),
      estimated_time: '45-60 minutes',
      delivery_instructions: orderDetails.deliveryInstructions || 'No special instructions',
      payment_method: 'Cash on Delivery',
      support_phone: '+234 XXX XXX XXXX',
      support_email: 'support@gochow.com',
      support_whatsapp: '+234 XXX XXX XXXX'
    }

    console.log('Sending email with params:', templateParams)

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    )

    console.log('Email sent successfully:', response)
    return response
  } catch (error) {
    console.error('Email sending failed:', error)
    // Log more details about the error
    if (error.response) {
      console.error('Error response:', error.response)
    }
    throw new Error(`Failed to send email: ${error.message}`)
  }
}

// Add a test function
export const testEmailService = async () => {
  const testOrder = {
    id: 'TEST123',
    fullName: 'Test Customer',
    email: 'echika911@gmail.com', // Replace with your email
    address: '123 Test Street, Lagos',
    items: [
      {
        id: 1,
        name: "Jollof Rice",
        quantity: 2,
        price: 2500
      },
      {
        id: 2,
        name: "Chicken",
        quantity: 1,
        price: 1500
      }
    ],
    total: 6500,
    deliveryInstructions: 'Please deliver quickly',
    status: 'pending'
  }

  return sendOrderConfirmation(testOrder)
} 