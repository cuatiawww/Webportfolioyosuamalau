import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Folder } from "lucide-react";
import { GeometricBackground } from "./GeometricBackground";

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web",
    description: "Modern e-commerce platform with real-time inventory management and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTU0ODg5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "Tailwind", "Node.js"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Web",
    description: "Collaborative task management with real-time updates and team productivity analytics.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGFwcHxlbnwxfHx8fDE3NjE1NDg4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Mobile Banking UI",
    category: "Design",
    description: "Intuitive banking interface with focus on accessibility and user experience.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aXxlbnwxfHx8fDE3NjE1NDg4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Figma", "UI/UX", "Prototyping"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "AI Content Generator",
    category: "Web",
    description: "AI-powered content creation tool with smart suggestions and SEO optimization.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNTQ4ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "OpenAI", "FastAPI"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    category: "Mobile",
    description: "Cross-platform fitness app with workout plans, nutrition tracking, and progress analytics.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwfGVufDF8fHx8MTc2MTU0ODg5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "Firebase", "HealthKit"],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "Design",
    description: "Minimalist portfolio design system with dark mode and smooth animations.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTU0ODg5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Figma", "Framer", "Design System"],
    link: "#",
    github: "#",
  },
];

// Visual Design Works - dengan berbagai ukuran
const visualDesigns = [
  {
    id: 1,
    title: "TENNIS Sports Platform",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBzcG9ydHN8ZW58MXx8fHwxNzYxNTQ4ODkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    width: 600, // varying widths
  },
  {
    id: 2,
    title: "By Grace Wedding Planner",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGxhbm5lcnxlbnwxfHx8fDE3NjE1NDg4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    width: 500,
  },
  {
    id: 3,
    title: "BROKENFREE Brand Identity",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5fGVufDF8fHx8MTc2MTU0ODg5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    width: 700,
  },
  {
    id: 4,
    title: "Coffee Shop Branding",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wfGVufDF8fHx8MTc2MTU0ODg5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    width: 550,
  },
  {
    id: 5,
    title: "Minimalist Portfolio Design",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWdufGVufDF8fHx8MTc2MTU0ODg5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    width: 650,
  },
  {
    id: 6,
    title: "Fashion Brand Identity",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmR8ZW58MXx8fHwxNzYxNTQ4ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    width: 600,
  },
];

// Second row designs - different content
const visualDesigns2 = [
  {
    id: 7,
    title: "Restaurant Menu Design",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZHxlbnwxfHx8fDE3NjE1NDg4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    width: 580,
  },
  {
    id: 8,
    title: "Tech Startup Branding",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cHxlbnwxfHx8fDE3NjE1NDg4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    width: 680,
  },
  {
    id: 9,
    title: "Magazine Layout",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGxheW91dHxlbnwxfHx8fDE3NjE1NDg4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    width: 520,
  },
  {
    id: 10,
    title: "Music Festival Poster",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsfGVufDF8fHx8MTc2MTU0ODg5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    width: 620,
  },
  {
    id: 11,
    title: "E-learning Platform",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVhcm5pbmd8ZW58MXx8fHwxNzYxNTQ4ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    width: 560,
  },
  {
    id: 12,
    title: "Corporate Identity",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MXx8fHwxNzYxNTQ4ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    width: 640,
  },
];

export function ProjectsSection() {

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-28 px-4 md:px-8 bg-white overflow-hidden"
    >
      {/* Geometric Background */}
      <GeometricBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[2px] bg-black mx-auto mb-6"
          />
          <h2 className="text-5xl md:text-7xl lg:text-8xl mb-6" style={{ fontWeight: 900 }}>
            <span className="block text-black">Projects</span>
          </h2>
          <p className="text-black/60 text-lg md:text-xl max-w-2xl mx-auto">
            Selected works that showcase my skills<br className="hidden md:block" />
            <span className="text-black/40">Building digital experiences that matter</span>
          </p>
        </motion.div>

        {/* Projects Grid - Semua card sama ukuran */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white border border-black/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Links on hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-black hover:bg-white transition-colors shadow-xl"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-black hover:bg-white transition-colors shadow-xl"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <Folder size={16} className="text-black/40" />
                    <span className="text-black/40 text-sm uppercase tracking-wider" style={{ fontWeight: 600 }}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl text-black mb-2 group-hover:text-black/80 transition-colors" style={{ fontWeight: 700 }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black/60 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-black/5 text-black/60 text-xs rounded-full border border-black/10"
                        style={{ fontWeight: 600 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "Wanna see more?" Subsection */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32"
        >
          {/* Subsection Header */}
          <div className="mb-12">
            <h3 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-black" style={{ fontWeight: 900 }}>
              Wanna see more?
            </h3>
            <p className="text-black/60 text-lg">
              Here are some other cool visual design I have worked on!
            </p>
          </div>

          {/* Continuous Auto-Scroll Gallery */}
          <div className="relative overflow-hidden">
            {/* Infinite scrolling container */}
            <motion.div
              animate={{
                x: [0, -1 * visualDesigns.reduce((acc, d) => acc + d.width + 24, 0)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-6"
            >
              {/* Duplicate designs for seamless loop */}
              {[...visualDesigns, ...visualDesigns].map((design, index) => (
                <motion.div
                  key={`${design.id}-${index}`}
                  style={{ width: design.width }}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative h-80 bg-gray-100 rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500">
                    <ImageWithFallback
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay dengan Title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <h4 className="text-white text-xl" style={{ fontWeight: 700 }}>
                        {design.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
          </div>

          {/* Second Row - Scroll Opposite Direction */}
          <div className="relative overflow-hidden mt-6">
            {/* Infinite scrolling container - REVERSE direction */}
            <motion.div
              animate={{
                x: [-1 * visualDesigns2.reduce((acc, d) => acc + d.width + 24, 0), 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
              className="flex gap-6"
            >
              {/* Duplicate designs for seamless loop */}
              {[...visualDesigns2, ...visualDesigns2].map((design, index) => (
                <motion.div
                  key={`${design.id}-${index}`}
                  style={{ width: design.width }}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative h-80 bg-gray-100 rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500">
                    <ImageWithFallback
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay dengan Title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <h4 className="text-white text-xl" style={{ fontWeight: 700 }}>
                        {design.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
