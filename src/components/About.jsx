import { Users, Heart, Target } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="font-display text-display-md text-foreground mb-6">
              We're Here to Make Your Life Easier
            </h2>
            <p className="text-body-lg text-muted-foreground mb-6">
              Running a small business is hard enough without wrestling with software 
              that doesn't fit your needs. That's where we come in.
            </p>
            <p className="text-body-lg text-muted-foreground mb-6">
              With experience dating back to 2015, we help business owners replace 
              clunky spreadsheets and disconnected tools with simple, custom-built 
              solutions that actually work the way you do.
            </p>
            <p className="text-body-lg text-muted-foreground">
              And when something needs fixing? We're just a phone call away. 
              No complicated tickets, no waiting days for a response.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-teal-light">
                  <Users className="text-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Small Team, Big Care</h3>
                  <p className="text-muted-foreground">
                    You'll work with the same people from start to finish—no getting 
                    passed around to strangers.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-teal-light">
                  <Heart className="text-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Plain English, Always</h3>
                  <p className="text-muted-foreground">
                    We skip the tech jargon. You'll always understand what we're 
                    doing and why.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-teal-light">
                  <Target className="text-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Built for You</h3>
                  <p className="text-muted-foreground">
                    Every solution is designed around your specific business—not 
                    a one-size-fits-all template.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

