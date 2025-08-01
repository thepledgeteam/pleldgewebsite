import { GraduationCap, Target, Users } from "lucide-react";

const WhyTrustUsSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Insider Expertise",
      description: "Our advisors are recent medical school applicants who successfully matched into residency programs. They offer firsthand, up-to-date insights into admissions committees' expectations."
    },
    {
      icon: Target,
      title: "Focused Support",
      description: "We specialize in guiding applicants through U.S. and Canadian medical school applications, from personal statements and interview prep to school selection strategy."
    },
    {
      icon: Users,
      title: "Expanded Reach",
      description: "Through curated partnerships, we also offer strategic advisory services for high school students pursuing competitive undergraduate programs, laying the foundation for future medical careers."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Trust Us?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="feature-card text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUsSection;