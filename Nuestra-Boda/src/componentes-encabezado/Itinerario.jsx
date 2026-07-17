"use client";

import { motion } from "framer-motion";
import {
  Wine,
  Heart,
  Soup,
  UtensilsCrossed,
  GlassWater,
  Music2,
  MoonStar,
  Clock3,
  Sparkles,
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
   TONOS PROFUNDOS PARA CONTRASTE
===================================================== */

const TONES = {
  sageDeep: "#555B3F",
  sageDark: "#414631",
  caramelDeep: "#765B42",
  caramelDark: "#594330",
};

/* =====================================================
   EVENTOS
===================================================== */

const events = [
  {
    time: "12:00",
    title: "Recepción",
    description: "Comenzamos este gran día recibiendo con alegría a cada uno de nuestros invitados.",
    icon: Wine,
  },
  {
    time: "12:30",
    title: "Ceremonia",
    description: "Uniremos nuestras vidas en una ceremonia llena de amor, fe y emociones inolvidables.",
    icon: Heart,
  },
  {
    time: "14:00",
    title: "Aperitivos",
    description: "Disfruta de un delicioso aperitivo mientras compartimos los primeros momentos de la celebración.",
    icon: Soup,
  },
  {
    time: "15:00",
    title: "Comida",
    description: "Compartiremos una exquisita comida preparada especialmente para celebrar este día tan importante.",
    icon: UtensilsCrossed,
  },
  {
    time: "18:00",
    title: "Baile",
    description: "Es momento de llenar la pista de alegría y crear recuerdos inolvidables juntos.",
    icon: Music2,
  },
  {
    time: "22:30",
    title: "Finaliza",
    description: "Gracias por acompañarnos y ser parte de uno de los días más importantes de nuestras vidas.",
    icon: MoonStar,
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
      delayChildren: 0.1,
      staggerChildren: 0.16,
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =====================================================
   COMPONENTE
===================================================== */

export default function ItinerarioTimelinePremium() {
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

        md:px-10
        md:py-32

        lg:px-14
        lg:py-36
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            ${COLORS.gardenSage} 0%,
            #9DA078 48%,
            ${COLORS.gardenSage} 100%
          )
        `,
      }}
    >
      {/* =================================================
          FIGURA ORGÁNICA SUPERIOR
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          -top-36
          h-80
          w-80
          rounded-full

          sm:h-[440px]
          sm:w-[440px]

          lg:-left-40
          lg:-top-52
          lg:h-[560px]
          lg:w-[560px]
        "
        style={{
          backgroundColor: COLORS.butterBloom,
          opacity: 0.28,
        }}
      />

      {/* =================================================
          FIGURA ORGÁNICA INFERIOR
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-36
          -right-32
          h-80
          w-80
          rounded-full

          sm:h-[440px]
          sm:w-[440px]

          lg:-bottom-52
          lg:-right-40
          lg:h-[560px]
          lg:w-[560px]
        "
        style={{
          backgroundColor: COLORS.toastedCaramel,
          opacity: 0.2,
        }}
      />

      {/* =================================================
          CÍRCULOS DECORATIVOS
      ================================================= */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-20
          h-28
          w-28
          rounded-full
          border

          sm:h-40
          sm:w-40
        "
        style={{
          borderColor: "rgba(249, 246, 238, 0.16)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-24
          left-[5%]
          h-20
          w-20
          rounded-full
          border

          sm:h-28
          sm:w-28
        "
        style={{
          borderColor: "rgba(248, 230, 160, 0.22)",
        }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* =================================================
          TEXTURA
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              rgba(249, 246, 238, 0.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "22px 22px",
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
                w-9

                sm:w-16
                md:w-20
              "
              style={{
                background: `
                  linear-gradient(
                    to right,
                    transparent,
                    ${COLORS.butterBloom}
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
              "
              style={{
                color: COLORS.ivoryWhip,
              }}
            >
              Itinerario
            </p>

            <span
              className="
                h-px
                w-9

                sm:w-16
                md:w-20
              "
              style={{
                background: `
                  linear-gradient(
                    to left,
                    transparent,
                    ${COLORS.butterBloom}
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

              min-[390px]:text-[58px]

              sm:text-[76px]
              md:text-[88px]
              lg:text-[98px]
            "
            style={{
              color: COLORS.ivoryWhip,
              textShadow: `
                0 5px 18px rgba(65, 70, 49, 0.2)
              `,
            }}
          >
            Nuestro día
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-[13px]
              leading-7

              sm:text-[15px]
              sm:leading-8
            "
            style={{
              color: COLORS.ivoryWhip,
              opacity: 0.9,
            }}
          >
            Hemos preparado cada momento para disfrutarlo y celebrarlo
            contigo.
          </p>

          {/* Ornamento */}

          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-3

              sm:mt-10
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
                    ${COLORS.butterBloom}
                  )
                `,
              }}
            />

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
                color: COLORS.butterBloom,
              }}
            />

            <span
              className="h-px w-12 sm:w-20"
              style={{
                background: `
                  linear-gradient(
                    to left,
                    transparent,
                    ${COLORS.butterBloom}
                  )
                `,
              }}
            />
          </div>
        </motion.header>

        {/* =================================================
            RUTA DE EVENTOS
        ================================================= */}

        <div
          className="
            relative
            mx-auto
            mt-16
            max-w-md

            sm:mt-20

            lg:max-w-none
            lg:mt-24
          "
        >
          {/* Ruta vertical para celular */}

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-8
              left-[25px]
              top-8
              w-px

              min-[390px]:left-[29px]

              sm:left-[33px]

              lg:hidden
            "
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  transparent,
                  rgba(248, 230, 160, 0.85) 10%,
                  rgba(248, 230, 160, 0.85) 90%,
                  transparent
                )
              `,
            }}
          />

          {/* Ruta horizontal para computadora */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-[8%]
              right-[8%]
              top-[42px]
              hidden
              h-px

              lg:block
            "
            style={{
              background: `
                linear-gradient(
                  to right,
                  transparent,
                  rgba(248, 230, 160, 0.8) 8%,
                  rgba(248, 230, 160, 0.8) 92%,
                  transparent
                )
              `,
            }}
          />

          <div
            className="
              flex
              flex-col
              gap-8

              sm:gap-10

              lg:grid
              lg:grid-cols-4
              lg:gap-5

              xl:gap-7
            "
          >
            {events.map((event, index) => {
              const Icon = event.icon;

              return (
                <motion.article
                  key={`${event.time}-${event.title}`}
                  variants={cardVariants}
                  className="
                    relative
                    grid
                    grid-cols-[52px_1fr]
                    items-start
                    gap-4

                    min-[390px]:grid-cols-[60px_1fr]
                    min-[390px]:gap-5

                    sm:grid-cols-[68px_1fr]
                    sm:gap-6

                    lg:block
                  "
                >
                  {/* =========================================
                      ESTACIÓN
                  ========================================= */}

                  <div
                    className="
                      relative
                      z-20
                      flex
                      h-[52px]
                      w-[52px]
                      items-center
                      justify-center
                      rounded-full
                      border-[3px]

                      min-[390px]:h-[60px]
                      min-[390px]:w-[60px]

                      sm:h-[68px]
                      sm:w-[68px]

                      lg:mx-auto
                      lg:h-[84px]
                      lg:w-[84px]
                      lg:border-[5px]
                    "
                    style={{
                      backgroundColor: TONES.sageDeep,
                      borderColor: COLORS.butterBloom,
                      boxShadow: `
                        0 10px 26px rgba(65, 70, 49, 0.22),
                        0 0 0 5px rgba(249, 246, 238, 0.12)
                      `,
                    }}
                  >
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.45}
                      className="
                        h-5
                        w-5

                        min-[390px]:h-6
                        min-[390px]:w-6

                        sm:h-7
                        sm:w-7
                      "
                      style={{
                        color: COLORS.ivoryWhip,
                      }}
                    />

                    {/* Número */}

                    <span
                      className="
                        absolute
                        -right-1
                        -top-1
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        font-serif
                        text-[9px]

                        sm:h-6
                        sm:w-6
                        sm:text-[10px]
                      "
                      style={{
                        backgroundColor: COLORS.goldenBatter,
                        color: COLORS.ivoryWhip,
                      }}
                    >
                      {index + 1}
                    </span>
                  </div>

                  {/* =========================================
                      CONTENIDO DEL EVENTO
                  ========================================= */}

                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      relative
                      overflow-hidden
                      rounded-[0_24px_24px_24px]
                      px-5
                      py-6

                      min-[390px]:px-6

                      sm:rounded-[0_28px_28px_28px]
                      sm:px-7
                      sm:py-8

                      lg:mt-8
                      lg:min-h-[330px]
                      lg:rounded-[28px]
                      lg:px-6
                      lg:py-8
                      lg:text-center

                      xl:min-h-[350px]
                      xl:px-8
                    "
                    style={{
                      backgroundColor: COLORS.ivoryWhip,
                      boxShadow: `
                        0 20px 45px rgba(65, 70, 49, 0.14)
                      `,
                    }}
                  >
                    {/* Número grande decorativo */}

                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        -right-2
                        -top-7
                        font-serif
                        text-[110px]
                        leading-none

                        sm:text-[132px]

                        lg:-right-3
                        lg:-top-8
                        lg:text-[145px]
                      "
                      style={{
                        color: COLORS.butterBloom,
                        opacity: 0.34,
                      }}
                    >
                      0{index + 1}
                    </span>

                    {/* Franja lateral móvil */}

                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-0
                        left-0
                        top-0
                        w-[5px]

                        lg:bottom-auto
                        lg:right-0
                        lg:top-0
                        lg:h-[5px]
                        lg:w-full
                      "
                      style={{
                        background: `
                          linear-gradient(
                            to bottom,
                            ${COLORS.goldenBatter},
                            ${COLORS.toastedCaramel}
                          )
                        `,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Hora */}

                      <div
                        className="
                          flex
                          items-center
                          gap-2

                          lg:justify-center
                        "
                      >
                        <Clock3
                          aria-hidden="true"
                          strokeWidth={1.5}
                          className="h-4 w-4"
                          style={{
                            color: COLORS.goldenBatter,
                          }}
                        />

                        <p
                          className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.28em]

                            sm:text-[11px]
                            sm:tracking-[0.36em]
                          "
                          style={{
                            color: TONES.caramelDeep,
                          }}
                        >
                          {event.time} hrs.
                        </p>
                      </div>

                      {/* Título */}

                      <h3
                        className="
                          mt-4
                          font-cursiveDancing
                          text-[36px]
                          leading-none

                          min-[390px]:text-[40px]

                          sm:text-[46px]

                          lg:mt-7
                          lg:text-[44px]

                          xl:text-[50px]
                        "
                        style={{
                          color: TONES.sageDeep,
                        }}
                      >
                        {event.title}
                      </h3>

                      {/* Línea */}

                      <div
                        className="
                          my-5
                          h-px
                          w-16

                          sm:w-20

                          lg:mx-auto
                          lg:my-6
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

                      {/* Descripción */}

                      <p
                        className="
                          max-w-md
                          text-[13px]
                          leading-7

                          sm:text-[14px]
                          sm:leading-7

                          lg:mx-auto
                          lg:max-w-[230px]
                        "
                        style={{
                          color: TONES.caramelDeep,
                        }}
                      >
                        {event.description}
                      </p>

                      {/* Pie */}

                      <div
                        className="
                          mt-5
                          flex
                          items-center
                          gap-2

                          sm:mt-6

                          lg:mt-8
                          lg:justify-center
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                          "
                          style={{
                            backgroundColor: COLORS.goldenBatter,
                          }}
                        />

                        <span
                          className="
                            h-px
                            w-9
                          "
                          style={{
                            backgroundColor: COLORS.gardenSage,
                            opacity: 0.6,
                          }}
                        />

                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                          "
                          style={{
                            backgroundColor: COLORS.goldenBatter,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =================================================
            MENSAJE FINAL
        ================================================= */}

        <motion.div
          variants={fadeUp}
          className="
            mx-auto
            mt-16
            flex
            max-w-2xl
            flex-col
            items-center
            text-center

            sm:mt-20

            lg:mt-24
          "
        >
          <div
            className="
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
                    ${COLORS.butterBloom}
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
                color: COLORS.butterBloom,
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
                    ${COLORS.butterBloom}
                  )
                `,
              }}
            />
          </div>

          <p
            className="
              mt-6
              font-cursiveDancing
              text-[30px]
              leading-snug

              sm:text-[38px]
            "
            style={{
              color: COLORS.ivoryWhip,
            }}
          >
            Cada momento será aún más especial con tu presencia
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}