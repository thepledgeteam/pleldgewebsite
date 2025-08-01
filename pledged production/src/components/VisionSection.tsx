import graduationImage from "@/assets/graduation-celebration-diverse.jpg";

const VisionSection = () => {
  return (
    <section id="vision" className="py-16 md:py-24 bg-accent text-accent-foreground relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${graduationImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Vision
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            We believe financial constraints should never bar talented students from realizing 
            their medical aspirations. By democratizing access to mentorship rooted in real-world 
            experience, we're leveling the playing field, one applicant at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;