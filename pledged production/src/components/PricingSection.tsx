import { Check, FileText, Target, MessageSquare } from "lucide-react";

const PricingSection = () => {
  const services = [
    {
      icon: FileText,
      service: "Essay Review",
      price: "$50 per hour of review",
      details: "Comprehensive feedback on structure, content, and admissions impact from experienced reviewers"
    },
    {
      icon: Target,
      service: "School Selection Strategy", 
      price: "$100",
      details: "Personalized list targeting your stats, goals, and program fit (U.S./Canada)"
    },
    {
      icon: MessageSquare,
      service: "Interview Prep",
      price: "$50 per session",
      details: "Mock interviews with tailored feedback from recent successful applicants"
    }
  ];

  const valuePoints = [
    "Expertise You Trust: Advisors are current resident physicians or medical students who aced their own application cycle.",
    "Quality Over Quantity: We accept a limited number of advisees (~50) per cycle to ensure unmatched attention.",
    "Ethical Pricing: Fees reflect the true cost of strategic guidance, honoring advisors' time and your unique needs."
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pricing
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
              Transparent. Focused. Mission-Driven.
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At our core, we believe financial barriers should never stand between talented applicants 
              and their medical aspirations. That's why our pricing is built on full transparency, 
              ethical fairness, and sustainable access. We charge only what it costs to deliver exceptional guidance.
            </p>
          </div>

          {/* How Our Pricing Works */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              How Our Pricing Works
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="feature-card text-center">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Choose precisely what you need:
                </h4>
                <p className="text-muted-foreground">
                  • À la carte services for targeted support
                </p>
              </div>
              <div className="feature-card text-center">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  All fees directly sustain our mission:
                </h4>
                <div className="text-muted-foreground text-left">
                  <p>• Compensating advisors fairly for their expertise</p>
                  <p>• Covering essential operational costs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Offerings */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Service Offerings & Investment
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="feature-card text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {service.service}
                  </h4>
                  <div className="text-2xl font-bold text-primary mb-4">
                    {service.price}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Our Value Exceeds the Cost */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Why Our Value Exceeds the Cost
            </h3>
            <div className="max-w-4xl mx-auto">
              {valuePoints.map((point, index) => (
                <div key={index} className="flex items-start mb-4">
                  <Check className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default PricingSection;
