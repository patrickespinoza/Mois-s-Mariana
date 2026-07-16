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
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function EventoDireccion() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative flex items-center justify-center overflow-hidden px-6 py-32"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(255,255,255,0.04), transparent 18%),
          radial-gradient(circle at bottom right, rgba(255,255,255,0.03), transparent 22%),
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
        className="absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-20"
        style={{
          background: "rgba(212,175,55,0.18)",
          top: "-120px",
          left: "-120px",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15],
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

      {/* CARD PREMIUM */}
      <motion.div
        className="relative overflow-hidden rounded-[38px] px-10 py-16 md:px-16 md:py-20 max-w-xl w-full text-center"
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
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        {/* BRILLO */}
        <div
          className="absolute top-0 left-0 w-24 h-full opacity-10"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.9), transparent)",
            transform: "skewX(-20deg)",
          }}
        />

        {/* TITULO */}
        <motion.div
          animate={{
            letterSpacing: ["0.45em", "0.55em", "0.45em"],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <p
            className="uppercase text-[11px] md:text-xs tracking-[0.55em]"
            style={{
              color: "#9b7b52",
            }}
          >
            SAVE THE DATE
          </p>
        </motion.div>

        {/* DETALLE PREMIUM */}
<motion.div
  className="relative flex justify-center items-center my-12"
  animate={{
    opacity: [0.7, 1, 0.7],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>

  {/* LINEA IZQUIERDA */}
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
      ease: "easeInOut",
    }}
  />

  {/* CENTRO */}
  <motion.div
    className="relative mx-5"
    animate={{
      rotate: [0, 4, -4, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >

    {/* GLOW */}
    <div className="absolute inset-0 blur-xl bg-[#d4af37]/20 scale-150 rounded-full" />

    {/* DIAMANTE */}
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
        boxShadow: `
          0 0 12px rgba(212,175,55,0.35),
          inset 0 1px 0 rgba(255,255,255,0.4)
        `,
      }}
    />

  </motion.div>

  {/* LINEA DERECHA */}
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
      ease: "easeInOut",
    }}
  />

</motion.div>

        {/* FECHA */}
        <motion.h2
          className="text-[26px] md:text-[34px] leading-tight font-light"
          style={{
            color: "#3d2d1f",
            letterSpacing: "0.08em",
          }}
          animate={{
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          Domingo
          <br />

          <span
            className="text-[52px] md:text-[72px] leading-none"
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
              textShadow: `
                0 2px 10px rgba(212,175,55,0.15)
              `,
            }}
          >
            11
          </span>

          <br />

          <span className="tracking-[0.35em] uppercase text-[13px]">
            Junio 2026
          </span>
        </motion.h2>

        {/* LINEA */}
        <motion.div
          className="w-28 h-[1px] mx-auto my-8"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(180,140,80,0.7), transparent)",
          }}
          animate={{
            width: ["90px", "130px", "90px"],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        {/* HORA */}
        <motion.div
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <p
            className="text-[13px] uppercase tracking-[0.45em]"
            style={{
              color: "#9b7b52",
            }}
          >
            CEREMONIA
          </p>

          <p
            className="mt-3 text-[36px] md:text-[44px] font-light"
            style={{
              color: "#2d1f16",
            }}
          >
            16:30
          </p>
        </motion.div>

        {/* BOTON */}
        <motion.a
          href="https://maps.app.goo.gl/TsSDUBKAractwi8F8"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center overflow-hidden mt-12 px-10 py-4 rounded-full"
          style={{
            background: `
              linear-gradient(
                135deg,
                #b8925f 0%,
                #9b7b52 50%,
                #7a6040 100%
              )
            `,
            boxShadow: `
              0 12px 30px rgba(0,0,0,0.12),
              inset 0 1px 0 rgba(255,255,255,0.3)
            `,
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >

          {/* SHINE */}
          <motion.div
            className="absolute top-0 left-[-120%] w-[120%] h-full bg-white/20 skew-x-12"
            animate={{
              left: ["-120%", "140%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <span
            className="relative z-10 uppercase tracking-[0.35em] text-[12px]"
            style={{
              color: "#fffdf8",
            }}
          >
            Ver ubicación
          </span>

        </motion.a>

      </motion.div>

    </motion.section>
  );
}