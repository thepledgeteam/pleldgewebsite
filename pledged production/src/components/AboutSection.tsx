import medicalResidentImage from "@/assets/medical-resident-diverse.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Bridging Gaps in Medical School Admissions
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At our core, we are a collective of current medical residents dedicated to empowering 
              the next generation of physicians. We understand firsthand the complexities, pressures, 
              and financial burdens of the medical school application process. In a landscape dominated 
              by costly consultancy services, our mission is simple: to provide exceptional, accessible 
              guidance without prohibitive fees.
            </p>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src={medicalResidentImage} 
              alt="Medical resident providing guidance" 
              className="rounded-lg card-shadow w-full h-auto"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;