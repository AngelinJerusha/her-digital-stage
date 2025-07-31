import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Brain, Cloud, Code2, Globe } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Azure: Azure Data Fundamentals",
      provider: "Microsoft",
      icon: Cloud,
      category: "Cloud Computing"
    },
    {
      title: "MathWorks MATLAB",
      description: "Image Processing, Signal Processing, Machine Learning, Deep Learning, and Onramps",
      provider: "MathWorks",
      icon: Brain,
      category: "Data Science"
    },
    {
      title: "Cisco: IoT Fundamentals – Connected Things", 
      provider: "Cisco",
      icon: Globe,
      category: "Internet of Things"
    },
    {
      title: "SoloLearn: Web Development",
      provider: "SoloLearn",
      icon: Code2,
      category: "Web Development"
    },
    {
      title: "InfoSys Springboard",
      description: "Software Engineering, Java Programming Fundamentals",
      provider: "InfoSys",
      icon: Code2,
      category: "Programming"
    },
    {
      title: "Great Learning",
      description: "UI/UX for Beginners, Computer Architecture – Digital Components",
      provider: "Great Learning",
      icon: Award,
      category: "Design & Architecture"
    }
  ];

  const nptlCertifications = [
    {
      title: "Deep Learning",
      status: "Completed"
    },
    {
      title: "Cybersecurity and Privacy",
      status: "Completed" 
    },
    {
      title: "Human-Computer Interaction",
      status: "Completed"
    },
    {
      title: "Google Cloud: Cloud Computing Foundations",
      status: "Completed"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Cloud Computing": "bg-blue-100 text-blue-800",
      "Data Science": "bg-purple-100 text-purple-800", 
      "Internet of Things": "bg-green-100 text-green-800",
      "Web Development": "bg-orange-100 text-orange-800",
      "Programming": "bg-red-100 text-red-800",
      "Design & Architecture": "bg-indigo-100 text-indigo-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/10 dark:from-dark/30 dark:to-primary/15 transition-colors duration-300">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
            Professional Development
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and specialized courses
          </p>
        </div>

        {/* Industry Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Industry Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-4 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <Badge className={`mb-3 ${getCategoryColor(cert.category)}`}>
                    {cert.category}
                  </Badge>
                  <CardTitle className="text-lg text-primary leading-tight">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {cert.description && (
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                  <Badge variant="outline" className="font-medium">
                    {cert.provider}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* NPTEL Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">NPTEL Certifications</h3>
          <Card className="border-0 shadow-elegant">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary-glow/5 text-center">
              <div className="mx-auto p-4 bg-primary/10 rounded-lg w-fit mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary">
                National Programme on Technology Enhanced Learning
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Advanced courses from premier Indian institutions
              </p>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {nptlCertifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-medium">{cert.title}</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {cert.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;