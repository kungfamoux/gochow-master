import React from 'react'

const PaystackPayment = ({ amount, email, onSuccess, onClose }) => {
  const initializePayment = () => {
    const handler = PaystackPop.setup({
      key: 'pk_test_bbd7682a1cc0303cb8efaa27c39972aadf6e6c67', // Your Paystack public key
      email: email,
      amount: amount * 100, // Amount in kobo
      currency: 'NGN',
      ref: `gochow_${new Date().getTime().toString()}`,
      channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
      label: 'GoChow Order',
      metadata: {
        custom_fields: [
          {
            display_name: "Order Type",
            variable_name: "order_type",
            value: "food_delivery"
          }
        ]
      },
      onClose: () => {
        console.log('Payment window closed')
        onClose()
      },
      callback: (response) => {
        console.log('Payment successful:', response)
        onSuccess(response)
      }
    })
    handler.openIframe()
  }

  return (
    <button 
      onClick={initializePayment}
      className='w-full bg-[#0BA4DB] text-white py-3 rounded-full hover:bg-[#098EC3] transition-colors flex items-center justify-center gap-2'
    >
      <span>Pay with Paystack</span>
      <span>₦{amount.toLocaleString()}</span>
    </button>
  )
}

export default PaystackPayment 