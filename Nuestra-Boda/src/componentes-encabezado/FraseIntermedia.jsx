"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

/* =====================================================
   PALETA PRINCIPAL
===================================================== */

const COLORS = {
  butterBloom: "#F8E6A0",
  goldenBatter: "#C8A15A",
  toastedCaramel: "#A88762",
  ivoryWhip: "#F9F6EE",
  gardenSage: "#A8AA7D",
};

const TONES = {
  sageDeep: "#555B3F",
  caramelDeep: "#765B42",
};

/* =====================================================
   ANIMACIONES
===================================================== */

const sectionVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.18,
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

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },

  show: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =====================================================
   COMPONENTE
===================================================== */

export default function FraseEspecial() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="
        relative
        isolate
        w-full
        overflow-hidden
        px-5
        py-24

        sm:px-8
        sm:py-28

        md:px-12
        md:py-32

        lg:px-16
        lg:py-36
      "
      style={{
        background: `
          radial-gradient(
            circle at 12% 15%,
            rgba(248, 230, 160, 0.44) 0%,
            rgba(248, 230, 160, 0.12) 28%,
            transparent 48%
          ),
          radial-gradient(
            circle at 88% 85%,
            rgba(168, 170, 125, 0.24) 0%,
            transparent 42%
          ),
          linear-gradient(
            180deg,
            ${COLORS.ivoryWhip} 0%,
            #F5EFDF 50%,
            ${COLORS.ivoryWhip} 100%
          )
        `,
      }}
    >
      {/* =================================================
          TEXTURA DE FONDO
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(168, 135, 98, 0.06) 0px,
              rgba(168, 135, 98, 0.06) 1px,
              transparent 1px,
              transparent 6px
            )
          `,
        }}
      />

      {/* =================================================
          CÍRCULO DECORATIVO SUPERIOR
      ================================================= */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          border

          sm:h-80
          sm:w-80

          lg:-right-32
          lg:-top-32
          lg:h-[430px]
          lg:w-[430px]
        "
        style={{
          borderColor: "rgba(200, 161, 90, 0.22)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* =================================================
          CÍRCULO DECORATIVO INFERIOR
      ================================================= */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-24
          h-56
          w-56
          rounded-full

          sm:h-72
          sm:w-72

          lg:-bottom-32
          lg:-left-32
          lg:h-96
          lg:w-96
        "
        style={{
          backgroundColor: COLORS.gardenSage,
          opacity: 0.12,
        }}
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
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
          w-full
          max-w-6xl
        "
      >
        {/* Etiqueta superior */}

        <motion.div
          variants={fadeUp}
          className="
            mb-10
            flex
            items-center
            justify-center
            gap-3

            sm:mb-14
            sm:gap-5
          "
        >
          <span
            className="
              h-px
              w-10

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
          />

          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.32em]

              min-[390px]:text-[10px]

              sm:text-[11px]
              sm:tracking-[0.5em]
            "
            style={{
              color: COLORS.toastedCaramel,
            }}
          >
            Una historia para siempre
          </p>

          <span
            className="
              h-px
              w-10

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
          />
        </motion.div>

        {/* =================================================
            BLOQUE PRINCIPAL
        ================================================= */}

        <motion.div
          variants={scaleIn}
          className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            px-6
            py-14
            text-center

            min-[390px]:px-8

            sm:px-14
            sm:py-18

            md:px-20
            md:py-20

            lg:px-28
            lg:py-24
          "
        >
          {/* Marco exterior */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              border
            "
            style={{
              borderColor: "rgba(200, 161, 90, 0.48)",
            }}
          />

          {/* Marco interior */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-2
              border

              sm:inset-3
            "
            style={{
              borderColor: "rgba(168, 170, 125, 0.26)",
            }}
          />

          {/* Esquina superior izquierda */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              h-14
              w-14

              sm:h-20
              sm:w-20
            "
            style={{
              borderTop: `3px solid ${COLORS.goldenBatter}`,
              borderLeft: `3px solid ${COLORS.goldenBatter}`,
            }}
          />

          {/* Esquina inferior derecha */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              h-14
              w-14

              sm:h-20
              sm:w-20
            "
            style={{
              borderRight: `3px solid ${COLORS.goldenBatter}`,
              borderBottom: `3px solid ${COLORS.goldenBatter}`,
            }}
          />

          {/* Comilla decorativa */}

          <motion.div
            aria-hidden="true"
            className="
              absolute
              left-4
              top-4

              sm:left-8
              sm:top-7

              md:left-12
              md:top-10
            "
            initial={{
              opacity: 0,
              rotate: -12,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 0.2,
              rotate: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
          >
            <Quote
              strokeWidth={1}
              className="
                h-16
                w-16

                sm:h-24
                sm:w-24

                md:h-28
                md:w-28
              "
              style={{
                color: COLORS.gardenSage,
              }}
            />
          </motion.div>

          {/* Contenido */}

          <div className="relative z-10">
            <motion.div
              variants={fadeUp}
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border

                sm:h-14
                sm:w-14
              "
              style={{
                backgroundColor: COLORS.butterBloom,
                borderColor: "rgba(200, 161, 90, 0.54)",
                boxShadow: `
                  0 10px 25px rgba(168, 135, 98, 0.13)
                `,
              }}
            >
              <Sparkles
                aria-hidden="true"
                strokeWidth={1.4}
                className="
                  h-5
                  w-5

                  sm:h-6
                  sm:w-6
                "
                style={{
                  color: TONES.sageDeep,
                }}
              />
            </motion.div>

            {/* Frase */}

            <motion.blockquote
              variants={fadeUp}
              className="
                mx-auto
                mt-8
                max-w-4xl
                font-serif
                text-[24px]
                font-normal
                leading-[1.55]

                min-[390px]:text-[27px]

                sm:mt-10
                sm:text-[34px]
                sm:leading-[1.5]

                md:text-[42px]

                lg:text-[48px]
              "
              style={{
                color: TONES.sageDeep,
                textWrap: "balance",
              }}
            >
              “Hace tiempo le pedí al mar y al sol que te trajera para 
               acompañar mis noches en la arena y tenerte así y poder decir que SI.”
            </motion.blockquote>

            {/* Separador */}

            <motion.div
              variants={fadeUp}
              className="
                my-8
                flex
                items-center
                justify-center
                gap-3

                sm:my-10
                sm:gap-4
              "
            >
              <span
                className="
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
              />

              <span
                className="
                  h-2
                  w-2
                  rotate-45
                "
                style={{
                  backgroundColor: COLORS.goldenBatter,
                }}
              />

              <span
                className="
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
              />
            </motion.div>

            
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}