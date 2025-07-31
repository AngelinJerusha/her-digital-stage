import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Java", level: "Main Language" },
    { name: "Python", level: "Intermediate" },
    { name: "C", level: "Beginner" },
    { name: "JavaScript", level: "Beginner" },
    { name: "Web Development (HTML, CSS)", level: "Intermediate" },
    { name: "ReactJS", level: "Beginner" },
    { name: "SQL", level: "Intermediate" },
    { name: "MongoDB, Postman", level: "Beginner" }
  ];

  const softSkills = [
    "Problem-solving",
    "Critical thinking", 
    "Team collaboration",
    "Communication skills",
    "Quick learner"
  ];

  const currentLearning = [
    "Advanced Java",
    "JDBC",
    "REST Assured",
    "Selenium",
    "In-depth SQL concepts"
  ];

  return (
    <section className="py-20">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
            Expertise & Abilities
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Skills & Abilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning technical expertise and essential soft skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-4 bg-primary/10 rounded-lg w-fit mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-4 bg-primary-glow/10 rounded-lg w-fit mb-4">
                <Users className="w-8 h-8 text-primary-glow" />
              </div>
              <CardTitle className="text-xl text-primary-glow">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Current Learning */}
          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 md:col-span-2 lg:col-span-1">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto p-4 bg-accent/20 rounded-lg w-fit mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">Currently Learning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Expanding knowledge in these areas
              </p>
              {currentLearning.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Lightbulb className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;