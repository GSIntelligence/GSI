import { ArrowRight } from 'lucide-react'

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container-narrow mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-display-lg md:text-5xl lg:text-display-lg text-foreground mb-6 leading-tight">
            Custom Software That Keeps Your Business Running
          </h1>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We build reliable software solutions tailored to your business needs, 
            with ongoing support you can count on. No tech jargon, just solutions that work.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Schedule a Consultation
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

