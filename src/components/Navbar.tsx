import { motion } from 'motion/react';

export function Navbar() {
  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div 
        className="flex items-center gap-1 px-2 py-2 rounded-full border border-black/10"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: 'rgba(255, 255, 255, 0.7)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}
      >
        {navItems.map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              index === 0 
                ? 'bg-black text-white' 
                : 'text-black hover:bg-black/5'
            }`}
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
