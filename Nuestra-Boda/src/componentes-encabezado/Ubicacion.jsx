"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

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
   Derivados visualmente de Garden Sage y Toasted Caramel
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
    y: 32,
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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -30,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 30,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =====================================================
   COMPONENTE
===================================================== */

export default function EventoDireccion() {
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
        flex
        w-full
        items-center
        justify-center
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
            circle at 12% 10%,
            rgba(248, 230, 160, 0.42) 0%,
            rgba(248, 230, 160, 0.12) 26%,
            transparent 48%
          ),
          radial-gradient(
            circle at 90% 88%,
            rgba(168, 170, 125, 0.24) 0%,
            transparent 42%
          ),
          linear-gradient(
            180deg,
            ${COLORS.ivoryWhip} 0%,
            rgba(248, 230, 160, 0.16) 52%,
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
          opacity-[0.12]
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
          DECORACIÓN SUPERIOR IZQUIERDA
      ================================================= */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
          h-64
          w-64
          rounded-full
          blur-3xl

          sm:h-80
          sm:w-80
        "
        style={{
          backgroundColor: "rgba(248, 230, 160, 0.34)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.65, 0.9, 0.65],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =================================================
          DECORACIÓN INFERIOR DERECHA
      ================================================= */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-28
          -right-24
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
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.75, 0.5],
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
          CONTENEDOR
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

            <p
             translate="no"
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
                color: TONES.caramelDeep,
              }}
            >
              Save the date
            </p>

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
          translate="no"
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
            Nuestra celebración
          </h2>

          <p
          translate="no"
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
            Nos hará muy felices compartir contigo este día tan especial.
          </p>
        </motion.header>

        {/* =================================================
            TARJETA EDITORIAL
        ================================================= */}

        <motion.div
          variants={fadeUp}
          className="
            relative
            overflow-hidden
            rounded-[26px]
            border

            sm:rounded-[32px]

            md:grid
            md:grid-cols-[0.9fr_1.1fr]

            lg:rounded-[38px]
          "
          style={{
            backgroundColor: COLORS.ivoryWhip,
            borderColor: "rgba(200, 161, 90, 0.58)",
            boxShadow: `
              0 28px 70px rgba(88, 66, 47, 0.12),
              inset 0 1px 0 rgba(249, 246, 238, 0.8)
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
              COLUMNA FECHA
          ================================================= */}

          <motion.div
            variants={fadeLeft}
            className="
              relative
              flex
              min-h-[390px]
              flex-col
              items-center
              justify-center
              overflow-hidden
              px-6
              py-14
              text-center

              min-[390px]:min-h-[420px]

              sm:min-h-[470px]
              sm:px-10
              sm:py-16

              md:min-h-[560px]
              md:px-12
              md:py-20

              lg:px-16
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
            {/* Círculo decorativo */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-16
                -top-20
                h-52
                w-52
                rounded-full
                border

                sm:h-72
                sm:w-72
              "
              style={{
                borderColor: "rgba(249, 246, 238, 0.16)",
              }}
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-20
                -right-16
                h-56
                w-56
                rounded-full
                border

                sm:h-72
                sm:w-72
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
                rounded-[20px]
                border

                sm:inset-6
                sm:rounded-[25px]

                md:inset-7
              "
              style={{
                borderColor: "rgba(249, 246, 238, 0.3)",
              }}
            />

            <div className="relative z-10 flex flex-col items-center">
              <CalendarDays
                aria-hidden="true"
                strokeWidth={1.3}
                className="
                  mb-6
                  h-8
                  w-8

                  sm:h-10
                  sm:w-10
                "
                style={{
                  color: COLORS.butterBloom,
                }}
              />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.38em]

                  sm:text-xs
                  sm:tracking-[0.52em]
                "
                style={{
                  color: COLORS.ivoryWhip,
                }}
              >
                Sabado
              </p>

              <div
                className="
                  my-5
                  font-serif
                  text-[96px]
                  font-light
                  leading-[0.8]

                  min-[390px]:text-[110px]

                  sm:text-[132px]
                  md:text-[144px]
                  lg:text-[158px]
                "
                style={{
                  color: COLORS.ivoryWhip,
                  textShadow: `
                    0 8px 28px rgba(66, 72, 50, 0.18)
                  `,
                }}
              >
                13
              </div>

              <div
                className="
                  mb-5
                  flex
                  items-center
                  justify-center
                  gap-3

                  sm:gap-4
                "
              >
                <span
                  className="h-px w-8 sm:w-12"
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
                  className="h-px w-8 sm:w-12"
                  style={{
                    backgroundColor: COLORS.butterBloom,
                  }}
                />
              </div>

              <p
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]

                  sm:text-sm
                  sm:tracking-[0.42em]
                "
                style={{
                  color: COLORS.ivoryWhip,
                }}
              >
                Marzo
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[22px]
                  tracking-[0.2em]

                  sm:text-[26px]
                "
                style={{
                  color: COLORS.butterBloom,
                }}
              >
                2027
              </p>
            </div>
          </motion.div>

          {/* =================================================
              COLUMNA INFORMACIÓN
          ================================================= */}

          <motion.div
            variants={fadeRight}
            className="
              relative
              flex
              min-h-[470px]
              flex-col
              justify-center
              px-6
              py-14

              min-[390px]:px-7

              sm:min-h-[520px]
              sm:px-12
              sm:py-16

              md:min-h-[560px]
              md:px-14
              md:py-20

              lg:px-20
            "
          >
            {/* Detalle superior */}

            <div
              className="
                mb-8
                flex
                items-center
                gap-3

                sm:mb-10
              "
            >
              <span
                className="h-px w-12 sm:w-20"
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

              <span
              translate="no"
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]

                  sm:text-[10px]
                  sm:tracking-[0.42em]
                "
                style={{
                  color: TONES.caramelDeep,
                }}
              >
                Ceremonia
              </span>
            </div>

            <h3
              className="
                font-serif
                text-[34px]
                font-normal
                leading-tight

                min-[390px]:text-[38px]

                sm:text-[48px]
                md:text-[50px]
                lg:text-[56px]
              "
              style={{
                color: TONES.sageDeep,
              }}
            >
              Celebremos juntos
            </h3>

            <p
              className="
                mt-5
                max-w-lg
                text-[13px]
                leading-7

                sm:text-[15px]
                sm:leading-8
              "
              style={{
                color: TONES.caramelDeep,
              }}
            >
              Acompáñanos a ser testigos del inicio de esta nueva etapa de
              nuestras vidas.
            </p>

            {/* Divisor */}

            <div
              className="
                my-8
                h-px
                w-full

                sm:my-10
              "
              style={{
                background: `
                  linear-gradient(
                    to right,
                    rgba(200, 161, 90, 0.58),
                    transparent
                  )
                `,
              }}
            />

            {/* Hora */}

            <div
              className="
                flex
                items-start
                gap-4

                sm:gap-5
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border

                  sm:h-12
                  sm:w-12
                "
                style={{
                  backgroundColor: "rgba(248, 230, 160, 0.24)",
                  borderColor: "rgba(200, 161, 90, 0.48)",
                }}
              >
                <Clock3
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="h-5 w-5"
                  style={{
                    color: TONES.sageDeep,
                  }}
                />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]

                    sm:text-[10px]
                    sm:tracking-[0.4em]
                  "
                  style={{
                    color: TONES.caramelDeep,
                  }}
                >
                  Hora
                </p>

                <p
                translate="no"
                  className="
                    mt-1
                    font-serif
                    text-[30px]

                    sm:text-[36px]
                  "
                  style={{
                    color: TONES.sageDeep,
                  }}
                >
                  12:00 hrs
                </p>
              </div>
            </div>

            {/* Ubicación */}

            <div
              className="
                mt-7
                flex
                items-start
                gap-4

                sm:mt-8
                sm:gap-5
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border

                  sm:h-12
                  sm:w-12
                "
                style={{
                  backgroundColor: "rgba(168, 170, 125, 0.14)",
                  borderColor: "rgba(168, 170, 125, 0.42)",
                }}
              >
                <MapPin
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="h-5 w-5"
                  style={{
                    color: TONES.sageDeep,
                  }}
                />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]

                    sm:text-[10px]
                    sm:tracking-[0.4em]
                  "
                  style={{
                    color: TONES.caramelDeep,
                  }}
                >
                  Ubicacion
                </p>

                <p
                  className="
                    mt-2
                    text-[12px]
                    leading-relaxed

                    sm:text-sm
                  "
                  style={{
                    color: TONES.caramelDeep,
                  }}
                >
                  Tezoyuca, Estado de México
                </p>
              </div>
            </div>

            {/* Botón */}

            <motion.a
              href="https://maps.app.goo.gl/vPbvkA7ZH6CAQAkw8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="
                group
                relative
                mt-10
                inline-flex
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                px-6
                py-4
                text-center

                sm:mt-12
                sm:w-fit
                sm:px-9
              "
              style={{
                background: `
                  linear-gradient(
                    135deg,
                    ${TONES.sageDeep} 0%,
                    ${TONES.sageDark} 100%
                  )
                `,
                borderColor: "rgba(200, 161, 90, 0.5)",
                boxShadow: `
                  0 12px 26px rgba(66, 72, 50, 0.18),
                  inset 0 1px 0 rgba(249, 246, 238, 0.16)
                `,
              }}
            >
              {/* Brillo del botón */}

              <motion.span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[-45%]
                  top-0
                  h-full
                  w-[35%]
                  -skew-x-12
                "
                style={{
                  background: `
                    linear-gradient(
                      to right,
                      transparent,
                      rgba(249, 246, 238, 0.22),
                      transparent
                    )
                  `,
                }}
                animate={{
                  left: ["-45%", "125%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatDelay: 1.8,
                  ease: "easeInOut",
                }}
              />

              <MapPin
                aria-hidden="true"
                strokeWidth={1.5}
                className="
                  relative
                  z-10
                  mr-3
                  h-4
                  w-4
                "
                style={{
                  color: COLORS.butterBloom,
                }}
              />

              <span
                className="
                  relative
                  z-10
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.27em]

                  sm:text-[11px]
                  sm:tracking-[0.34em]
                "
                style={{
                  color: COLORS.ivoryWhip,
                }}
              >
                Ver ubicación
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* =================================================
            DETALLE INFERIOR
        ================================================= */}

        <motion.div
          variants={fadeUp}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3

            sm:mt-12
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
        </motion.div>
      </div>
    </motion.section>
  );
}