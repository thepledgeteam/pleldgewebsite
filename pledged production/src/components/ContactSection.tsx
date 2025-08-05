import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import medicalPatternImage from "@/assets/medical-pattern.jpg";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible."
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${medicalPatternImage})` }}
      ></div>
      <div className="absolute inset-0 section-gradient"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Feel free to contact us with any questions.
            </p>
          </div>
{/*
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="mt-1"
                placeholder="Your full name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 min-h-[120px]"
                placeholder="Tell us about your goals and how we can help..."
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
*/}
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Or email us directly at{" "}
              <a 
                href="mailto:contact@pledgeconsultants.com" 
                className="text-primary hover:underline"
              >
                contact@pledgeconsultants.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactSection;


