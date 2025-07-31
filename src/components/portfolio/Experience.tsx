import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const internships = [
    {
      title: "MathWorks Virtual Internship",
      company: "MathWorks",
      duration: "May 2023 - September 2023",
      location: "Virtual",
      program: "Get started with Artificial Intelligence",
      description: "Completed a comprehensive virtual internship program focused on AI fundamentals and practical applications using MATLAB tools and frameworks.",
      skills: ["Artificial Intelligence", "MATLAB", "Machine Learning", "Data Analysis"],
      type: "Virtual Internship"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/20 dark:from-dark-secondary/40 dark:to-primary/10 transition-colors duration-300">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
            Professional Experience
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical experience through internships and hands-on learning programs
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((exp, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary-glow/5">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="default" className="bg-gradient-to-r from-primary to-primary-glow">
                          {exp.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl lg:text-2xl text-primary mb-2">
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg font-semibold text-primary-glow mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        {exp.program}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-accent/20 text-accent-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;