"use client";

import { motion } from "framer-motion";

/* =====================================================
   PALETA DE LA INVITACIÓN
===================================================== */

const COLORS = {
  butterBloom: "#F8E6A0",
  goldenBatter: "#C8A15A",
  toastedCaramel: "#A88762",
  ivoryWhip: "#F9F6EE",
  gardenSage: "#A8AA7D",
};

/* =====================================================
   ANIMACIONES
===================================================== */

const sectionAnimation = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      duration: 0.8,
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeScale = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  show: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =====================================================
   HOJA DECORATIVA
===================================================== */

function HojaDecorativa({
  className = "",
  rotate = 0,
  mirror = false,
}) {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 180 260"
      initial={{
        opacity: 0,
        scale: 0.92,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={{
        transform: `
          rotate(${rotate}deg)
          scaleX(${mirror ? -1 : 1})
        `,
      }}
    >
      {/* Tallo */}

      <path
        d="M92 245C92 190 101 134 125 50"
        fill="none"
        stroke={COLORS.gardenSage}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.68"
      />

      {/* Hojas izquierdas */}

      <path
        d="M99 190C70 177 55 153 57 128C82 131 101 149 99 190Z"
        fill={COLORS.gardenSage}
        opacity="0.3"
      />

      <path
        d="M109 145C82 131 70 108 74 85C98 91 113 110 109 145Z"
        fill={COLORS.gardenSage}
        opacity="0.42"
      />

      <path
        d="M121 97C99 86 90 66 94 47C115 52 127 68 121 97Z"
        fill={COLORS.butterBloom}
        opacity="0.7"
      />

      {/* Hojas derechas */}

      <path
        d="M96 211C121 198 136 177 136 154C113 156 97 175 96 211Z"
        fill={COLORS.gardenSage}
        opacity="0.38"
      />

      <path
        d="M104 165C128 153 141 133 139 112C117 114 103 133 104 165Z"
        fill={COLORS.gardenSage}
        opacity="0.48"
      />

      <path
        d="M116 118C138 107 148 89 145 71C125 74 114 91 116 118Z"
        fill={COLORS.butterBloom}
        opacity="0.62"
      />

      {/* Detalles florales */}

      <circle
        cx="126"
        cy="47"
        r="4"
        fill={COLORS.goldenBatter}
        opacity="0.8"
      />

      <circle
        cx="139"
        cy="68"
        r="3"
        fill={COLORS.goldenBatter}
        opacity="0.65"
      />

      <circle
        cx="94"
        cy="44"
        r="3"
        fill={COLORS.goldenBatter}
        opacity="0.55"
      />
    </motion.svg>
  );
}

/* =====================================================
   COMPONENTE PRINCIPAL
===================================================== */

export default function FrasePremium() {
  return (
    <motion.section
      variants={sectionAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="
        relative
        isolate
        flex
        min-h-[620px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-24
        text-center

        min-[390px]:px-6

        sm:min-h-[680px]
        sm:px-10
        sm:py-28

        md:min-h-[760px]
        md:px-14
        md:py-32

        lg:px-20
        lg:py-36
      "
      style={{
        background: `
          radial-gradient(
            circle at 12% 14%,
            rgba(248, 230, 160, 0.48) 0%,
            rgba(248, 230, 160, 0.12) 26%,
            transparent 48%
          ),
          radial-gradient(
            circle at 88% 84%,
            rgba(168, 170, 125, 0.22) 0%,
            transparent 42%
          ),
          linear-gradient(
            180deg,
            ${COLORS.ivoryWhip} 0%,
            rgba(248, 230, 160, 0.18) 52%,
            ${COLORS.ivoryWhip} 100%
          )
        `,
      }}
    >
      {/* =================================================
          TEXTURA DE PAPEL
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(168, 135, 98, 0.08) 0px,
              rgba(168, 135, 98, 0.08) 1px,
              transparent 1px,
              transparent 5px
            )
          `,
        }}
      />

      {/* =================================================
          LUZ DECORATIVA SUPERIOR
      ================================================= */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          -top-28
          h-64
          w-64
          rounded-full
          blur-3xl

          sm:h-80
          sm:w-80

          lg:h-[420px]
          lg:w-[420px]
        "
        style={{
          backgroundColor: "rgba(248, 230, 160, 0.38)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =================================================
          LUZ DECORATIVA INFERIOR
      ================================================= */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-28
          h-72
          w-72
          rounded-full
          blur-3xl

          sm:h-96
          sm:w-96
        "
        style={{
          backgroundColor: "rgba(168, 170, 125, 0.2)",
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.55, 0.8, 0.55],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =================================================
          DECORACIÓN BOTÁNICA IZQUIERDA
      ================================================= */}

      <HojaDecorativa
        className="
          pointer-events-none
          absolute
          -bottom-10
          -left-14
          w-[150px]
          opacity-55

          min-[390px]:-left-10
          min-[390px]:w-[170px]

          sm:-bottom-8
          sm:-left-8
          sm:w-[230px]

          md:-left-6
          md:w-[270px]

          lg:left-2
          lg:w-[310px]
        "
        rotate={-12}
      />

      {/* =================================================
          DECORACIÓN BOTÁNICA DERECHA
      ================================================= */}

      <HojaDecorativa
        className="
          pointer-events-none
          absolute
          -right-16
          -top-14
          w-[145px]
          opacity-45

          min-[390px]:-right-12
          min-[390px]:w-[165px]

          sm:-right-8
          sm:-top-10
          sm:w-[220px]

          md:w-[260px]

          lg:right-0
          lg:w-[300px]
        "
        rotate={168}
        mirror
      />

      {/* =================================================
          MARCO EXTERIOR
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-4
          border

          sm:inset-7
          md:inset-10
          lg:inset-12
        "
        style={{
          borderColor: "rgba(200, 161, 90, 0.32)",
        }}
      />

      {/* Esquina superior izquierda */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-4
          top-4
          h-12
          w-12

          sm:left-7
          sm:top-7
          sm:h-16
          sm:w-16

          md:left-10
          md:top-10
          md:h-20
          md:w-20

          lg:left-12
          lg:top-12
        "
        style={{
          borderLeft: `2px solid ${COLORS.goldenBatter}`,
          borderTop: `2px solid ${COLORS.goldenBatter}`,
        }}
      />

      {/* Esquina inferior derecha */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-4
          right-4
          h-12
          w-12

          sm:bottom-7
          sm:right-7
          sm:h-16
          sm:w-16

          md:bottom-10
          md:right-10
          md:h-20
          md:w-20

          lg:bottom-12
          lg:right-12
        "
        style={{
          borderBottom: `2px solid ${COLORS.goldenBatter}`,
          borderRight: `2px solid ${COLORS.goldenBatter}`,
        }}
      />

      {/* =================================================
          CONTENIDO
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-4xl
          flex-col
          items-center
        "
      >
        {/* Etiqueta superior */}

        <motion.div
          variants={fadeUp}
          className="
            mb-8
            flex
            w-full
            items-center
            justify-center
            gap-3

            sm:mb-10
            sm:gap-5
          "
        >
          <span
            className="
              h-px
              w-10

              min-[390px]:w-14
              sm:w-20
              md:w-24
            "
            style={{
              background: `
                linear-gradient(
                  to right,
                  transparent,
                  ${COLORS.goldenBatter}
                )
              `,
            }}
          />

          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.3em]

              min-[390px]:text-[10px]
              min-[390px]:tracking-[0.38em]

              sm:text-[11px]
              sm:tracking-[0.52em]

              md:text-xs
            "
            style={{
              color: `color-mix(
                in srgb,
                ${COLORS.toastedCaramel} 75%,
                ${COLORS.gardenSage} 25%
              )`,
            }}
          >
            Unidos por su palabra
          </p>

          <span
            className="
              h-px
              w-10

              min-[390px]:w-14
              sm:w-20
              md:w-24
            "
            style={{
              background: `
                linear-gradient(
                  to left,
                  transparent,
                  ${COLORS.goldenBatter}
                )
              `,
            }}
          />
        </motion.div>

        {/* Símbolo decorativo */}

        <motion.div
          variants={fadeScale}
          className="
            relative
            mb-5
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full

            sm:mb-7
            sm:h-16
            sm:w-16
          "
          style={{
            border: `1px solid rgba(200, 161, 90, 0.55)`,
            backgroundColor: "rgba(249, 246, 238, 0.72)",
          }}
        >
          <motion.span
            className="
              font-serif
              text-[36px]
              leading-none

              sm:text-[42px]
            "
            style={{
              color: COLORS.goldenBatter,
            }}
            animate={{
              y: [0, -3, 0],
              opacity: [0.75, 1, 0.75],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            “
          </motion.span>
        </motion.div>

        {/* Frase principal */}

        <motion.blockquote
          variants={fadeUp}
          className="
            max-w-[300px]
            font-serif
            text-[25px]
            font-normal
            leading-[1.5]

            min-[390px]:max-w-[340px]
            min-[390px]:text-[28px]

            sm:max-w-2xl
            sm:text-[35px]
            sm:leading-[1.55]

            md:max-w-3xl
            md:text-[43px]

            lg:text-[48px]
          "
          style={{
            color: `color-mix(
              in srgb,
              ${COLORS.gardenSage} 58%,
              ${COLORS.toastedCaramel} 42%
            )`,
            textShadow: `
              0 2px 12px rgba(168, 135, 98, 0.08)
            `,
          }}
        >
          <span className="block">
            Si Jehová no edificare la casa,
          </span>

          <span className="mt-2 block sm:mt-3">
            en vano trabajan los que la edifican.
          </span>
        </motion.blockquote>

        {/* Divisor */}

        <motion.div
          variants={fadeScale}
          className="
            my-9
            flex
            items-center
            justify-center
            gap-3

            sm:my-11
            sm:gap-4
          "
        >
          <motion.span
            className="
              block
              h-px
              w-12

              sm:w-20
            "
            style={{
              background: `
                linear-gradient(
                  to right,
                  transparent,
                  ${COLORS.goldenBatter}
                )
              `,
            }}
            animate={{
              width: ["42px", "72px", "42px"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="
              h-2
              w-2
              rotate-45
            "
            style={{
              backgroundColor: COLORS.goldenBatter,
            }}
            animate={{
              rotate: [45, 225, 405],
              scale: [0.9, 1.12, 0.9],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.span
            className="
              block
              h-px
              w-12

              sm:w-20
            "
            style={{
              background: `
                linear-gradient(
                  to left,
                  transparent,
                  ${COLORS.goldenBatter}
                )
              `,
            }}
            animate={{
              width: ["42px", "72px", "42px"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Referencia */}

        <motion.p
          variants={fadeUp}
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.34em]

            min-[390px]:text-[11px]
            min-[390px]:tracking-[0.42em]

            sm:text-xs
            sm:tracking-[0.58em]

            md:text-[13px]
          "
          style={{
            color: `color-mix(
              in srgb,
              ${COLORS.toastedCaramel} 78%,
              ${COLORS.gardenSage} 22%
            )`,
          }}
        >
          Salmos 127:1
        </motion.p>

        {/* Pequeño detalle inferior */}

        <motion.div
          variants={fadeScale}
          className="
            mt-7
            flex
            items-center
            gap-2

            sm:mt-9
          "
        >
          <span
            className="h-px w-6 sm:w-8"
            style={{
              backgroundColor: COLORS.goldenBatter,
              opacity: 0.6,
            }}
          />

          <span
            className="
              font-serif
              text-base
              leading-none

              sm:text-lg
            "
            style={{
              color: COLORS.gardenSage,
            }}
          >
            ❧
          </span>

          <span
            className="h-px w-6 sm:w-8"
            style={{
              backgroundColor: COLORS.goldenBatter,
              opacity: 0.6,
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}