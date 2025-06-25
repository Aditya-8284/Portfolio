
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 70 },
        { name: "JavaScript", level: 55 },
       
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", level: 60 },
        { name: "MySql", level: 60 },
        { name: "Python", level: 50 },
        { name: "java", level: 40 },
      ]
    },
    {
      title: "Tools & Others Software",
      skills: [
      
        { name: "VS Code", level: 70 },
        { name: "Adobe Photoshop", level: 70 },
          { name: "Git/GitHub", level: 60 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills</h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I've been working with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
