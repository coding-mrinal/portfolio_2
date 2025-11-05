import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const allProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with admin dashboard',
      image: '/images/project1.jpg',
      tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind']
    },
    {
      id: 2,
      title: 'Social Media App',
      description: 'Real-time social networking application',
      image: '/images/project2.jpg',
      tags: ['React', 'Firebase', 'Redux']
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with forecast and maps',
      image: '/images/project3.jpg',
      tags: ['JavaScript', 'API', 'CSS']
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'Content management system for bloggers',
      image: '/images/project4.jpg',
      tags: ['Next.js', 'Markdown', 'Prisma']
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Track workouts and nutrition goals',
      image: '/images/project5.jpg',
      tags: ['React Native', 'Node.js', 'MongoDB']
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time messaging with video calls',
      image: '/images/project6.jpg',
      tags: ['Socket.io', 'WebRTC', 'Express']
    }
  ]

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 fade-in">My Projects</h1>
        <p className="text-xl text-gray-600 mb-12">
          Here are some of my recent works
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}