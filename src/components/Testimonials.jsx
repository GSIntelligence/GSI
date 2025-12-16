import { TrendingDown, Shield, RefreshCw } from 'lucide-react'

export const Testimonials = () => {
  const results = [
    {
      icon: TrendingDown,
      title: '95% Reduction in Manual Labor',
      description: 'Built a cash remittance application that automated workflows, saving hundreds of manual hours and reducing errors.',
    },
    {
      icon: Shield,
      title: 'Compliance You Can Trust',
      description: 'Designed and maintained GDPR and HIPAA-compliant databases for sensitive business operations.',
    },
    {
      icon: RefreshCw,
      title: 'Reliability for Repetitive Tasks',
      description: 'Specialized systems that eliminate repetitive manual processes, ensuring auditability and low ongoing maintenance.',
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-md text-foreground mb-4">
            Proven Results That Drive Efficiency
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Real outcomes from solutions we've built for businesses like yours
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-sm border border-border/50 flex flex-col"
              >
                <div className="p-3 rounded-lg bg-primary-100 w-fit mb-4">
                  <Icon className="text-primary-600" size={32} />
                </div>
                <h3 className="font-display text-xl text-foreground mb-4">
                  {result.title}
                </h3>
                <p className="text-body-md text-muted-foreground flex-grow leading-relaxed">
                  {result.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

