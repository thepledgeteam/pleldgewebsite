import { Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-diverse-1.jpg";
import testimonial2 from "@/assets/testimonial-diverse-2.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: testimonial1,
      name: "Marcus Rodriguez",
      role: "Medical Student, Class of 2027",
      content: "The Pledge Consultants helped me navigate the complex application process with personalized guidance that made all the difference. Their affordable approach meant I could get expert help without breaking the bank."
    },
    {
      image: testimonial2,
      name: "Sarah Chen",
      role: "Pre-med Student",
      content: "Having mentors who recently went through the same process was invaluable. They understood the current landscape and provided insights that traditional consultants simply couldn't offer."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the future physicians we've helped achieve their dreams
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="feature-card">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default TestimonialsSection;
