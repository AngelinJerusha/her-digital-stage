import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Target, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Smart India Hackathon 2024",
      description: "Won First Prize in the SIH Finals 2024 under the problem statement SIH1744, Creating a Cyber Triage tool for Cyber Forensic Investigation, held at NIET, Noida.",
      icon: Trophy,
      type: "First Prize",
      year: "2024"
    },
    {
      title: "Kavach Hackathon 2023",
      description: "Selected as a Grand Finalist for the problem statement KVH-018, Plug and Play System Security Audit Tool, held at Centurion University, Odisha.",
      icon: Award,
      type: "Grand Finalist",
      year: "2023"
    },
    {
      title: "Smart India Hackathon 2023",
      description: "Selected as a Grand Finalist for the problem statement SIH-1388, Detection of Malware Trojans in software used in power sectors, held at GIET University, Odisha.",
      icon: Target,
      type: "Grand Finalist", 
      year: "2023"
    }
  ];

  const competitions = [
    {
      title: "Hashes Over Roses 2.0",
      description: "Capture The Flag, Mindkraft 2025, Karunya Institute of Technology and Sciences, Coimbatore",
      achievement: "Participated in the National Level Techno-Management Fest, held on 21–22 March 2025",
      placement: "Secured 4th place as part of a team in the Capture The Flag (CTF) challenge"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-accent/10">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium px-4 py-2">
            Recognition & Awards
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in competitive programming and cybersecurity challenges
          </p>
        </div>

        {/* Major Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-4 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="default" className="bg-gradient-to-r from-primary to-primary-glow">
                    {achievement.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{achievement.year}</span>
                </div>
                <CardTitle className="text-lg text-primary leading-tight">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Competitions */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 text-primary">Competitions</h3>
            <p className="text-muted-foreground">Competitive programming and cybersecurity challenges</p>
          </div>
          
          {competitions.map((comp, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-accent/10 to-secondary/10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary mb-2">
                        {comp.title}
                      </CardTitle>
                      <p className="text-foreground font-medium">
                        {comp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">{comp.achievement}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">{comp.placement}</span>
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

export default Achievements;