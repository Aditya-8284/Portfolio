
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Room & House rental Website",
      description: "Our website is designed to help you easily find rooms, flats, and apartments at the best prices, without any confusion or extra charges. Whether you're a student searching for a hostel room, a working professional looking for a shared flat, or a family in need of a full apartment — we make it simple for everyone.",
      technologies: ["HTML", "CSS", "Javascript", "React", "PHP",],
      liveLink: "#",
      githubLink: "#",
      image: "https://iili.io/Fz3Ka14.png"
    },
    {
      title: "Video Editor Website",
      description: "This project is a smart and easy-to-use website built to help users find the best video editors for their needs. Whether someone wants to edit a YouTube video, a short film, a wedding video, or content for social media — this platform connects them with the right editor quickly and easily.",
      technologies: ["HTML", "CSS", "Javascript","PHP"],
      liveLink: "#",
      githubLink: "#",
      image: "https://iili.io/FzFfnsa.png"
    },
    {
      title: "Portfolio Dashboard",
      description: "This is a responsive and modern portfolio website built to showcase my skills, projects, and experience as a web developer. It acts as my digital resume, helping visitors learn more about me, view my work, and get in touch easily.",
      technologies: ["HTML","CSS","JavaScript", "React", "Node.js", "TypeScript"],
      liveLink: "#",
      githubLink: "#",
      image: "https://iili.io/FzFPSKG.png"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground">
            Some of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
