"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Sparkles,
  Users,
} from "lucide-react";

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

/* =====================================================
   TONOS DE CONTRASTE
===================================================== */

const TONES = {
  sageDeep: "#555B3F",
  sageDark: "#424832",
  caramelDeep: "#72583F",
  caramelDark: "#58422F",
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
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 34,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.85,
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
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =====================================================
   COMPONENTE
===================================================== */

export default function AvisoAsistencia() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.18,
      }}
      className="
        relative
        isolate
        w-full
        overflow-hidden
        px-4
        py-24

        min-[390px]:px-5

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
            circle at 10% 12%,
            rgba(248, 230, 160, 0.46) 0%,
            rgba(248, 230, 160, 0.12) 27%,
            transparent 48%
          ),
          radial-gradient(
            circle at 90% 88%,
            rgba(168, 170, 125, 0.25) 0%,
            transparent 42%
          ),
          linear-gradient(
            180deg,
            ${COLORS.ivoryWhip} 0%,
            rgba(248, 230, 160, 0.14) 52%,
            ${COLORS.ivoryWhip} 100%
          )
        `,
      }}
    >
      {/* =================================================
          TEXTURA SUAVE
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.11]
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
          RESPLANDOR SUPERIOR
      ================================================= */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-28
          -top-28
          h-72
          w-72
          rounded-full
          blur-3xl

          sm:h-96
          sm:w-96
        "
        style={{
          backgroundColor: "rgba(248, 230, 160, 0.34)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.55, 0.85, 0.55],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =================================================
          RESPLANDOR INFERIOR
      ================================================= */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-28
          h-80
          w-80
          rounded-full
          blur-3xl

          sm:h-[430px]
          sm:w-[430px]
        "
        style={{
          backgroundColor: "rgba(168, 170, 125, 0.2)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.72, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =================================================
          LÍNEAS DECORATIVAS
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-5
          top-5
          h-20
          w-px

          sm:left-8
          sm:top-8
          sm:h-28

          md:left-12
          md:top-12
        "
        style={{
          background: `
            linear-gradient(
              to bottom,
              ${COLORS.goldenBatter},
              transparent
            )
          `,
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-5
          top-5
          h-px
          w-20

          sm:left-8
          sm:top-8
          sm:w-28

          md:left-12
          md:top-12
        "
        style={{
          background: `
            linear-gradient(
              to right,
              ${COLORS.goldenBatter},
              transparent
            )
          `,
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-5
          right-5
          h-20
          w-px

          sm:bottom-8
          sm:right-8
          sm:h-28

          md:bottom-12
          md:right-12
        "
        style={{
          background: `
            linear-gradient(
              to top,
              ${COLORS.goldenBatter},
              transparent
            )
          `,
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-5
          right-5
          h-px
          w-20

          sm:bottom-8
          sm:right-8
          sm:w-28

          md:bottom-12
          md:right-12
        "
        style={{
          background: `
            linear-gradient(
              to left,
              ${COLORS.goldenBatter},
              transparent
            )
          `,
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
        {/* =================================================
            ENCABEZADO
        ================================================= */}

        <motion.header
          variants={fadeUp}
          className="
            mx-auto
            mb-10
            max-w-3xl
            text-center

            sm:mb-12
            md:mb-16
          "
        >
          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-3

              sm:gap-5
            "
          >
            <span
              className="
                h-px
                w-10

                sm:w-16
                md:w-20
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

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Sparkles
                aria-hidden="true"
                size={14}
                strokeWidth={1.5}
                style={{
                  color: COLORS.goldenBatter,
                }}
              />

              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]

                  min-[390px]:text-[10px]

                  sm:text-[11px]
                  sm:tracking-[0.48em]
                "
                style={{
                  color: TONES.caramelDeep,
                }}
              >
                Información importante
              </p>
            </div>

            <span
              className="
                h-px
                w-10

                sm:w-16
                md:w-20
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
          </div>

          <h2
            className="
              font-cursiveDancing
              text-[46px]
              leading-none

              min-[390px]:text-[52px]

              sm:text-[68px]
              md:text-[78px]
              lg:text-[86px]
            "
            style={{
              color: TONES.sageDeep,
              textShadow: `
                0 4px 16px rgba(85, 91, 63, 0.1)
              `,
            }}
          >
            Confirma tu asistencia
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-[13px]
              leading-relaxed

              sm:text-[15px]
              sm:leading-7
            "
            style={{
              color: TONES.caramelDeep,
            }}
          >
            Tu confirmación nos ayudará a preparar cada detalle con mucho
            cariño.
          </p>
        </motion.header>

        {/* =================================================
            TARJETA PRINCIPAL
        ================================================= */}

        <motion.div
          variants={scaleIn}
          className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-[28px]
            border

            sm:rounded-[34px]

            md:grid
            md:grid-cols-[1.12fr_0.88fr]

            lg:rounded-[40px]
          "
          style={{
            backgroundColor: COLORS.ivoryWhip,
            borderColor: "rgba(200, 161, 90, 0.56)",
            boxShadow: `
              0 28px 75px rgba(88, 66, 47, 0.13),
              inset 0 1px 0 rgba(249, 246, 238, 0.9)
            `,
          }}
        >
          {/* Brillo superior */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              z-20
              h-px
            "
            style={{
              background: `
                linear-gradient(
                  to right,
                  transparent,
                  ${COLORS.goldenBatter},
                  transparent
                )
              `,
            }}
          />
{/* =================================================
    IMAGEN
================================================= */}

<div
  className="
    relative
    flex
    items-center
    justify-center
    overflow-hidden

    h-[620px]

    sm:h-[560px]

    md:h-auto
    md:min-h-[720px]
    lg:min-h-[860px]
  "
>

  {/* Imagen */}

  <img
    src="/Paleta.png"
    alt="Novios"
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      transition
      duration-700
      hover:scale-[1.02]
    "
    style={{
      objectPosition: "center center",
    }}
  />


</div>
            

          {/* =================================================
              FECHA LÍMITE
          ================================================= */}

          <div
            className="
              relative
              flex
              min-h-[420px]
              flex-col
              items-center
              justify-center
              overflow-hidden
              px-6
              py-14
              text-center

              sm:min-h-[480px]
              sm:px-10
              sm:py-16

              md:min-h-[540px]
              md:px-12
              md:py-20
            "
            style={{
              background: `
                linear-gradient(
                  145deg,
                  ${COLORS.gardenSage} 0%,
                  #969A70 100%
                )
              `,
            }}
          >
            {/* Círculos decorativos */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                border
              "
              style={{
                borderColor: "rgba(249, 246, 238, 0.18)",
              }}
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-20
                h-72
                w-72
                rounded-full
                border
              "
              style={{
                borderColor: "rgba(248, 230, 160, 0.2)",
              }}
            />

            {/* Marco interior */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-4
                rounded-[22px]
                border

                sm:inset-6
                sm:rounded-[28px]
              "
              style={{
                borderColor: "rgba(249, 246, 238, 0.3)",
              }}
            />

            <div
              className="
                relative
                z-10
                flex
                flex-col
                items-center
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border

                  sm:h-16
                  sm:w-16
                "
                style={{
                  backgroundColor: "rgba(248, 230, 160, 0.14)",
                  borderColor: "rgba(248, 230, 160, 0.4)",
                }}
              >
                <Clock3
                  aria-hidden="true"
                  strokeWidth={1.4}
                  className="
                    h-6
                    w-6

                    sm:h-7
                    sm:w-7
                  "
                  style={{
                    color: COLORS.butterBloom,
                  }}
                />
              </div>

              <p
                className="
                  mt-7
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.38em]

                  sm:text-[11px]
                  sm:tracking-[0.48em]
                "
                style={{
                  color: COLORS.ivoryWhip,
                }}
              >
                Fecha límite
              </p>

              <p
                className="
                  mt-5
                  font-serif
                  text-[72px]
                  font-light
                  leading-none

                  min-[390px]:text-[82px]

                  sm:text-[96px]
                  md:text-[88px]
                  lg:text-[104px]
                "
                style={{
                  color: COLORS.ivoryWhip,
                  textShadow: `
                    0 8px 28px rgba(66, 72, 50, 0.2)
                  `,
                }}
              >
                17
              </p>

              <div
                className="
                  my-5
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <span
                  className="h-px w-10 sm:w-14"
                  style={{
                    backgroundColor: COLORS.butterBloom,
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
                  className="h-px w-10 sm:w-14"
                  style={{
                    backgroundColor: COLORS.butterBloom,
                  }}
                />
              </div>

              <p
                className="
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[0.34em]

                  sm:text-[15px]
                  sm:tracking-[0.42em]
                "
                style={{
                  color: COLORS.ivoryWhip,
                }}
              >
                Enero
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-[24px]
                  tracking-[0.2em]

                  sm:text-[28px]
                "
                style={{
                  color: COLORS.butterBloom,
                }}
              >
                2027
              </p>

              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  px-5
                  py-3
                "
                style={{
                  backgroundColor: "rgba(249, 246, 238, 0.1)",
                  borderColor: "rgba(249, 246, 238, 0.25)",
                }}
              >
                <CalendarDays
                  aria-hidden="true"
                  size={16}
                  strokeWidth={1.5}
                  style={{
                    color: COLORS.butterBloom,
                  }}
                />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]

                    sm:text-[10px]
                  "
                  style={{
                    color: COLORS.ivoryWhip,
                  }}
                >
                  Confirma antes de esta fecha
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            MENSAJE INFERIOR
        ================================================= */}

        <motion.div
          variants={fadeUp}
          className="
            mx-auto
            mt-10
            max-w-2xl
            text-center

            sm:mt-12
          "
        >
          <p
            className="
              font-cursiveDancing
              text-[29px]
              leading-snug

              sm:text-[38px]
            "
            style={{
              color: COLORS.gardenSage,
            }}
          >
            Tu presencia hará este día aún más especial
          </p>

          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-3

              sm:gap-4
            "
          >
            <span
              className="h-px w-12 sm:w-20"
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
                font-serif
                text-lg
                leading-none
              "
              style={{
                color: COLORS.gardenSage,
              }}
            >
              ❧
            </span>

            <span
              className="h-px w-12 sm:w-20"
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
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}