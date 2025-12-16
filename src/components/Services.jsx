import { Code, Wrench } from 'lucide-react'

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Builds',
      description: 'We create software solutions designed specifically for your business processes. Whether you need inventory management, customer tracking, or workflow automation, we build it to fit how you work—not the other way around.',
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Your software needs care to keep running smoothly. We provide ongoing maintenance, updates, and support so you can focus on your business. When you need help, we\'re here—quick response times and clear communication guaranteed.',
    },
  ]

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Two simple services to keep your business running smoothly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="p-4 rounded-lg bg-primary-100 w-fit mb-6">
                  <Icon className="text-primary-600" size={32} />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-body-md text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

