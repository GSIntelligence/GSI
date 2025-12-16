import { useState } from 'react'
import { Send, Mail, Phone } from 'lucide-react'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-foreground mb-4">
            Let's Talk About Your Business
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to see how custom software can help your business? 
            Fill out the form below or give us a call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-body-md font-medium text-foreground mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none text-body-md transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-body-md font-medium text-foreground mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none text-body-md transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-body-md font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none text-body-md transition-all resize-none"
                  placeholder="Tell us about your business and what you'd like to accomplish..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
                {!submitted && <Send size={20} />}
              </button>

              {submitted && (
                <p className="text-primary-600 font-medium">
                  Thank you! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-100">
                  <Mail className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground">
                    Send us an email anytime and we'll respond within 24 hours.
                  </p>
                  <a
                    href="mailto:info@gsi-software.com"
                    className="text-primary-600 hover:text-primary-700 font-medium mt-2 inline-block"
                  >
                    info@gsi-software.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-100">
                  <Phone className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Call Us</h3>
                  <p className="text-muted-foreground">
                    Prefer to talk? Give us a call during business hours.
                  </p>
                  <a
                    href="tel:+1-555-123-4567"
                    className="text-primary-600 hover:text-primary-700 font-medium mt-2 inline-block"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
              <h3 className="font-display text-xl text-foreground mb-3">
                What Happens Next?
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">1.</span>
                  <span>We'll review your message and understand your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">2.</span>
                  <span>Schedule a free consultation call at your convenience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">3.</span>
                  <span>Discuss solutions and provide a clear, no-pressure quote</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

