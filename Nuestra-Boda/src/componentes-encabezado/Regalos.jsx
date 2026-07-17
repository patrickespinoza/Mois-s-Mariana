"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Gift,
  Heart,
  Sparkles,
  X,
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
    y: 40,
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
    x: -35,
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
    x: 35,
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

const Regalos = () => {
  const [mostrarModal, setMostrarModal] =
    useState(false);

  /* Número de evento Liverpool */

  const numeroEvento = "60011883";

  /* Enlace dinámico Liverpool */

  const linkLiverpool = `https://mesaderegalos.liverpool.com.mx/milistaderegalos/60011883`;

  /* Evita el desplazamiento cuando el modal está abierto */

  useEffect(() => {
    if (!mostrarModal) return undefined;

    const overflowAnterior =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setMostrarModal(false);
      }
    };

    window.addEventListener(
      "keydown",
      cerrarConEscape
    );

    return () => {
      document.body.style.overflow =
        overflowAnterior;

      window.removeEventListener(
        "keydown",
        cerrarConEscape
      );
    };
  }, [mostrarModal]);

  return (
    <>
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.16,
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
              circle at 12% 12%,
              rgba(248, 230, 160, 0.42) 0%,
              rgba(248, 230, 160, 0.12) 27%,
              transparent 48%
            ),
            radial-gradient(
              circle at 90% 88%,
              rgba(168, 170, 125, 0.23) 0%,
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
            TEXTURA DE PAPEL
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
            backgroundColor:
              "rgba(248, 230, 160, 0.34)",
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
            backgroundColor:
              "rgba(168, 170, 125, 0.2)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.48, 0.72, 0.48],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =================================================
            ESQUINAS DECORATIVAS
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
                    tracking-[0.32em]

                    min-[390px]:text-[10px]

                    sm:text-[11px]
                    sm:tracking-[0.5em]
                  "
                  style={{
                    color: TONES.caramelDeep,
                  }}
                >
                  Un detalle especial
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
                text-[52px]
                leading-none

                min-[390px]:text-[58px]

                sm:text-[72px]
                md:text-[82px]
                lg:text-[90px]
              "
              style={{
                color: TONES.sageDeep,
                textShadow: `
                  0 4px 16px rgba(85, 91, 63, 0.1)
                `,
              }}
            >
              Mesa de regalos
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
              Tu presencia es nuestro mejor regalo y será
              una alegría compartir este día contigo.
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
              rounded-[28px]
              border

              sm:rounded-[34px]

              md:grid
              md:grid-cols-[0.9fr_1.1fr]

              lg:rounded-[40px]
            "
            style={{
              backgroundColor: COLORS.ivoryWhip,
              borderColor:
                "rgba(200, 161, 90, 0.56)",
              boxShadow: `
                0 28px 75px rgba(88, 66, 47, 0.13),
                inset 0 1px 0 rgba(249, 246, 238, 0.9)
              `,
            }}
          >
            {/* Línea superior */}

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
                PANEL DECORATIVO
            ================================================= */}

            <motion.div
              variants={fadeLeft}
              className="
                relative
                flex
                min-h-[400px]
                items-center
                justify-center
                overflow-hidden
                px-6
                py-14
                text-center

                sm:min-h-[480px]
                sm:px-10
                sm:py-16

                md:min-h-[570px]
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
                  -left-20
                  -top-20
                  h-64
                  w-64
                  rounded-full
                  border
                "
                style={{
                  borderColor:
                    "rgba(249, 246, 238, 0.17)",
                }}
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -right-20
                  h-72
                  w-72
                  rounded-full
                  border
                "
                style={{
                  borderColor:
                    "rgba(248, 230, 160, 0.22)",
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
                  borderColor:
                    "rgba(249, 246, 238, 0.3)",
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
                {/* Imagen original */}

                <motion.div
                  whileHover={{
                    rotate: [0, -4, 4, 0],
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
                    flex
                    h-36
                    w-36
                    items-center
                    justify-center
                    rounded-full
                    border

                    sm:h-44
                    sm:w-44
                  "
                  style={{
                    backgroundColor:
                      "rgba(249, 246, 238, 0.13)",
                    borderColor:
                      "rgba(248, 230, 160, 0.42)",
                    boxShadow: `
                      0 22px 50px rgba(66, 72, 50, 0.2)
                    `,
                  }}
                >
                  <img
                    className="
                      h-24
                      w-24
                      object-contain

                      sm:h-28
                      sm:w-28
                    "
                    src="/RegaloBlanco.png"
                    alt="Regalo"
                  />
                </motion.div>

                <p
                  className="
                    mt-8
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.4em]

                    sm:text-[11px]
                    sm:tracking-[0.5em]
                  "
                  style={{
                    color: COLORS.butterBloom,
                  }}
                >
                  Con mucho cariño
                </p>

                <p
                  className="
                    mt-4
                    max-w-sm
                    font-cursiveDancing
                    text-[38px]
                    leading-tight

                    sm:text-[48px]
                  "
                  style={{
                    color: COLORS.ivoryWhip,
                  }}
                >
                  Gracias por acompañarnos
                </p>

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >
                  <span
                    className="h-px w-10 sm:w-14"
                    style={{
                      backgroundColor:
                        COLORS.butterBloom,
                    }}
                  />

                  <Heart
                    aria-hidden="true"
                    size={15}
                    strokeWidth={1.5}
                    style={{
                      color: COLORS.goldenBatter,
                    }}
                  />

                  <span
                    className="h-px w-10 sm:w-14"
                    style={{
                      backgroundColor:
                        COLORS.butterBloom,
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* =================================================
                INFORMACIÓN
            ================================================= */}

            <motion.div
              variants={fadeRight}
              className="
                relative
                flex
                min-h-[480px]
                flex-col
                justify-center
                px-6
                py-14

                min-[390px]:px-7

                sm:min-h-[530px]
                sm:px-12
                sm:py-16

                md:min-h-[570px]
                md:px-14
                md:py-20

                lg:px-20
              "
            >
              {/* Resplandor */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-72
                  w-72
                  rounded-full
                  blur-[90px]
                "
                style={{
                  backgroundColor:
                    "rgba(248, 230, 160, 0.26)",
                }}
              />

              <div className="relative z-10">
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
                    Nuestros regalos
                  </span>
                </div>

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
                    backgroundColor:
                      "rgba(248, 230, 160, 0.22)",
                    borderColor:
                      "rgba(200, 161, 90, 0.46)",
                  }}
                >
                  <Gift
                    aria-hidden="true"
                    strokeWidth={1.4}
                    className="
                      h-6
                      w-6

                      sm:h-7
                      sm:w-7
                    "
                    style={{
                      color: TONES.sageDeep,
                    }}
                  />
                </div>

                <h3
                  className="
                    mt-7
                    font-serif
                    text-[34px]
                    font-normal
                    leading-tight

                    min-[390px]:text-[38px]

                    sm:text-[46px]
                    md:text-[48px]
                    lg:text-[54px]
                  "
                  style={{
                    color: TONES.sageDeep,
                  }}
                >
                  El mejor regalo es compartir este día
                  contigo
                </h3>

                <p
                  className="
                    mt-6
                    text-[14px]
                    leading-7

                    sm:text-[16px]
                    sm:leading-8
                  "
                  style={{
                    color: TONES.caramelDeep,
                  }}
                >
                  Tu presencia es nuestro mejor regalo,
                  pero si deseas tener un detalle con
                  nosotros, hemos creado una mesa de regalos
                  en Liverpool.
                </p>

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
                        rgba(200, 161, 90, 0.54),
                        transparent
                      )
                    `,
                  }}
                />

                {/* Botón */}

                <motion.button
                  type="button"
                  onClick={() =>
                    setMostrarModal(true)
                  }
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
                    flex
                    min-h-[58px]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    px-6
                    py-4

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
                    borderColor:
                      "rgba(200, 161, 90, 0.5)",
                    boxShadow: `
                      0 12px 26px rgba(66, 72, 50, 0.2),
                      inset 0 1px 0 rgba(249, 246, 238, 0.16)
                    `,
                  }}
                >
                  {/* Brillo */}

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

                  <Gift
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="
                      relative
                      z-10
                      mr-3
                      h-5
                      w-5
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
                      tracking-[0.25em]

                      sm:text-[11px]
                      sm:tracking-[0.32em]
                    "
                    style={{
                      color: COLORS.ivoryWhip,
                    }}
                  >
                    Ver mesa de regalos
                  </span>
                </motion.button>
              </div>
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

      {/* =====================================================
          MODAL
      ===================================================== */}

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onMouseDown={(event) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                setMostrarModal(false);
              }
            }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              overflow-y-auto
              bg-[#424832]/80
              px-4
              py-8
              backdrop-blur-lg

              sm:px-6
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 35,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Mesa de regalos Liverpool"
              className="
                relative
                my-auto
                w-full
                max-w-md
                overflow-hidden
                rounded-[30px]
                border

                sm:rounded-[38px]
              "
              style={{
                backgroundColor: COLORS.ivoryWhip,
                borderColor:
                  "rgba(200, 161, 90, 0.5)",
                boxShadow: `
                  0 35px 120px rgba(66, 72, 50, 0.38)
                `,
              }}
            >
              {/* Cabecera */}

              <div
                className="
                  relative
                  overflow-hidden
                  px-6
                  pb-10
                  pt-12
                  text-center

                  sm:px-10
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
                {/* Resplandor */}

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
                    blur-[80px]
                  "
                  style={{
                    backgroundColor:
                      "rgba(248, 230, 160, 0.23)",
                  }}
                />

                {/* Cerrar */}

                <button
                  type="button"
                  onClick={() =>
                    setMostrarModal(false)
                  }
                  aria-label="Cerrar mesa de regalos"
                  className="
                    absolute
                    right-5
                    top-5
                    z-20
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    transition
                    duration-300

                    hover:rotate-90
                  "
                  style={{
                    backgroundColor:
                      "rgba(249, 246, 238, 0.1)",
                    borderColor:
                      "rgba(249, 246, 238, 0.24)",
                    color: COLORS.ivoryWhip,
                  }}
                >
                  <X
                    size={19}
                    strokeWidth={1.5}
                  />
                </button>

                <div
                  className="
                    relative
                    z-10
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                  "
                  style={{
                    backgroundColor:
                      "rgba(248, 230, 160, 0.14)",
                    borderColor:
                      "rgba(248, 230, 160, 0.42)",
                    color: COLORS.butterBloom,
                  }}
                >
                  <Gift
                    size={27}
                    strokeWidth={1.4}
                  />
                </div>

                <p
                  className="
                    relative
                    z-10
                    mt-6
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.4em]
                  "
                  style={{
                    color: COLORS.butterBloom,
                  }}
                >
                  Mesa de regalos
                </p>

                <h3
                  className="
                    relative
                    z-10
                    mt-3
                    font-cursiveDancing
                    text-[54px]
                    leading-none

                    sm:text-[64px]
                  "
                  style={{
                    color: COLORS.ivoryWhip,
                  }}
                >
                  Liverpool
                </h3>

                <div
                  className="
                    relative
                    z-10
                    mx-auto
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >
                  <span
                    className="h-px w-10"
                    style={{
                      backgroundColor:
                        COLORS.butterBloom,
                    }}
                  />

                  <Heart
                    size={14}
                    strokeWidth={1.5}
                    style={{
                      color: COLORS.goldenBatter,
                    }}
                  />

                  <span
                    className="h-px w-10"
                    style={{
                      backgroundColor:
                        COLORS.butterBloom,
                    }}
                  />
                </div>
              </div>

              {/* Cuerpo */}

              <div
                className="
                  relative
                  px-6
                  py-9
                  text-center

                  sm:px-9
                  sm:py-10
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-14
                    -top-12
                    h-48
                    w-48
                    rounded-full
                    blur-[70px]
                  "
                  style={{
                    backgroundColor:
                      "rgba(248, 230, 160, 0.3)",
                  }}
                />

                <div className="relative z-10">
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                    "
                    style={{
                      color: TONES.caramelDeep,
                    }}
                  >
                    Número de evento
                  </p>

                  <div
                    className="
                      mt-4
                      rounded-[20px]
                      border
                      px-5
                      py-5
                    "
                    style={{
                      backgroundColor:
                        "rgba(248, 230, 160, 0.17)",
                      borderColor:
                        "rgba(200, 161, 90, 0.36)",
                    }}
                  >
                    <p
                      className="
                        break-all
                        font-serif
                        text-[28px]
                        tracking-[0.18em]

                        min-[390px]:text-[32px]

                        sm:tracking-[0.25em]
                      "
                      style={{
                        color: TONES.sageDeep,
                      }}
                    >
                      {numeroEvento}
                    </p>
                  </div>

                  <p
                    className="
                      mx-auto
                      mt-6
                      max-w-sm
                      text-[13px]
                      leading-6

                      sm:text-sm
                      sm:leading-7
                    "
                    style={{
                      color: TONES.caramelDeep,
                    }}
                  >
                    Hemos seleccionado algunos regalos que
                    nos encantaría recibir. Puedes consultar
                    nuestra mesa en línea.
                  </p>

                  <motion.a
                    href={linkLiverpool}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      mt-8
                      flex
                      min-h-[56px]
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      border
                      px-6
                      py-4
                    "
                    style={{
                      background: `
                        linear-gradient(
                          135deg,
                          ${TONES.sageDeep} 0%,
                          ${TONES.sageDark} 100%
                        )
                      `,
                      borderColor:
                        "rgba(200, 161, 90, 0.5)",
                      color: COLORS.ivoryWhip,
                      boxShadow: `
                        0 14px 28px rgba(66, 72, 50, 0.2)
                      `,
                    }}
                  >
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.24em]

                        sm:text-[11px]
                      "
                    >
                      Ver mesa de regalos
                    </span>

                    <ExternalLink
                      size={16}
                      strokeWidth={1.5}
                      style={{
                        color: COLORS.butterBloom,
                      }}
                    />
                  </motion.a>

                  <p
                    className="
                      mt-5
                      font-cursiveDancing
                      text-[27px]
                    "
                    style={{
                      color: COLORS.gardenSage,
                    }}
                  >
                    Gracias por tu cariño
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Regalos;