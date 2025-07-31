import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      specialization: "Specialization in Artificial Intelligence",
      institution: "Karunya Institute of Technology and Sciences",
      year: "2022 – 2026",
      cgpa: "CGPA: 8.59",
      status: "Current"
    },
    {
      degree: "Higher Secondary Education (Class XII)",
      institution: "Bethlahem Matric Higher Secondary School, Karungal",
      year: "Year of Completion: 2022",
      cgpa: "Percentage: 89%",
      board: "Stateboard",
      status: "Completed"
    },
    {
      degree: "Secondary Education (Class X)",
      institution: "Bethlahem Matric Higher Secondary School, Karungal",
      year: "Year of Completion: 2020",
      cgpa: "Percentage: 94.2%",
      board: "Stateboard",
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/20">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
            Academic Journey
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A strong foundation in computer science with consistent academic excellence
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary-glow/5 pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl lg:text-2xl text-primary mb-2">
                        {edu.degree}
                      </CardTitle>
                      {edu.specialization && (
                        <p className="text-lg font-semibold text-primary-glow mb-1">
                          {edu.specialization}
                        </p>
                      )}
                      <p className="text-foreground font-medium">
                        {edu.institution}
                      </p>
                      {edu.board && (
                        <p className="text-sm text-muted-foreground">
                          {edu.board}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <Badge 
                      variant={edu.status === "Current" ? "default" : "secondary"}
                      className="mb-2"
                    >
                      {edu.status}
                    </Badge>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-lg font-semibold px-4 py-2">
                    {edu.cgpa}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;