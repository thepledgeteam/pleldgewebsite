import { useState } from "react";
import medicalPatternImage from "@/assets/medical-pattern.jpg";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mvzgpqyd", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${medicalPatternImage})` }}
      />
      <div className="absolute inset-0 section-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let’s Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Feel free to contact us with any questions.
            </p>
          </div>

          {/* ✅ SUCCESS MESSAGE */}
          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">
                Message sent successfully!
              </h3>
              <p>We’ll get back to you shortly.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-background p-8 rounded-lg shadow-lg"
            >
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-md border border-border px-4 py-2"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-border px-4 py-2"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-md border border-border px-4 py-2"
                  placeholder="Tell us how we can help..."
                />
              </div>

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition"
              >
                Send Message
              </button>
            </form>
          )}

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





{/*
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
{/*
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
*/}
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
{/*
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

<form action="https://formspree.io/f/mvzgpqyd" method="POST">
    <label for="name">Name</label><br>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">Email</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="message">Message</label><br>
    <textarea id="message" name="message" rows="5" required></textarea><br><br>

    <button type="submit">Submit</button>
</form>

export default ContactSection;
*/}



