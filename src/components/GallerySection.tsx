import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, MapPin, Calendar, Briefcase, MousePointer2 } from "lucide-react";
import { GeometricBackground } from "./GeometricBackground";

// Experience journey data
const experiences = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1080&q=80",
    company: "Ideas Lab",
    role: "Web Developer",
    location: "Tangerang, Indonesia",
    duration: "Jan 2025 – Present",
    year: "2025",
    story:
      "At Ideas Lab, I develop and maintain responsive digital event platforms, ensuring high performance and uptime. Collaborating closely with clients, I align platform features with event objectives while optimizing usability and accessibility for participants.",
    achievement:
      "Delivered two large-scale event platforms (IEEE-13th ICOT & HIS 2025) with 100% uptime and positive client feedback.",
    position: { x: -260, y: -100 },
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1080&q=80",
    company: "PT Sumber Alfaria Trijaya (Alfamart)",
    role: "Personnel (HR Data Analyst)",
    location: "Tangerang, Indonesia",
    duration: "May 2025 – Aug 2025",
    year: "2025",
    story:
      "Handled workforce data from over 120,000 employees to support HR analytics and decision-making. I streamlined workflows and automated repetitive processes to improve efficiency and reduce manual workloads.",
    achievement:
      "Automated HR document workflows with UiPath, saving ~4 hours daily, and built dashboards for data-driven HR analysis.",
    position: { x: 240, y: -150 },
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1080&q=80",
    company: "PT Indonusa Telemedia (Transvision)",
    role: "Project Management Office Intern",
    location: "Jakarta, Indonesia",
    duration: "Feb 2024 – May 2025",
    year: "2024–2025",
    story:
      "Joined the PMO team to conduct technical audits and heuristic evaluations of internal systems. Collaborated with IT and product teams to translate user feedback into actionable improvements within the product roadmap.",
    achievement:
      "Improved internal system usability by identifying key UX bottlenecks and proposing enhancement plans.",
    position: { x: -310, y: 70 },
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=1080&q=80",
    company: "National Movement of 1000 Digital Startups",
    role: "Product Development Member",
    location: "Jakarta, Indonesia",
    duration: "Feb 2024 – May 2025",
    year: "2024–2025",
    story:
      "Collaborated in a cross-functional startup team to design and validate a digital product prototype. I worked on product strategy, research, and go-to-market planning while testing growth and usability ideas.",
    achievement:
      "Co-developed and validated a startup prototype (ConcertKey) through user research and iterative testing.",
    position: { x: 280, y: 100 },
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1080&q=80",
    company: "GMS Church",
    role: "UI/UX Designer (Volunteer)",
    location: "Jakarta, Indonesia",
    duration: "Feb 2024 – Present",
    year: "2024–Present",
    story:
      "Contributed as a UI/UX Designer to improve digital experiences for church platforms. Focused on creating user-centered interfaces and maintaining consistency between design and implementation.",
    achievement:
      "Developed design systems and prototypes for internal digital platforms used by church communities.",
    position: { x: 60, y: -230 },
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1080&q=80",
    company: "Gunadarma University",
    role: "Information Systems Student",
    location: "Depok, Indonesia",
    duration: "Sep 2021 – Sep 2025",
    year: "2021–2025",
    story:
      "Pursuing a Bachelor’s degree in Information Systems while actively engaging in hackathons, software bootcamps, and startup programs. Strengthened both technical and product design foundations throughout academic projects.",
    achievement:
      "Graduated with GPA 3.52/4.00, recognized for best individual project in MSIB Batch 7 (SoftUni Indonesia).",
    position: { x: -180, y: 200 },
  },
];

export function GallerySection() {
  const [selectedExperience, setSelectedExperience] = useState<
    (typeof experiences)[0] | null
  >(null);
  
  // Auto-rotating cursor animation
  const [cursorIndex, setCursorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorIndex((prev) => (prev + 1) % experiences.length);
    }, 2500); // Change photo every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="gallery"
      className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center py-10 md:py-32"
    >
      {/* Geometric Background */}
      <GeometricBackground />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8">
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
          <h2
            className="text-5xl md:text-7xl lg:text-8xl mb-6"
            style={{ fontWeight: 900 }}
          >
            <span className="block text-black">Experience</span>
          </h2>
          <p className="text-black/60 text-lg md:text-xl max-w-2xl mx-auto">
            Every place taught me something valuable
            <br className="hidden md:block" />
            <span className="text-black/40">
              Click to explore each journey
            </span>
          </p>
        </motion.div>

        {/* World with Photos */}
        <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
          {/* Central World Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]"
          >
            {/* Globe */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 400"
              className="opacity-40"
              style={{
                filter:
                  "drop-shadow(0 20px 40px rgba(0,0,0,0.1))",
              }}
            >
              {/* Main circle */}
              <circle
                cx="200"
                cy="200"
                r="190"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />

              {/* Latitude lines (horizontal) */}
              {[30, 60, 90, 120, 150].map((y, i) => {
                const centerY = 200;
                const offset = (y - 90) * 2.1;
                const ry = Math.sqrt(
                  190 * 190 - offset * offset,
                );
                return (
                  <motion.ellipse
                    key={`lat-${i}`}
                    cx="200"
                    cy={centerY + offset}
                    rx="190"
                    ry={ry}
                    fill="none"
                    stroke="black"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5 + i * 0.1,
                    }}
                  />
                );
              })}

              {/* Longitude lines (vertical) */}
              {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map(
                (angle, i) => (
                  <motion.ellipse
                    key={`lon-${i}`}
                    cx="200"
                    cy="200"
                    rx="50"
                    ry="190"
                    fill="none"
                    stroke="black"
                    strokeWidth="1"
                    transform={`rotate(${angle} 200 200)`}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.8 + i * 0.05,
                    }}
                  />
                ),
              )}

              {/* Continents outline - simplified */}
              {/* Asia */}
              <motion.path
                d="M 280 150 Q 300 140, 310 155 Q 315 170, 305 180 Q 290 185, 280 175 Q 275 165, 280 150 Z"
                fill="black"
                fillOpacity="0.15"
                stroke="black"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
              />

              {/* Europe */}
              <motion.path
                d="M 210 140 Q 220 135, 230 142 Q 235 150, 228 158 Q 218 160, 210 155 Q 205 148, 210 140 Z"
                fill="black"
                fillOpacity="0.15"
                stroke="black"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 1.7 }}
              />

              {/* Africa */}
              <motion.path
                d="M 195 180 Q 205 175, 215 185 Q 218 200, 210 220 Q 200 230, 190 220 Q 185 205, 195 180 Z"
                fill="black"
                fillOpacity="0.15"
                stroke="black"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 1.9 }}
              />

              {/* Americas */}
              <motion.path
                d="M 120 160 Q 130 155, 138 165 Q 140 180, 135 200 Q 128 215, 118 210 Q 112 195, 115 180 Q 115 170, 120 160 Z"
                fill="black"
                fillOpacity="0.15"
                stroke="black"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 2.1 }}
              />

              {/* Connection dots */}
              {experiences.map((exp, i) => {
                const angle = (i / experiences.length) * 360;
                const rad = (angle * Math.PI) / 180;
                const cx = 200 + Math.cos(rad) * 190;
                const cy = 200 + Math.sin(rad) * 190;
                return (
                  <motion.circle
                    key={`globe-dot-${i}`}
                    cx={cx}
                    cy={cy}
                    r="3"
                    fill="black"
                    fillOpacity="0.4"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{
                      duration: 0.5,
                      delay: 2.5 + i * 0.1,
                    }}
                  />
                );
              })}
            </svg>

            {/* Center glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-black/5 blur-2xl"
            />
          </motion.div>

          {/* Animated Cursor - moves between photos */}
          <motion.div
            className="absolute top-1/2 left-1/2 pointer-events-none z-50"
            animate={{
              x: experiences[cursorIndex].position.x - 12,
              y: experiences[cursorIndex].position.y - 12,
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration: 0.8,
            }}
          >
            {/* Cursor hand pointer */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="relative"
            >
              <MousePointer2 
                className="w-8 h-8 text-black drop-shadow-lg" 
                fill="white"
                strokeWidth={1.5}
              />
              
              {/* Cursor glow */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-2 bg-blue-400/40 rounded-full blur-md -z-10"
              />
            </motion.div>
          </motion.div>

          {/* Floating Photos around World */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: exp.position.x,
                y: exp.position.y,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8 + index * 0.15,
                type: "spring",
                damping: 15,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.button
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedExperience(exp)}
                className="relative group"
                animate={cursorIndex === index ? { scale: 1.15, y: -5 } : { scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  width: "100px",
                  height: "100px",
                }}
              >
                {/* Photo */}
                <motion.div 
                  className="relative w-full h-full rounded-lg overflow-hidden bg-white shadow-xl"
                  animate={{
                    borderColor: cursorIndex === index ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.1)",
                    borderWidth: cursorIndex === index ? "3px" : "2px",
                  }}
                  style={{
                    border: "2px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <ImageWithFallback
                    src={exp.src}
                    alt={exp.company}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      cursorIndex === index ? "grayscale-0 brightness-110" : "grayscale group-hover:grayscale-0"
                    }`}
                  />

                  {/* Year badge */}
                  <div
                    className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-white text-xs"
                    style={{ fontWeight: 600 }}
                  >
                    {exp.year}
                  </div>

                  {/* Hover overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300"
                    animate={{
                      opacity: cursorIndex === index ? 0.7 : 0,
                    }}
                  />

                  {/* Hover title hint */}
                  <div className="absolute inset-x-0 bottom-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p
                      className="text-white text-xs text-center drop-shadow-lg"
                      style={{ fontWeight: 600 }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Glow effect when cursor is on this photo */}
                  <AnimatePresence>
                    {cursorIndex === index && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0.8] }}
                          exit={{ opacity: 0 }}
                          className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-lg blur-md -z-10"
                        />
                        
                        {/* Ripple effect on cursor visit */}
                        <motion.div
                          initial={{ scale: 0.8, opacity: 1 }}
                          animate={{ scale: 2, opacity: 0 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="absolute inset-0 border-2 border-blue-400 rounded-lg"
                        />
                      </>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Connection line to globe center */}
                <svg
                  className="absolute top-1/2 left-1/2 pointer-events-none"
                  style={{
                    width: Math.abs(exp.position.x) + 100,
                    height: Math.abs(exp.position.y) + 100,
                    transform: `translate(-50%, -50%)`,
                  }}
                >
                  <motion.line
                    x1={
                      exp.position.x > 0
                        ? 0
                        : Math.abs(exp.position.x) + 50
                    }
                    y1={
                      exp.position.y > 0
                        ? 0
                        : Math.abs(exp.position.y) + 50
                    }
                    x2={
                      exp.position.x > 0
                        ? Math.abs(exp.position.x) + 50
                        : 0
                    }
                    y2={
                      exp.position.y > 0
                        ? Math.abs(exp.position.y) + 50
                        : 0
                    }
                    stroke="black"
                    strokeWidth="1"
                    strokeOpacity="0.15"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1,
                      delay: 1 + index * 0.15,
                    }}
                  />
                </svg>

                {/* Pin point */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full shadow-lg"
                />
              </motion.button>
            </motion.div>
          ))}

          {/* Floating particles effect - "kresek-kresek" */}
          {[...Array(40)].map((_, i) => {
            const angle = Math.random() * Math.PI * 2;
            const distance = 250 + Math.random() * 200;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            const size = Math.random() * 3 + 1;

            return (
              <motion.div
                key={`particle-${i}`}
                className="absolute top-1/2 left-1/2 bg-black/20 rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  x: [0, x * 0.5, x, x * 1.2],
                  y: [0, y * 0.5, y, y * 1.2],
                  opacity: [0, 0.4, 0.3, 0],
                  scale: [0, 1, 1, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>
        
        {/* Cursor Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="mt-8 flex justify-center items-center gap-2"
        >
          <p className="text-black/40 text-xs mr-2">Auto-exploring</p>
          {experiences.map((_, index) => (
            <motion.div
              key={`indicator-${index}`}
              className="relative"
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-black/20"
                animate={{
                  scale: cursorIndex === index ? 1.5 : 1,
                  backgroundColor: cursorIndex === index ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              />
              {cursorIndex === index && (
                <motion.div
                  layoutId="cursor-indicator"
                  className="absolute inset-0 rounded-full bg-blue-400/40"
                  animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExperience(null)}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full bg-white rounded-3xl overflow-hidden border border-black/10 shadow-2xl"
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedExperience(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/5 backdrop-blur-md rounded-full flex items-center justify-center text-black hover:bg-black/10 transition-colors"
              >
                <X size={24} />
              </motion.button>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-[3/4] md:aspect-auto bg-gray-100">
                  <ImageWithFallback
                    src={selectedExperience.src}
                    alt={selectedExperience.company}
                    className="w-full h-full object-cover"
                  />
                  {/* Year badge overlay */}
                  <div className="absolute top-8 left-8 bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p
                      className="text-white text-sm"
                      style={{ fontWeight: 600 }}
                    >
                      {selectedExperience.year}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-2 mb-6"
                    >
                      <MapPin
                        size={18}
                        className="text-black/40"
                      />
                      <p
                        className="text-black/60 uppercase tracking-[0.2em]"
                        style={{ fontWeight: 600 }}
                      >
                        {selectedExperience.location}
                      </p>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl md:text-5xl text-black mb-3"
                      style={{ fontWeight: 900 }}
                    >
                      {selectedExperience.company}
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-2 text-black/60 mb-2"
                    >
                      <Briefcase size={16} />
                      <p style={{ fontWeight: 600 }}>
                        {selectedExperience.role}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-2 text-black/40"
                    >
                      <Calendar size={16} />
                      <p>{selectedExperience.duration}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="h-[1px] bg-black/10"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-black/70 leading-relaxed mb-4">
                      {selectedExperience.story}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pt-4 bg-black/5 rounded-xl p-4"
                  >
                    <p
                      className="text-black/40 text-sm mb-2"
                      style={{ fontWeight: 600 }}
                    >
                      KEY ACHIEVEMENT
                    </p>
                    <p className="text-black/70">
                      {selectedExperience.achievement}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}