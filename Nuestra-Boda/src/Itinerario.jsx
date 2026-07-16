"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const events = [
  {
    time: "18:00",
    title: "Ceremonia",
    description: "Ceremonia civil con nuestros seres queridos",
    icon: "💍",
  },
  {
    time: "19:30",
    title: "Recepción",
    description: "Bienvenida con cóctel y música en vivo",
    icon: "🥂",
  },
  {
    time: "21:00",
    title: "Cena",
    description: "Banquete con menú especialmente diseñado",
    icon: "🍽️",
  },
  {
    time: "23:00",
    title: "Fiesta",
    description: "¡A bailar hasta que amanezca!",
    icon: "🎉",
  },
];

const ItinerarioTimelinePremium = () => {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32 px-5 sm:px-6"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 18%),
          radial-gradient(circle at bottom right, rgba(255,255,255,0.04), transparent 22%),
          linear-gradient(
            145deg,
            #f8f4ee 0%,
            #efe4d2 38%,
            #dcc4a3 100%
          )
        `,
      }}
    >

      {/* GLOW */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background: "rgba(212,175,55,0.16)",
          top: "-140px",
          right: "-120px",
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.24, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* TEXTURA */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(0,0,0,0.08) 0px,
              rgba(0,0,0,0.08) 1px,
              transparent 1px,
              transparent 6px
            )
          `,
        }}
      />

      {/* TITULOS */}
      <div className="relative z-10 text-center mb-20">

        <motion.p
          className="uppercase text-[11px] tracking-[0.3em] md:tracking-[0.55em]"
          style={{
            color: "#9b7b52",
          }}
          animate={{
            letterSpacing: ["0.3em", "0.45em", "0.3em"],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >
          ITINERARIO
        </motion.p>

        <motion.h1
          className="mt-6 text-[34px] sm:text-[48px] md:text-[72px] leading-none font-cursiveDancing"
          style={{
  color: "#4a3422",
  textShadow: `
    0 2px 12px rgba(255,255,255,0.45),
    0 4px 18px rgba(0,0,0,0.08)
  `,
  letterSpacing: "0.02em",
}}
          animate={{
            opacity: [0.92, 1, 0.92],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          Nuestro Día
        </motion.h1>

        {/* DETALLE */}
        <motion.div
          className="relative flex justify-center items-center my-10"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >

          <motion.div
            className="h-[1px]"
            style={{
              width: "90px",
              background:
                "linear-gradient(to right, transparent, rgba(180,140,80,0.7))",
            }}
            animate={{
              width: ["70px", "95px", "70px"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

          <motion.div
            className="relative mx-5"
            animate={{
              rotate: [0, 4, -4, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          >

            <div className="absolute inset-0 blur-xl bg-[#d4af37]/20 scale-150 rounded-full" />

            <div
              className="relative w-3 h-3 rotate-45"
              style={{
                background: `
                  linear-gradient(
                    135deg,
                    #d4af37 0%,
                    #b38728 45%,
                    #7a5a16 100%
                  )
                `,
              }}
            />
          </motion.div>

          <motion.div
            className="h-[1px]"
            style={{
              width: "90px",
              background:
                "linear-gradient(to left, transparent, rgba(180,140,80,0.7))",
            }}
            animate={{
              width: ["70px", "95px", "70px"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

        </motion.div>

      </div>

      {/* TIMELINE */}
      <div className="relative max-w-6xl mx-auto">

        {/* LINEA CENTRAL */}
        <div
          className="absolute left-1/2 top-0 hidden md:block w-[2px] h-full -translate-x-1/2"
          style={{
            background: `
              linear-gradient(
                to bottom,
                transparent,
                rgba(180,140,80,0.45),
                transparent
              )
            `,
          }}
        />

        <div className="flex flex-col gap-14 md:gap-24">

          {events.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`
                  relative flex w-full
                  ${isLeft ? "md:justify-start" : "md:justify-end"}
                  justify-center
                `}
              >

                {/* PUNTO CENTRAL */}
                <motion.div
                  className="absolute left-1/2 top-1/2 hidden md:flex -translate-x-1/2 -translate-y-1/2 z-20"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >

                  <div className="relative">

                    <div className="absolute inset-0 blur-xl bg-[#d4af37]/30 scale-150 rounded-full" />

                    <div
                      className="relative w-5 h-5 rounded-full border border-white/40"
                      style={{
                        background: `
                          linear-gradient(
                            135deg,
                            #d4af37,
                            #9b6b1d
                          )
                        `,
                        boxShadow: `
                          0 0 20px rgba(212,175,55,0.4),
                          inset 0 1px 0 rgba(255,255,255,0.4)
                        `,
                      }}
                    />

                  </div>

                </motion.div>

                {/* CARD */}
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="
                    relative overflow-hidden
                    w-full md:w-[46%]
                    rounded-[34px]
                    px-8 py-10
                  "
                  style={{
                    background: `
                      linear-gradient(
                        145deg,
                        rgba(255,255,255,0.72),
                        rgba(255,255,255,0.35)
                      )
                    `,
                    backdropFilter: "blur(18px)",
                    border: "1px solid rgba(255,255,255,0.4)",
                    boxShadow: `
                      0 25px 60px rgba(0,0,0,0.12),
                      inset 0 1px 0 rgba(255,255,255,0.6)
                    `,
                  }}
                >

                  {/* BRILLO */}
                  <div
                    className="absolute top-0 left-0 w-20 h-full opacity-10"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(255,255,255,0.9), transparent)",
                      transform: "skewX(-20deg)",
                    }}
                  />

                  {/* HORA */}
                  <motion.p
                    className="uppercase text-[11px] tracking-[0.4em]"
                    style={{
                      color: "#9b7b52",
                    }}
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  >
                    {event.time}
                  </motion.p>

                  {/* TITULO */}
                  <h2
                    className="mt-5 text-[30px] md:text-[40px] font-cursiveDancing"
                    style={{
                      background: `
                        linear-gradient(
                          180deg,
                          #d4af37 0%,
                          #b38728 45%,
                          #7a5a16 100%
                        )
                      `,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {event.title}
                  </h2>

                  {/* LINEA */}
                  <motion.div
                    className="w-20 h-[1px] my-6"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(180,140,80,0.8), transparent)",
                    }}
                    animate={{
                      width: ["60px", "90px", "60px"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />

                  {/* TEXTO */}
                  <p
                    className="text-[15px] leading-relaxed"
                    style={{
                      color: "#6f5a40",
                    }}
                  >
                    {event.description}
                  </p>

                </motion.div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default ItinerarioTimelinePremium;