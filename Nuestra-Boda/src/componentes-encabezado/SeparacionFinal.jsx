"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

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

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
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

const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },

  show: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =====================================================
   COMPONENTE
===================================================== */

export default function ImagenSeparacion() {
  return (
    <motion.section
      variants={fadeUp}
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
            rgba(248, 230, 160, 0.44) 0%,
            rgba(248, 230, 160, 0.12) 27%,
            transparent 48%
          ),
          radial-gradient(
            circle at 88% 88%,
            rgba(168, 170, 125, 0.24) 0%,
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
          TEXTURA DE FONDO
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.1]
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
          opacity: [0.55, 0.82, 0.55],
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

        <motion.div
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
                Un momento para recordar
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
              text-[50px]
              leading-none

              min-[390px]:text-[56px]

              sm:text-[72px]
              md:text-[82px]
              lg:text-[88px]
            "
            style={{
              color: TONES.sageDeep,
              textShadow: `
                0 4px 16px rgba(85, 91, 63, 0.1)
              `,
            }}
          >
            Nos encantará verte
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
            Gracias por formar parte de nuestra historia y acompañarnos en
            este día tan especial.
          </p>
        </motion.div>

        {/* =================================================
            IMAGEN PRINCIPAL
        ================================================= */}

        <motion.div
          variants={imageReveal}
          className="
            relative
            mx-auto
            max-w-5xl
          "
        >
          {/* Sombra posterior */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-10
              h-[88%]
              w-[88%]
              -translate-x-1/2
              rounded-[34px]
              blur-3xl
            "
            style={{
              backgroundColor: "rgba(168, 135, 98, 0.18)",
            }}
          />

          {/* Marco exterior */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              p-2

              sm:rounded-[36px]
              sm:p-3

              lg:rounded-[44px]
            "
            style={{
              backgroundColor: "rgba(249, 246, 238, 0.85)",
              borderColor: "rgba(200, 161, 90, 0.58)",
              boxShadow: `
                0 30px 80px rgba(88, 66, 47, 0.16),
                inset 0 1px 0 rgba(249, 246, 238, 0.95)
              `,
            }}
          >
            {/* Línea dorada superior */}

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

            {/* Contenedor de la imagen */}

            <div
              className="
                relative
                min-h-[470px]
                overflow-hidden
                rounded-[22px]

                min-[390px]:min-h-[520px]

                sm:min-h-[620px]
                sm:rounded-[29px]

                md:min-h-[680px]

                lg:min-h-[760px]
                lg:rounded-[36px]
              "
            >
              <img
  src="/imagenfinal.jpg"
  alt="Momento especial de nuestra boda"
  className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    object-[center_20%]
    transition
    duration-1000
    hover:scale-[1.025]
  "
/>

              {/* Overlay */}

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
                      to top,
                      rgba(66, 72, 50, 0.92) 0%,
                      rgba(66, 72, 50, 0.28) 38%,
                      rgba(66, 72, 50, 0.04) 68%,
                      rgba(66, 72, 50, 0.12) 100%
                    )
                  `,
                }}
              />

              


              {/* Texto inferior */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-10
                  px-7
                  pb-10
                  text-center

                  min-[390px]:px-9

                  sm:px-14
                  sm:pb-14

                  md:px-20
                  md:pb-16

                  lg:px-28
                  lg:pb-20
                "
              >

                <p
                  className="
                    mx-auto
                    mt-4
                    max-w-3xl
                    font-cursiveDancing
                    text-[42px]
                    leading-[1.05]

                    min-[390px]:text-[48px]

                    sm:text-[62px]

                    md:text-[72px]

                    lg:text-[82px]
                  "
                  style={{
                    color: COLORS.ivoryWhip,
                    textShadow: `
                      0 6px 24px rgba(66, 72, 50, 0.32)
                    `,
                  }}
                >
                  ¡Te esperamos!
                </p>
                
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            FRASE INFERIOR
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
              text-[28px]
              leading-snug

              sm:text-[38px]
            "
            style={{
              color: COLORS.gardenSage,
            }}
          >
            Un día, un recuerdo, una historia para siempre
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