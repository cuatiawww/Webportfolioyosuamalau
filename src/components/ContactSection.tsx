import { motion } from 'motion/react';
import { Mail, MessageCircle } from 'lucide-react';
import { GeometricBackground } from './GeometricBackground';

export default function ContactSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white flex items-center justify-center py-20 px-4">
      
      {/* Geometric Background */}
      <GeometricBackground />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 mb-6"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">Let's Connect</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          Get in Touch
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-black/60 mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind or just want to chat? Feel free to reach out. 
          I'm always open to discussing new opportunities and collaborations.
        </motion.p>

        {/* 3D Button - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          {/* Primary 3D Button - Email */}
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ y: -2, scale: 0.98 }}
            className="group relative"
          >
            {/* Button Base (3D Effect) */}
            <div className="absolute inset-0 bg-black rounded-2xl transform translate-y-2 group-hover:translate-y-1 transition-transform duration-200" />
            
            {/* Button Shadow Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 rounded-2xl transform translate-y-4 blur-md group-hover:translate-y-2 transition-transform duration-200" />
            
            {/* Button Top Layer */}
            <div className="relative bg-gradient-to-b from-gray-900 to-black text-white px-8 py-4 rounded-2xl border-2 border-gray-700 group-hover:border-gray-600 transition-all duration-200 flex items-center gap-3 min-w-[200px] justify-center">
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl" />
            </div>
          </motion.a>
        </motion.div>

        {/* Social Links / Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-black/10"
        >
          <p className="text-sm text-black/40 mb-4">
            Or find me on
          </p>
          <div className="flex gap-6 justify-center">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative 3D Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] right-[5%] w-16 h-16 hidden lg:block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl transform rotate-12 blur-sm" />
            <div className="relative bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-xl border border-purple-300/30 w-16 h-16" />
          </div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-[15%] left-[8%] w-20 h-20 hidden lg:block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl transform -rotate-6 blur-sm" />
            <div className="relative bg-gradient-to-br from-blue-300/40 to-cyan-300/40 rounded-2xl border border-blue-300/30 w-20 h-20" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
