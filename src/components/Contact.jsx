import { Mail } from 'lucide-react'

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-foreground mb-4">
            Let's Talk About Your Business
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to see how custom software can help your business? 
            Send us an email and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-lg bg-primary-100 flex-shrink-0">
                <Mail className="text-primary-600" size={32} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-2xl text-foreground mb-3">Email Us</h3>
                <p className="text-body-md text-muted-foreground mb-4">
                  Send us an email anytime and we'll respond within 24 hours.
                </p>
                <a
                  href="mailto:granitestateintelligence@gmail.com"
                  className="text-primary-600 hover:text-primary-700 font-semibold text-lg inline-flex items-center gap-2 transition-colors break-words break-all"
                >
                  granitestateintelligence@gmail.com
                  <Mail className="inline flex-shrink-0" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-200 mt-8">
            <h3 className="font-display text-xl text-foreground mb-4">
              What Happens Next?
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold text-lg">1.</span>
                <span className="text-body-md">We'll review your email and understand your needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold text-lg">2.</span>
                <span className="text-body-md">Schedule a free consultation call at your convenience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 font-bold text-lg">3.</span>
                <span className="text-body-md">Discuss solutions and provide a clear, no-pressure quote</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

