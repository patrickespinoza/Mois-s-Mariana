"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
   IMÁGENES
===================================================== */

const images = [
  {
    src: "/Carrusel01.jpg",
    alt: "Momento especial 1",
    positionMobile: "50% 30%",
    positionDesktop: "10% 80%",
  },
  {
    src: "/Carrusel02.jpg",
    alt: "Momento especial 2",
    positionMobile: "30% 60%",
    positionDesktop: "10% 90%",
  },
  {
    src: "/Carrusel03.jpg",
    alt: "Momento especial 3",
    positionMobile: "50% 35%",
    positionDesktop: "30% 30%",
  },
  {
    src: "/Carrusel04.jpg",
    alt: "Momento especial 4",
    positionMobile: "45% 28%",
    positionDesktop: "48% 70%",
  },
  {
    src: "/Carrusel05.jpg",
    alt: "Momento especial 5",
    positionMobile: "55% 30%",
    positionDesktop: "52% 20%",
  },
  {
    src: "/Carrusel06.jpg",
    alt: "Momento especial 6",
    positionMobile: "50% 22%",
    positionDesktop: "50% 12%",
  },
  {
    src: "/Carrusel07.jpg",
    alt: "Momento especial 7",
    positionMobile: "50% 32%",
    positionDesktop: "50% 13%",
  },
  {
    src: "/Carrusel08.jpg",
    alt: "Momento especial 8",
    positionMobile: "45% 25%",
    positionDesktop: "48% 25%",
  },
  {
    src: "/Carrusel09.jpg",
    alt: "Momento especial 9",
    positionMobile: "55% 28%",
    positionDesktop: "52% 12%",
  },
];

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
    y: 36,
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
   COMPONENTE PRINCIPAL
===================================================== */

export default function GaleriaMomentos() {
  const intervalRef = useRef(null);
  const [esDesktop, setEsDesktop] = useState(false);
  const [index, setIndex] = useState(0);
  const [direccion, setDireccion] = useState(1);
  const [pausado, setPausado] = useState(false);

  /* =====================================================
     CAMBIO AUTOMÁTICO
  ===================================================== */
useEffect(() => {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  const actualizarPantalla = () => {
    setEsDesktop(mediaQuery.matches);
  };

  actualizarPantalla();

  mediaQuery.addEventListener("change", actualizarPantalla);

  return () => {
    mediaQuery.removeEventListener("change", actualizarPantalla);
  };
}, []);

  useEffect(() => {
    if (pausado || images.length <= 1) return undefined;

    intervalRef.current = window.setInterval(() => {
      setDireccion(1);

      setIndex((prevIndex) => {
        return (prevIndex + 1) % images.length;
      });
    }, 4500);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [pausado]);

  /* =====================================================
     NAVEGACIÓN
  ===================================================== */

  const mostrarAnterior = () => {
    setDireccion(-1);

    setIndex((prevIndex) => {
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  const mostrarSiguiente = () => {
    setDireccion(1);

    setIndex((prevIndex) => {
      return (prevIndex + 1) % images.length;
    });
  };

  const seleccionarImagen = (nuevoIndex) => {
    setDireccion(nuevoIndex > index ? 1 : -1);
    setIndex(nuevoIndex);
  };

  /* =====================================================
     VARIANTES DEL CARRUSEL
  ===================================================== */

  const imageVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 45 : -45,
      scale: 1.035,
    }),

    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },

    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -45 : 45,
      scale: 1.02,
    }),
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.12,
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
            circle at 8% 10%,
            rgba(248, 230, 160, 0.5) 0%,
            rgba(248, 230, 160, 0.14) 25%,
            transparent 47%
          ),
          radial-gradient(
            circle at 92% 88%,
            rgba(168, 170, 125, 0.24) 0%,
            transparent 43%
          ),
          linear-gradient(
            180deg,
            ${COLORS.ivoryWhip} 0%,
            rgba(248, 230, 160, 0.15) 50%,
            ${COLORS.ivoryWhip} 100%
          )
        `,
      }}
    >
      {/* =================================================
          TEXTURA SUTIL
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
              rgba(168, 135, 98, 0.07) 0px,
              rgba(168, 135, 98, 0.07) 1px,
              transparent 1px,
              transparent 5px
            )
          `,
        }}
      />

      {/* =================================================
          LUZ SUPERIOR
      ================================================= */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          -top-28
          h-72
          w-72
          rounded-full
          blur-3xl

          sm:h-96
          sm:w-96
        "
        style={{
          backgroundColor: "rgba(248, 230, 160, 0.35)",
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
          LUZ INFERIOR
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
          opacity: [0.48, 0.72, 0.48],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =================================================
          MARCO DECORATIVO EXTERIOR
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
          borderColor: "rgba(200, 161, 90, 0.26)",
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
          h-14
          w-14

          sm:left-7
          sm:top-7
          sm:h-20
          sm:w-20

          md:left-10
          md:top-10

          lg:left-12
          lg:top-12
        "
        style={{
          borderTop: `2px solid ${COLORS.goldenBatter}`,
          borderLeft: `2px solid ${COLORS.goldenBatter}`,
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
          h-14
          w-14

          sm:bottom-7
          sm:right-7
          sm:h-20
          sm:w-20

          md:bottom-10
          md:right-10

          lg:bottom-12
          lg:right-12
        "
        style={{
          borderRight: `2px solid ${COLORS.goldenBatter}`,
          borderBottom: `2px solid ${COLORS.goldenBatter}`,
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
          max-w-7xl
        "
      >
        {/* =================================================
            ENCABEZADO
        ================================================= */}

        <motion.header
          variants={fadeUp}
          className="
            mx-auto
            max-w-3xl
            text-center
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
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]

                min-[390px]:text-[10px]
                min-[390px]:tracking-[0.38em]

                sm:text-[11px]
                sm:tracking-[0.5em]
              "
              style={{
                color: COLORS.toastedCaramel,
              }}
            >
              Nuestros momentos
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
            className="
              font-cursiveDancing
              text-[48px]
              leading-none

              min-[390px]:text-[54px]

              sm:text-[70px]
              md:text-[82px]
              lg:text-[92px]
            "
            style={{
              color: COLORS.gardenSage,
              textShadow: `
                0 4px 16px rgba(168, 135, 98, 0.12)
              `,
            }}
          >
            Nuestra historia
          </h2>

          {/* Divisor */}

          <div
            className="
              my-7
              flex
              items-center
              justify-center
              gap-3

              sm:my-9
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

            <motion.span
              className="h-2 w-2 rotate-45"
              style={{
                backgroundColor: COLORS.goldenBatter,
              }}
              animate={{
                rotate: [45, 225, 405],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
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
          </div>

          <p
            className="
              mx-auto
              max-w-xl
              text-[13px]
              leading-7

              sm:text-[15px]
              sm:leading-8

              md:max-w-2xl
              md:text-[16px]
            "
            style={{
              color: COLORS.toastedCaramel,
            }}
          >
            Un recorrido por los momentos más especiales que han marcado
            nuestra historia juntos.
          </p>
        </motion.header>

        {/* =================================================
            ÁREA DE GALERÍA
        ================================================= */}

        <motion.div
          variants={fadeScale}
          className="
            relative
            mx-auto
            mt-12
            w-full
            max-w-6xl

            sm:mt-16
            md:mt-20
          "
        >
          {/* Sombra exterior */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-8
              left-1/2
              h-20
              w-[72%]
              -translate-x-1/2
              rounded-full
              blur-3xl
            "
            style={{
              backgroundColor: "rgba(168, 135, 98, 0.18)",
            }}
          />

          {/* Marco principal */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              p-2.5

              min-[390px]:rounded-[28px]
              min-[390px]:p-3

              sm:rounded-[34px]
              sm:p-4

              md:rounded-[40px]
              md:p-5
            "
            style={{
              backgroundColor: COLORS.ivoryWhip,
              borderColor: "rgba(200, 161, 90, 0.58)",
              boxShadow: `
                0 28px 70px rgba(168, 135, 98, 0.15),
                inset 0 1px 0 rgba(249, 246, 238, 0.9)
              `,
            }}
          >
            {/* Marco interior */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-[6px]
                rounded-[19px]
                border

                min-[390px]:rounded-[23px]

                sm:inset-[8px]
                sm:rounded-[27px]

                md:inset-[10px]
                md:rounded-[31px]
              "
              style={{
                borderColor: "rgba(168, 170, 125, 0.28)",
              }}
            />

            {/* =================================================
                CARRUSEL
            ================================================= */}

            <div
              className="
                relative
                z-10
                aspect-[4/5]
                w-full
                overflow-hidden
                rounded-[18px]

                min-[390px]:rounded-[21px]

                sm:aspect-[4/3]
                sm:rounded-[26px]

                md:aspect-[16/10]
                md:rounded-[30px]

                lg:h-[620px]
                lg:aspect-auto
              "
              onMouseEnter={() => setPausado(true)}
              onMouseLeave={() => setPausado(false)}
              onFocus={() => setPausado(true)}
              onBlur={() => setPausado(false)}
            >
              <AnimatePresence
                initial={false}
                custom={direccion}
                mode="popLayout"
              >
                <motion.img
  key={index}
  src={images[index].src}
  alt={images[index].alt}
  custom={direccion}
  variants={imageVariants}
  initial="enter"
  animate="center"
  exit="exit"
  transition={{
    opacity: {
      duration: 0.75,
    },
    x: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
    scale: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  }}
  className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
  "
  style={{
    objectPosition: esDesktop
      ? images[index].positionDesktop
      : images[index].positionMobile,
  }}
/>
              </AnimatePresence>

              {/* Overlay inferior */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                "
                style={{
                  background: `
                    linear-gradient(
                      180deg,
                      transparent 0%,
                      transparent 58%,
                      rgba(168, 135, 98, 0.32) 100%
                    )
                  `,
                }}
              />

              {/* Número actual */}

              <div
                className="
                  absolute
                  left-4
                  top-4
                  z-20
                  flex
                  h-10
                  min-w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  px-3

                  sm:left-6
                  sm:top-6
                  sm:h-11
                  sm:min-w-11
                "
                style={{
                  backgroundColor: "rgba(249, 246, 238, 0.86)",
                  borderColor: "rgba(200, 161, 90, 0.55)",
                  boxShadow: `
                    0 8px 18px rgba(168, 135, 98, 0.14)
                  `,
                }}
              >
                <span
                  className="
                    font-serif
                    text-[12px]

                    sm:text-sm
                  "
                  style={{
                    color: COLORS.toastedCaramel,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                    mx-1
                    text-[9px]
                  "
                  style={{
                    color: COLORS.goldenBatter,
                  }}
                >
                  /
                </span>

                <span
                  className="
                    text-[9px]
                  "
                  style={{
                    color: COLORS.gardenSage,
                  }}
                >
                  {String(images.length).padStart(2, "0")}
                </span>
              </div>

              {/* Botón anterior */}

              <motion.button
                type="button"
                onClick={mostrarAnterior}
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                aria-label="Mostrar fotografía anterior"
                className="
                  absolute
                  left-3
                  top-1/2
                  z-20
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border

                  sm:left-5
                  sm:h-12
                  sm:w-12

                  md:left-7
                  md:h-14
                  md:w-14
                "
                style={{
                  backgroundColor: "rgba(249, 246, 238, 0.88)",
                  borderColor: "rgba(200, 161, 90, 0.58)",
                  boxShadow: `
                    0 10px 24px rgba(168, 135, 98, 0.18)
                  `,
                }}
              >
                <ChevronLeft
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="
                    h-5
                    w-5

                    md:h-6
                    md:w-6
                  "
                  style={{
                    color: COLORS.toastedCaramel,
                  }}
                />
              </motion.button>

              {/* Botón siguiente */}

              <motion.button
                type="button"
                onClick={mostrarSiguiente}
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                aria-label="Mostrar fotografía siguiente"
                className="
                  absolute
                  right-3
                  top-1/2
                  z-20
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border

                  sm:right-5
                  sm:h-12
                  sm:w-12

                  md:right-7
                  md:h-14
                  md:w-14
                "
                style={{
                  backgroundColor: "rgba(249, 246, 238, 0.88)",
                  borderColor: "rgba(200, 161, 90, 0.58)",
                  boxShadow: `
                    0 10px 24px rgba(168, 135, 98, 0.18)
                  `,
                }}
              >
                <ChevronRight
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="
                    h-5
                    w-5

                    md:h-6
                    md:w-6
                  "
                  style={{
                    color: COLORS.toastedCaramel,
                  }}
                />
              </motion.button>

              {/* Texto inferior */}

              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  z-20
                  w-[82%]
                  -translate-x-1/2
                  text-center

                  sm:bottom-7
                "
              >
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]

                    sm:text-[10px]
                    sm:tracking-[0.4em]
                  "
                  style={{
                    color: COLORS.ivoryWhip,
                    textShadow: `
                      0 2px 8px rgba(168, 135, 98, 0.75)
                    `,
                  }}
                >
                  Recuerdos para siempre
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              INDICADORES
          ================================================= */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              items-center
              justify-center
              gap-2.5

              sm:mt-9
              sm:gap-3
            "
          >
            {images.map((_, imageIndex) => {
              const activo = imageIndex === index;

              return (
                <motion.button
                  type="button"
                  key={imageIndex}
                  onClick={() => seleccionarImagen(imageIndex)}
                  aria-label={`Mostrar fotografía ${imageIndex + 1}`}
                  aria-current={activo ? "true" : undefined}
                  animate={{
                    width: activo ? 42 : 9,
                    opacity: activo ? 1 : 0.48,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.38,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    h-[9px]
                    rounded-full
                    border-0
                    p-0
                    outline-none

                    focus-visible:ring-2
                    focus-visible:ring-offset-2
                  "
                  style={{
                    backgroundColor: activo
                      ? COLORS.goldenBatter
                      : COLORS.gardenSage,

                    "--tw-ring-color": COLORS.goldenBatter,
                    "--tw-ring-offset-color": COLORS.ivoryWhip,
                  }}
                />
              );
            })}
          </div>

          {/* Texto de interacción */}

          <p
            className="
              mt-5
              text-center
              text-[9px]
              uppercase
              tracking-[0.2em]

              sm:mt-6
              sm:text-[10px]
              sm:tracking-[0.3em]
            "
            style={{
              color: COLORS.toastedCaramel,
            }}
          >
            Usa las flechas para recorrer nuestra historia
          </p>
        </motion.div>

        {/* =================================================
            ORNAMENTO INFERIOR
        ================================================= */}

        <motion.div
          variants={fadeUp}
          className="
            mt-12
            flex
            items-center
            justify-center
            gap-3

            sm:mt-16
            sm:gap-4
          "
        >
          <span
            className="
              h-px
              w-14

              sm:w-24
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
              font-serif
              text-lg
              leading-none

              sm:text-xl
            "
            style={{
              color: COLORS.gardenSage,
            }}
          >
            ❧
          </span>

          <span
            className="
              h-px
              w-14

              sm:w-24
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
    </motion.section>
  );
}