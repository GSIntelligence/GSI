import { Quote } from 'lucide-react'

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Robert Chen',
      business: 'Chen Manufacturing Co.',
      text: 'GSI built us a custom inventory system that replaced three different spreadsheets. Now everything is in one place, and when we need changes, they respond within hours—not days. It\'s been a game-changer for our operations.',
    },
    {
      name: 'Maria Rodriguez',
      business: 'Rodriguez Family Restaurant',
      text: 'We\'ve been working with GSI for five years now. They built our ordering system and handle all our updates. What I love most is that they explain everything in plain English. No tech talk, just clear answers.',
    },
    {
      name: 'James Thompson',
      business: 'Thompson Auto Repair',
      text: 'The team at GSI understood our workflow from day one. They created a system that tracks our customers, appointments, and parts inventory—all integrated. The maintenance support has been excellent. Highly recommend.',
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from business owners we've worked with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-sm border border-border/50 flex flex-col"
            >
              <Quote className="text-primary-400 mb-4" size={32} />
              <p className="text-body-md text-muted-foreground mb-6 flex-grow leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

