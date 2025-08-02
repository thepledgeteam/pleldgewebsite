import { Users, GraduationCap, BookOpen, Award } from "lucide-react";
import medicalIconsPattern from "@/assets/medical-icons-pattern.jpg";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Students Guided",
      description: "Future physicians we've helped"
    },
    {
      icon: GraduationCap,
      number: "95%",
      label: "Success Rate",
      description: "Acceptance into medical school"
    },
    {
      icon: BookOpen,
      number: "10+",
      label: "Medical Schools",
      description: "Where our students got accepted"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Collective mentoring expertise"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${medicalIconsPattern})` }}
      ></div>
      <div className="absolute inset-0 bg-primary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Making a real difference in medical education accessibility
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center feature-card">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default StatsSection;
