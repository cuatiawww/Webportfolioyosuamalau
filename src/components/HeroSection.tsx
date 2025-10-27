import { motion } from "motion/react";
import profileImage from "figma:asset/d1fa67ef1de19977489dd8c791ebb06e19174e02.png";
import svgPaths from "../imports/svg-0z24vbr82d";
import { GeometricBackground } from "./GeometricBackground";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-white overflow-visible flex items-center justify-center pb-20"
    >
      {/* Geometric Background */}
      <GeometricBackground />

      {/* Scrolling background text - Marquee (3 layers) - Tidak menumpuk, arah berbeda */}

      {/* Top Marquee - "I'm Full Stack Developer" - GESER KIRI */}
      <div className="absolute top-[15%] left-0 right-0 flex items-start justify-center select-none pointer-events-none overflow-hidden z-[1]">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 whitespace-nowrap"
        >
          {[...Array(3)].map((_, i) => (
            <p
              key={i}
              className="text-[rgba(0,0,0,0.06)] text-[clamp(5rem,12vw,11rem)] uppercase tracking-[-0.02em]"
              style={{ fontWeight: 500, lineHeight: 1 }}
            >
              I'm Full Stack Developer
            </p>
          ))}
        </motion.div>
      </div>

      {/* Middle Marquee - "Yosua Elwistio Malau" - GESER KANAN */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-center select-none pointer-events-none overflow-hidden z-[1]">
        <motion.div
          animate={{ x: ["-33.33%", "0%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 whitespace-nowrap"
        >
          {[...Array(3)].map((_, i) => (
            <p
              key={i}
              className="text-[rgba(0,0,0,0.25)] text-[clamp(5rem,12vw,11rem)] uppercase tracking-[-0.02em]"
              style={{ fontWeight: 900, lineHeight: 1 }}
            >
              Yosua Elwistio Malau
            </p>
          ))}
        </motion.div>
      </div>

      {/* Bottom Marquee - "I'm Product Designer" - GESER KIRI */}
      <div className="absolute bottom-[15%] left-0 right-0 flex items-end justify-center select-none pointer-events-none overflow-hidden z-[1]">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 whitespace-nowrap"
        >
          {[...Array(3)].map((_, i) => (
            <p
              key={i}
              className="text-[rgba(0,0,0,0.06)] text-[clamp(5rem,12vw,11rem)] uppercase tracking-[-0.02em]"
              style={{ fontWeight: 500, lineHeight: 1 }}
            >
              I'm Product Designer
            </p>
          ))}
        </motion.div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative flex items-center justify-center h-full">
          {/* Photo in center */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10 w-full max-w-[550px] h-auto aspect-[11/16]"
          >
            <img
              src={profileImage}
              alt="Yosua Elwistio Malau"
              className="w-full h-full object-contain object-bottom"
              style={{
                filter:
                  "drop-shadow(0px 25px 50px rgba(0, 0, 0, 0.15))",
              }}
            />

            {/* Realistic Sticky Notes - 6 Around Photo, No Overlap */}

            {/* 1. PINK - Career Goal (TOP RIGHT) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, rotate: 6 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{
                scale: 1.02,
                rotate: 4,
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="absolute top-[10%] -right-2 sm:-right-6 md:-right-10 w-[125px] sm:w-[145px] md:w-[160px] cursor-pointer z-30"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <ellipse
                    cx="10"
                    cy="18"
                    rx="2.5"
                    ry="0.8"
                    fill="rgba(0,0,0,0.15)"
                  />
                  <circle
                    cx="10"
                    cy="3"
                    r="2.5"
                    fill="#BE185D"
                  />
                  <circle
                    cx="10"
                    cy="3"
                    r="1.8"
                    fill="#DB2777"
                  />
                  <rect
                    x="9.5"
                    y="3"
                    width="1"
                    height="12"
                    fill="#888"
                    opacity="0.5"
                  />
                </svg>
              </div>

              <div
                className="relative pt-5 p-3 md:p-4"
                style={{
                  background: "#FCE7F3",
                  boxShadow: `0 1px 2px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.08)`,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p2)' opacity='0.18'/%3E%3C/svg%3E")`,
                  backgroundSize: "180px 180px",
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/5 blur-sm rounded-full" />
                <p
                  className="text-gray-800 mb-2 leading-snug"
                  style={{
                    fontSize: "0.72rem",
                    fontFamily: '"Segoe UI", system-ui',
                  }}
                >
                  Secure a fulfilling full-time job at a great
                  company by 2026.
                </p>
                <p
                  className="text-pink-700 flex items-center gap-1"
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 600,
                  }}
                >
                  Career Goal 🎯
                </p>
              </div>
            </motion.div>

            {/* 2. MINT GREEN - Vision (RIGHT MIDDLE) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{
                scale: 1.02,
                rotate: -1,
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="absolute top-[38%] -right-2 sm:-right-6 md:-right-12 lg:-right-16 w-[130px] sm:w-[150px] md:w-[165px] cursor-pointer z-30"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <ellipse
                    cx="10"
                    cy="18"
                    rx="2.5"
                    ry="0.8"
                    fill="rgba(0,0,0,0.15)"
                  />
                  <circle
                    cx="10"
                    cy="3"
                    r="2.5"
                    fill="#047857"
                  />
                  <circle
                    cx="10"
                    cy="3"
                    r="1.8"
                    fill="#059669"
                  />
                  <rect
                    x="9.5"
                    y="3"
                    width="1"
                    height="12"
                    fill="#888"
                    opacity="0.5"
                  />
                </svg>
              </div>

              <div
                className="relative pt-5 p-3 md:p-4"
                style={{
                  background: "#D1FAE5",
                  boxShadow: `0 1px 2px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.08)`,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p3)' opacity='0.18'/%3E%3C/svg%3E")`,
                  backgroundSize: "180px 180px",
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/5 blur-sm rounded-full" />
                <p
                  className="text-gray-800 mb-2 leading-snug"
                  style={{
                    fontSize: "0.74rem",
                    fontFamily: '"Segoe UI", system-ui',
                  }}
                >
                  Build meaningful digital products that truly
                  help people.
                </p>
                <p
                  className="text-emerald-700 flex items-center gap-1"
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 600,
                  }}
                >
                  Vision 💡
                </p>
              </div>
            </motion.div>

            {/* 3. SKY BLUE - Pengen Jadi CTO (BOTTOM LEFT) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 4 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileHover={{
                scale: 1.02,
                rotate: 2,
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="absolute bottom-[18%] -left-2 sm:-left-6 md:-left-10 lg:-left-14 w-[120px] sm:w-[135px] md:w-[145px] cursor-pointer z-30"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <ellipse
                    cx="10"
                    cy="18"
                    rx="2.5"
                    ry="0.8"
                    fill="rgba(0,0,0,0.15)"
                  />
                  <circle
                    cx="10"
                    cy="3"
                    r="2.5"
                    fill="#0369A1"
                  />
                  <circle
                    cx="10"
                    cy="3"
                    r="1.8"
                    fill="#0284C7"
                  />
                  <rect
                    x="9.5"
                    y="3"
                    width="1"
                    height="12"
                    fill="#888"
                    opacity="0.5"
                  />
                </svg>
              </div>

              <div
                className="relative pt-5 p-3 md:p-4"
                style={{
                  background: "#E0F2FE",
                  boxShadow: `0 1px 2px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.08)`,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p4'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p4)' opacity='0.18'/%3E%3C/svg%3E")`,
                  backgroundSize: "180px 180px",
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/5 blur-sm rounded-full" />
                <p
                  className="text-gray-800 leading-snug"
                  style={{
                    fontSize: "0.95rem",
                    fontFamily: '"Segoe UI", system-ui',
                    fontWeight: 600,
                  }}
                >
                  Pengen Jadi CTO
                </p>
                <p
                  className="text-sky-700 mt-1"
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 500,
                  }}
                >
                  Cita-cita besar 🚀
                </p>
              </div>
            </motion.div>

            {/* 4. PURPLE - Daily Motto (LEFT MIDDLE, Desktop only) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              whileHover={{
                scale: 1.02,
                rotate: -2,
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="hidden lg:block absolute top-[48%] -left-10 xl:-left-16 w-[155px] cursor-pointer z-30"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <ellipse
                    cx="10"
                    cy="18"
                    rx="2.5"
                    ry="0.8"
                    fill="rgba(0,0,0,0.15)"
                  />
                  <circle
                    cx="10"
                    cy="3"
                    r="2.5"
                    fill="#7C3AED"
                  />
                  <circle
                    cx="10"
                    cy="3"
                    r="1.8"
                    fill="#8B5CF6"
                  />
                  <rect
                    x="9.5"
                    y="3"
                    width="1"
                    height="12"
                    fill="#888"
                    opacity="0.5"
                  />
                </svg>
              </div>

              <div
                className="relative pt-5 p-4"
                style={{
                  background: "#EDE9FE",
                  boxShadow: `0 1px 2px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.08)`,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p5'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p5)' opacity='0.18'/%3E%3C/svg%3E")`,
                  backgroundSize: "180px 180px",
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/5 blur-sm rounded-full" />
                <p
                  className="text-gray-800 mb-2 leading-snug"
                  style={{
                    fontSize: "0.76rem",
                    fontFamily: '"Segoe UI", system-ui',
                  }}
                >
                  Keep learning & growing every day 📚
                </p>
                <p
                  className="text-purple-700"
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 600,
                  }}
                >
                  Daily Motto
                </p>
              </div>
            </motion.div>

            {/* 5. ORANGE - Mindset (TOP LEFT) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 7 }}
              animate={{ opacity: 1, scale: 1, rotate: 5 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              whileHover={{
                scale: 1.02,
                rotate: 3,
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="hidden md:block absolute top-[5%] -left-4 md:-left-8 lg:-left-12 w-[135px] md:w-[145px] cursor-pointer z-30"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <ellipse
                    cx="10"
                    cy="18"
                    rx="2.5"
                    ry="0.8"
                    fill="rgba(0,0,0,0.15)"
                  />
                  <circle
                    cx="10"
                    cy="3"
                    r="2.5"
                    fill="#C2410C"
                  />
                  <circle
                    cx="10"
                    cy="3"
                    r="1.8"
                    fill="#EA580C"
                  />
                  <rect
                    x="9.5"
                    y="3"
                    width="1"
                    height="12"
                    fill="#888"
                    opacity="0.5"
                  />
                </svg>
              </div>

              <div
                className="relative pt-5 p-4"
                style={{
                  background: "#FFEDD5",
                  boxShadow: `0 1px 2px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.08)`,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p6'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p6)' opacity='0.18'/%3E%3C/svg%3E")`,
                  backgroundSize: "180px 180px",
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/5 blur-sm rounded-full" />
                <p
                  className="text-gray-800 leading-snug"
                  style={{
                    fontSize: "0.8rem",
                    fontFamily: '"Segoe UI", system-ui',
                  }}
                >
                  Never stop improving! 💪
                </p>
                <p
                  className="text-orange-700 mt-2"
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 600,
                  }}
                >
                  Mindset
                </p>
              </div>
            </motion.div>

            {/* 6. KUNING - Ayat Kolose 3:23 (BOTTOM RIGHT) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              whileHover={{
                scale: 1.02,
                rotate: -4,
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="hidden md:block absolute bottom-[12%] -right-4 md:-right-8 lg:-right-14 w-[175px] md:w-[190px] cursor-pointer z-30"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <ellipse
                    cx="10"
                    cy="18"
                    rx="2.5"
                    ry="0.8"
                    fill="rgba(0,0,0,0.15)"
                  />
                  <circle
                    cx="10"
                    cy="3"
                    r="2.5"
                    fill="#DC2626"
                  />
                  <circle
                    cx="10"
                    cy="3"
                    r="1.8"
                    fill="#EF4444"
                  />
                  <rect
                    x="9.5"
                    y="3"
                    width="1"
                    height="12"
                    fill="#888"
                    opacity="0.5"
                  />
                </svg>
              </div>

              <div
                className="relative pt-5 p-4"
                style={{
                  background: "#FEFCE8",
                  boxShadow: `
                    0 1px 2px rgba(0,0,0,0.06),
                    0 3px 6px rgba(0,0,0,0.08),
                    0 8px 16px rgba(0,0,0,0.1),
                    0 16px 32px rgba(0,0,0,0.08)
                  `,
                  backgroundImage: `
                    repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(251,191,36,0.06) 18px, rgba(251,191,36,0.06) 19px),
                    url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p1)' opacity='0.18'/%3E%3C/svg%3E")
                  `,
                  backgroundSize: "100% 100%, 180px 180px",
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/5 blur-sm rounded-full" />
                <p
                  className="text-gray-800 mb-2 leading-snug"
                  style={{
                    fontSize: "0.68rem",
                    fontFamily: '"Segoe UI", system-ui',
                  }}
                >
                  "Whatever you do, work at it with all your
                  heart, as working for the Lord, not for human
                  masters."
                </p>
                <p
                  className="text-gray-600 mb-1 italic"
                  style={{ fontSize: "0.62rem" }}
                >
                  (Do everything with excellence)
                </p>
                <p
                  className="text-amber-700"
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 600,
                  }}
                >
                  Kolose 3:23 (NIV)
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Trusted By - Overlapping bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute -bottom-30 left-0 right-0 z-40 pb-8 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Glass container - Subtle & Blended */}
          <div
            className="relative px-4 md:px-6 py-3 md:py-5 rounded-[2rem] backdrop-blur-[20px] bg-white/10 border-0 overflow-hidden"
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
            }}
          >
            {/* Content */}
            <div className="relative z-10">
              {/* Heading */}
              <p
                className="text-black/30 uppercase tracking-[0.3em] text-center mb-4 md:mb-6"
                style={{ fontWeight: 500 }}
              >
                Trusted By
              </p>

              {/* Logos Grid */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-6">
                {[
                  "Alfamart",
                  "Transvision",
                  "Ideas Lab",
                  "GMS",
                  "Gunadarma",
                  "SoftUni",
                ].map((company, index) => (
                  <motion.div
                    key={company}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.6 + index * 0.1,
                    }}
                    className="flex items-center justify-center"
                  >
                    <div className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border-0 shadow-none hover:bg-white/30 hover:scale-[1.02] transition-all duration-300">
                      <p className="text-black/50 text-center text-sm md:text-base whitespace-nowrap font-semibold">
                        {company}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}