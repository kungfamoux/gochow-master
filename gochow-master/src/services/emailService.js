import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Initialize EmailJS
emailjs.init(PUBLIC_KEY)

console.log('Checking environment variables:', {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
})

export const sendOrderConfirmation = async (orderDetails) => {
  try {
    console.log('Starting email send process...')
    
    // Validate customer email
    if (!orderDetails.email) {
      throw new Error('Customer email is required')
    }

    // Verify environment variables are loaded
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error('Missing EmailJS configuration')
    }

    // Log the email being used
    console.log('Attempting to send email to:', orderDetails.email)

    const templateParams = {
      user_email: orderDetails.email,  // Changed from to_email to user_email
      user_name: orderDetails.fullName, // Changed from to_name to user_name
      from_name: "GoChow",
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
        .map(item => `${item.quantity}x ${item.name} - ₦${(item.price * item.quantity).toLocaleString()}`)
        .join('\n'),
      estimated_time: '45-60 minutes',
      delivery_instructions: orderDetails.deliveryInstructions || 'No special instructions',
      payment_method: 'Cash on Delivery'
    }

    console.log('Email template params:', templateParams)

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    )

    console.log('Email sent successfully to:', orderDetails.email)
    return response
  } catch (error) {
    console.error('Email sending failed:', error)
    throw error
  }
}

// Add a test function
export const testEmailService = async () => {
  const testOrder = {
    id: 'TEST123',
    fullName: 'Test Customer',
    email: 'formData.email', // Replace with your email
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