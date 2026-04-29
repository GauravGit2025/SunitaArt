import { useState } from 'react'

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '', companyName: '', email: '', phone: '',
    country: '', productInterest: '', quantity: '', message: ''
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
      
      // 1. Fire Database Save in the background (DO NOT AWAIT)
      fetch(`${baseUrl}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(err => console.error('Background DB save error:', err))

      // 2. Await ONLY EmailJS so the UI is instantly updated
      const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: formData.fullName,
            company_name: formData.companyName,
            reply_to: formData.email,
            phone: formData.phone,
            country: formData.country,
            product_interest: formData.productInterest,
            quantity: formData.quantity,
            message: formData.message
          }
        })
      })

      if (emailResponse.ok) {
        setStatus('success')
        setFormData({ fullName: '', companyName: '', email: '', phone: '', country: '', productInterest: '', quantity: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <div className="bg-luxury-ivory p-8 md:p-12 border border-luxury-sand" data-aos="fade-up">
      {status === 'success' ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-luxury-olive/10 text-luxury-olive rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 className="font-heading text-2xl mb-4">Request Received</h3>
          <p className="text-luxury-taupe">Our export team will review your requirements and respond within 24 hours.</p>
          <button onClick={() => setStatus('idle')} className="mt-8 px-6 py-2 border border-luxury-navy text-sm uppercase">Submit Another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input required type="text" name="fullName" placeholder="Full Name*" value={formData.fullName} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-sand py-3 focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-luxury-taupe" />
            <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-sand py-3 focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-luxury-taupe" />
            <input required type="email" name="email" placeholder="Email Address*" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-sand py-3 focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-luxury-taupe" />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-sand py-3 focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-luxury-taupe" />
            <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-sand py-3 focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-luxury-taupe" />
            <select required name="productInterest" value={formData.productInterest} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-sand py-3 focus:outline-none focus:border-luxury-gold transition-colors text-luxury-navy">
              <option value="" disabled>Select Product Interest*</option>
              <option value="Hand Knotted">Hand Knotted</option>
              <option value="Hand Tufted">Hand Tufted</option>
              <option value="Hand Woven">Hand Woven</option>
              <option value="Dhurrie">Dhurrie</option>
              <option value="Flatweave">Flatweave / Kilim</option>
              <option value="Bespoke">Custom / Bespoke</option>
            </select>
          </div>
          <input type="text" name="quantity" placeholder="Estimated Quantity / Dimensions" value={formData.quantity} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-sand py-3 focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-luxury-taupe" />
          <textarea required name="message" placeholder="Tell us about your project or requirements*" rows="4" value={formData.message} onChange={handleChange} className="w-full bg-transparent border-b border-luxury-sand py-3 focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-luxury-taupe resize-none"></textarea>
          
          <button type="submit" disabled={status === 'submitting'} className="w-full bg-luxury-navy text-luxury-ivory py-4 uppercase tracking-widest text-sm hover:bg-luxury-gold transition-colors disabled:opacity-50">
            {status === 'submitting' ? 'Submitting...' : 'Send Enquiry'}
          </button>
          {status === 'error' && <p className="text-red-500 text-sm mt-2">There was an error submitting your form. Please try again.</p>}
        </form>
      )}
    </div>
  )
}
