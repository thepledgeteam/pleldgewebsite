import consultationImage from "@/assets/consultation.jpg";

const CommitmentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img 
              src={consultationImage} 
              alt="Medical consultation and mentorship" 
              className="rounded-lg card-shadow w-full h-auto"
            />
            <div className="absolute inset-0 bg-accent/10 rounded-lg"></div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Commitment
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Unlike traditional consultancies, we charge only what it costs us to deliver our services, 
              covering consultant time and operational expenses, ensuring affordability without 
              compromising quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;