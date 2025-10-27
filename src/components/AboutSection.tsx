import { motion } from "motion/react";
import { GeometricBackground } from "./GeometricBackground";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen pt-28 pb-16 px-4 md:px-8 z-30 overflow-hidden bg-white"
    >
      {/* Geometric Background */}
      <GeometricBackground />

      {/* Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.1)] border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?auto=format&fit=crop&w=600&q=80"
              alt="Profile"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Badge inside photo */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-md"
            >
              <p className="text-gray-900 text-center font-semibold">
                Yosua Elwitio Malau
              </p>
              <p className="text-gray-600 text-center text-sm mt-1">
                Full Stack Developer & Product Designer
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-4 md:px-8 flex flex-col justify-center space-y-4"
        >
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-tight text-gray-900">
            <span className="text-gray-800">Code</span> with
            clarity,
            <br />
            <span className="text-gray-800">Design</span> with
            empathy.
          </h2>

          <p className="text-gray-600 max-w-md leading-relaxed">
            I build clean, user-centered products that blend
            creativity and precision. My work bridges design and
            development to bring ideas to life efficiently and
            elegantly.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "React",
              "Next.js",
              "Laravel",
              "Figma",
              "Framer",
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}