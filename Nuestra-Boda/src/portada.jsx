import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Countdown from "./componentes-encabezado/encabeza-cuenta";

/* =====================================================
   PALETA DE COLORES
===================================================== */

const COLORS = {
  butterBloom: "#F8E6A0",
  goldenBatter: "#C8A15A",
  toastedCaramel: "#A88762",
  ivoryWhip: "#F9F6EE",
  gardenSage: "#A8AA7D",
};

/* =====================================================
   TONOS PROFUNDOS DERIVADOS DE LA PALETA
   Se usan únicamente para dar contraste a los textos.
===================================================== */

const TONES = {
  sageDeep: "#555B3F",
  sageDark: "#424832",
  caramelDeep: "#72583F",
  caramelDark: "#58422F",
};

export default function Portada() {
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);

  const [introActiva, setIntroActiva] = useState(true);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [abrirSobre, setAbrirSobre] = useState(false);
  const [iniciando, setIniciando] = useState(false);

  const [invitados, setInvitados] = useState("Invitado especial");
  const [pases, setPases] = useState(1);

  /* =====================================================
   DECODIFICAR INVITACIÓN
===================================================== */

const decodificarInvitacion = (id) => {
  try {
    // Base64 URL Safe → Base64 normal
    const base64 = id
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const binario = window.atob(base64);

    const bytes = Uint8Array.from(
      binario,
      (c) => c.charCodeAt(0)
    );

    const textoInvertido =
      new TextDecoder().decode(bytes);

    const json = textoInvertido
      .split("")
      .reverse()
      .join("");

    return JSON.parse(json);

  } catch (error) {
    console.error(
      "No fue posible leer la invitación:",
      error
    );

    return null;
  }
};

/* =====================================================
   LEER DATOS DE LA URL
===================================================== */

useEffect(() => {
  const params = new URLSearchParams(
    window.location.search
  );

  /*
    --------------------------------------------
    NUEVO FORMATO
    /?id=xxxxxxxx
    --------------------------------------------
  */

  const id = params.get("id");

  if (id) {
    const datos =
      decodificarInvitacion(id);

    if (datos) {
      if (datos.nombre) {
        setInvitados(datos.nombre);
      }

      if (
        Number.isFinite(Number(datos.pases))
      ) {
        setPases(Number(datos.pases));
      }
    }
  }

  /*
    --------------------------------------------
    FORMATO ANTIGUO
    /?nombre=&pases=
    (compatibilidad)
    --------------------------------------------
  */

  else {

    const nombre = params.get("nombre");

    const cantidad =
      Number.parseInt(
        params.get("pases"),
        10
      );

    if (nombre?.trim()) {
      setInvitados(nombre.trim());
    }

    if (
      Number.isFinite(cantidad) &&
      cantidad > 0
    ) {
      setPases(cantidad);
    }
  }

  return () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

}, []);
  /* =====================================================
     ABRIR SOBRE
  ===================================================== */

  const iniciarExperiencia = async () => {
    if (iniciando || abrirSobre) return;

    setIniciando(true);
    setAbrirSobre(true);

    if (audioRef.current) {
      try {
        audioRef.current.volume = 0.45;
        await audioRef.current.play();
      } catch (error) {
        console.warn("El navegador bloqueó el audio:", error);
      }
    }

    timeoutRef.current = setTimeout(() => {
      setMostrarContenido(true);
      setIntroActiva(false);
    }, 1900);
  };

  const textoLugar = pases === 1 ? "lugar" : "lugares";

  return (
    <main
      className="relative w-full overflow-x-hidden"
      style={{
        backgroundColor: COLORS.ivoryWhip,
        color: TONES.caramelDark,
      }}
    >
      {/* =================================================
          AUDIO
      ================================================= */}

      <audio ref={audioRef} loop preload="auto">
        <source src="/musica.mp3" type="audio/mpeg" />
      </audio>

      {/* =================================================
          INTRO DEL SOBRE
      ================================================= */}

      <AnimatePresence mode="wait">
        {introActiva && (
          <motion.section
            key="introduccion"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.01,
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="
              fixed
              inset-0
              z-50
              overflow-x-hidden
              overflow-y-auto
            "
            style={{
              background: `
                linear-gradient(
                  180deg,
                  ${COLORS.ivoryWhip} 0%,
                  #F5F0E5 52%,
                  #E8E4D3 100%
                )
              `,
            }}
          >
            {/* Decoración superior izquierda */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-16
                -top-16
                h-44
                w-44
                rounded-full
                opacity-40
                blur-3xl

                sm:h-64
                sm:w-64
              "
              style={{
                backgroundColor: COLORS.butterBloom,
              }}
            />

            {/* Decoración inferior derecha */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-20
                -right-20
                h-52
                w-52
                rounded-full
                opacity-20
                blur-3xl

                sm:h-72
                sm:w-72
              "
              style={{
                backgroundColor: COLORS.gardenSage,
              }}
            />

            {/* Líneas decorativas laterales */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-4
                top-4
                h-20
                w-px

                sm:left-8
                sm:top-8
                sm:h-28
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
                right-4
                top-4
                h-20
                w-px

                sm:right-8
                sm:top-8
                sm:h-28
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
              className="
                relative
                z-10
                flex
                min-h-[100svh]
                w-full
                flex-col
                items-center
                justify-center
                px-4
                py-8
                text-center

                min-[390px]:px-5
                sm:px-8
                sm:py-12
                md:py-14

                landscape:min-h-[760px]
              "
            >
              {/* =========================================
                  ENCABEZADO
              ========================================= */}

              <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mb-6
                  w-full
                  max-w-3xl

                  sm:mb-8
                  md:mb-9
                "
              >
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    justify-center
                    gap-3

                    sm:mb-5
                    sm:gap-5
                  "
                >
                  <span
                    className="h-px w-10 sm:w-16 md:w-20"
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
                      tracking-[0.34em]

                      min-[390px]:text-[10px]
                      sm:text-[11px]
                      sm:tracking-[0.52em]
                    "
                    style={{ color: TONES.caramelDeep }}
                  >
                    Nuestra boda
                  </p>

                  <span
                    className="h-px w-10 sm:w-16 md:w-20"
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

                <div className="flex flex-col items-center">
                  <h1
                    className="
                      font-cursiveDancing
                      text-[44px]
                      leading-[0.9]

                      min-[390px]:text-[50px]
                      sm:text-[64px]
                      md:text-[78px]
                      lg:text-[88px]
                    "
                    style={{
                      color: TONES.sageDeep,
                      textShadow: `
                        0 3px 10px rgba(85, 91, 63, 0.12)
                      `,
                    }}
                  >
                    Moisés Orozco Pacheco
                  </h1>

                  <span
                    className="
                      my-1
                      font-serif
                      text-lg
                      italic

                      sm:my-2
                      sm:text-2xl
                      md:text-3xl
                    "
                    style={{ color: COLORS.goldenBatter }}
                  >
                    &
                  </span>

                  <h2
                    className="
                      font-cursiveDancing
                      text-[44px]
                      leading-[0.9]

                      min-[390px]:text-[50px]
                      sm:text-[64px]
                      md:text-[78px]
                      lg:text-[88px]
                    "
                    style={{
                      color: TONES.sageDeep,
                      textShadow: `
                        0 3px 10px rgba(85, 91, 63, 0.12)
                      `,
                    }}
                  >
                    Mariana Cruz Bonifacio
                  </h2>
                </div>

                <div
                  className="
                    mx-auto
                    mt-5
                    h-px
                    w-24

                    sm:mt-6
                    sm:w-32
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

                <p
                  className="
                    mt-4
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.26em]

                    sm:text-xs
                    sm:tracking-[0.42em]
                    md:text-sm
                  "
                  style={{ color: TONES.caramelDeep }}
                >
                  13 · Marzo · 2027
                </p>
              </motion.header>

              {/* =========================================
                  SOBRE
              ========================================= */}

              <motion.button
                type="button"
                onClick={iniciarExperiencia}
                disabled={iniciando}
                aria-label="Abrir invitación"
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  abrirSobre
                    ? undefined
                    : {
                        y: -4,
                        scale: 1.01,
                      }
                }
                whileTap={
                  abrirSobre
                    ? undefined
                    : {
                        scale: 0.985,
                      }
                }
                className="
                  relative
                  block
                  aspect-[1.43/1]
                  w-[90vw]
                  max-w-[350px]
                  cursor-pointer
                  border-0
                  bg-transparent
                  p-0
                  outline-none

                  min-[390px]:w-[88vw]
                  sm:max-w-[440px]
                  md:max-w-[500px]

                  focus-visible:ring-2
                  focus-visible:ring-offset-4

                  disabled:cursor-default
                "
                style={{
                  perspective: "1800px",
                  WebkitTapHighlightColor: "transparent",
                  "--tw-ring-color": COLORS.goldenBatter,
                  "--tw-ring-offset-color": COLORS.ivoryWhip,
                }}
              >
                {/* Sombra inferior */}

                <motion.div
                  aria-hidden="true"
                  animate={
                    abrirSobre
                      ? {
                          opacity: 0.15,
                          scaleX: 0.82,
                        }
                      : {
                          opacity: 0.28,
                          scaleX: 1,
                        }
                  }
                  transition={{
                    duration: 1.1,
                  }}
                  className="
                    absolute
                    -bottom-5
                    left-1/2
                    h-8
                    w-[72%]
                    -translate-x-1/2
                    rounded-full
                    blur-xl

                    sm:-bottom-7
                    sm:h-11
                  "
                  style={{
                    backgroundColor: TONES.caramelDark,
                  }}
                />

                {/* Carta interior */}

                <motion.div
                  className="
                    absolute
                    left-1/2
                    top-[7%]
                    z-10
                    flex
                    h-[80%]
                    w-[82%]
                    -translate-x-1/2
                    flex-col
                    items-center
                    justify-between
                    overflow-hidden
                    rounded-[14px]
                    px-4
                    py-4

                    min-[390px]:rounded-[17px]
                    min-[390px]:px-5
                    min-[390px]:py-5

                    sm:rounded-[20px]
                    sm:px-7
                    sm:py-6
                  "
                  style={{
                    backgroundColor: COLORS.ivoryWhip,
                    border: `1px solid ${COLORS.goldenBatter}`,
                    boxShadow: `
                      0 12px 26px rgba(88, 66, 47, 0.18),
                      inset 0 0 0 5px rgba(248, 230, 160, 0.14)
                    `,
                  }}
                  animate={
                    abrirSobre
                      ? {
                          y: "-43%",
                          scale: 1.025,
                        }
                      : {
                          y: 0,
                          scale: 1,
                        }
                  }
                  transition={{
                    duration: 1.35,
                    delay: abrirSobre ? 0.35 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Marco interior */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-[7px]
                      rounded-[10px]
                      border

                      min-[390px]:rounded-[13px]
                      sm:inset-[9px]
                      sm:rounded-[15px]
                    "
                    style={{
                      borderColor: "rgba(200, 161, 90, 0.4)",
                    }}
                  />

                  {/* Decoración superior */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      w-full
                      flex-col
                      items-center
                    "
                  >
                    <span
                      className="
                        mb-2
                        block
                        h-px
                        w-12

                        sm:mb-3
                        sm:w-16
                      "
                      style={{ backgroundColor: COLORS.goldenBatter }}
                    />

                    <p
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.28em]

                        min-[390px]:text-[8px]
                        sm:text-[10px]
                        sm:tracking-[0.42em]
                      "
                      style={{ color: TONES.caramelDeep }}
                    >
                      Invitación
                    </p>
                  </div>

                  {/* Nombres */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      flex-col
                      items-center
                      justify-center
                      leading-none
                    "
                  >
                    <p
                      className="
                        font-cursiveDancing
                        text-[22px]

                        min-[390px]:text-[26px]
                        sm:text-[35px]
                        md:text-[39px]
                      "
                      style={{ color: TONES.sageDeep }}
                    >
                      Moisés
                    </p>

                    <span
                      className="
                        my-1
                        font-serif
                        text-xs
                        italic

                        sm:text-base
                      "
                      style={{ color: COLORS.goldenBatter }}
                    >
                      &
                    </span>

                    <p
                      className="
                        font-cursiveDancing
                        text-[22px]

                        min-[390px]:text-[26px]
                        sm:text-[35px]
                        md:text-[39px]
                      "
                      style={{ color: TONES.sageDeep }}
                    >
                      Mariana
                    </p>
                  </div>

                  {/* Texto inferior */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      w-full
                      flex-col
                      items-center
                    "
                  >
                    <p
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]

                        min-[390px]:text-[8px]
                        sm:text-[10px]
                        sm:tracking-[0.34em]
                      "
                      style={{ color: TONES.caramelDeep }}
                    >
                      Toca para abrir
                    </p>

                    <span
                      className="
                        mt-2
                        block
                        h-px
                        w-12

                        sm:mt-3
                        sm:w-16
                      "
                      style={{ backgroundColor: COLORS.goldenBatter }}
                    />
                  </div>
                </motion.div>

                {/* Cuerpo del sobre */}

                <div
                  className="
                    absolute
                    inset-0
                    overflow-hidden
                    rounded-[20px]
                    border

                    min-[390px]:rounded-[24px]
                    sm:rounded-[28px]
                  "
                  style={{
                    background: `
                      linear-gradient(
                        135deg,
                        #AEB08A 0%,
                        ${COLORS.gardenSage} 48%,
                        #92966C 100%
                      )
                    `,
                    borderColor: "rgba(85, 91, 63, 0.32)",
                    boxShadow: `
                      0 24px 55px rgba(88, 66, 47, 0.24),
                      inset 0 1px 0 rgba(249, 246, 238, 0.55),
                      inset 0 -8px 18px rgba(66, 72, 50, 0.16)
                    `,
                  }}
                >
                  {/* Textura sutil */}

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(
                          45deg,
                          rgba(249, 246, 238, 0.45) 0px,
                          rgba(249, 246, 238, 0.45) 1px,
                          transparent 1px,
                          transparent 7px
                        )
                      `,
                    }}
                  />

                  {/* Solapa izquierda */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[76%]
                      w-[59%]
                    "
                    style={{
                      clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                      background: `
                        linear-gradient(
                          135deg,
                          rgba(249, 246, 238, 0.14),
                          rgba(85, 91, 63, 0.08)
                        )
                      `,
                    }}
                  />

                  {/* Solapa derecha */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      right-0
                      h-[76%]
                      w-[59%]
                    "
                    style={{
                      clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                      background: `
                        linear-gradient(
                          225deg,
                          rgba(249, 246, 238, 0.12),
                          rgba(85, 91, 63, 0.1)
                        )
                      `,
                    }}
                  />

                  {/* Borde interior */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-[7px]
                      rounded-[15px]
                      border

                      min-[390px]:rounded-[19px]
                      sm:inset-[9px]
                      sm:rounded-[21px]
                    "
                    style={{
                      borderColor: "rgba(249, 246, 238, 0.28)",
                    }}
                  />
                </div>

                {/* Tapa superior */}

                <motion.div
                  className="
                    absolute
                    left-0
                    top-0
                    z-20
                    h-[54%]
                    w-full
                    origin-top
                    rounded-t-[20px]

                    min-[390px]:rounded-t-[24px]
                    sm:rounded-t-[28px]
                  "
                  style={{
                    clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                    background: `
                      linear-gradient(
                        145deg,
                        #B5B792 0%,
                        ${COLORS.gardenSage} 60%,
                        #8E9268 100%
                      )
                    `,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                    boxShadow: `
                      0 14px 24px rgba(66, 72, 50, 0.2),
                      inset 0 1px 0 rgba(249, 246, 238, 0.45)
                    `,
                  }}
                  animate={
                    abrirSobre
                      ? {
                          rotateX: -178,
                          y: -1,
                        }
                      : {
                          rotateX: 0,
                          y: 0,
                        }
                  }
                  transition={{
                    duration: 1.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Sello */}

                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-30
                    flex
                    items-center
                    justify-center
                  "
                  animate={
                    abrirSobre
                      ? {
                          opacity: 0,
                          scale: 0.55,
                          y: -18,
                        }
                      : {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }
                  }
                  transition={{
                    duration: 0.58,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className="
                      relative
                      flex
                      h-[68px]
                      w-[68px]
                      items-center
                      justify-center

                      min-[390px]:h-[78px]
                      min-[390px]:w-[78px]

                      sm:h-[96px]
                      sm:w-[96px]
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                      "
                      style={{
                        background: `
                          radial-gradient(
                            circle at 30% 25%,
                            ${COLORS.butterBloom} 0%,
                            ${COLORS.goldenBatter} 48%,
                            #A77A32 100%
                          )
                        `,
                        boxShadow: `
                          inset 0 4px 8px rgba(249, 246, 238, 0.45),
                          inset 0 -8px 14px rgba(88, 66, 47, 0.34),
                          0 10px 22px rgba(88, 66, 47, 0.3)
                        `,
                      }}
                    />

                    <div
                      className="
                        absolute
                        inset-[5px]
                        rounded-full
                        border

                        sm:inset-[7px]
                      "
                      style={{
                        borderColor: "rgba(249, 246, 238, 0.58)",
                      }}
                    />

                    <div
                      className="
                        relative
                        z-10
                        font-cursiveDancing
                        text-[25px]

                        min-[390px]:text-[29px]
                        sm:text-[36px]
                      "
                      style={{
                        color: COLORS.ivoryWhip,
                        textShadow: "0 2px 4px rgba(88, 66, 47, 0.35)",
                      }}
                    >
                      M&M
                    </div>
                  </div>
                </motion.div>

                {/* Texto ABRIR */}

                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-4
                    z-40
                    flex
                    justify-center

                    sm:top-6
                  "
                  animate={
                    abrirSobre
                      ? {
                          opacity: 0,
                          y: -5,
                        }
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.35em]

                      min-[390px]:text-[9px]
                      sm:text-[10px]
                      sm:tracking-[0.48em]
                    "
                    style={{ color: COLORS.ivoryWhip }}
                  >
                    Abrir
                  </p>
                </motion.div>
              </motion.button>

              {/* =========================================
                  PASES
              ========================================= */}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.42,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-8
                  flex
                  w-full
                  max-w-xl
                  flex-col
                  items-center

                  sm:mt-10
                  md:mt-11
                "
              >
                <div
                  className="
                    mb-4
                    h-px
                    w-20

                    sm:mb-5
                    sm:w-28
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
                  style={{ color: TONES.caramelDeep }}
                >
                  Hemos reservado
                </p>

                <span
                  className="
                    my-1
                    block
                    font-serif
                    text-[42px]
                    font-light
                    leading-none

                    min-[390px]:text-[48px]
                    sm:text-[58px]
                    md:text-[64px]
                  "
                  style={{ color: TONES.sageDeep }}
                >
                  {pases}
                </span>

                <p
                  className="
                    text-center
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]

                    min-[390px]:text-[10px]
                    sm:text-[11px]
                    sm:tracking-[0.4em]
                  "
                  style={{ color: TONES.caramelDeep }}
                >
                  {textoLugar} en su honor
                </p>

                <div
                  className="
                    my-4
                    h-px
                    w-14

                    sm:my-5
                    sm:w-20
                  "
                  style={{
                    backgroundColor: COLORS.goldenBatter,
                    opacity: 0.8,
                  }}
                />

                <div
                  className="
                    max-w-[92vw]
                    rounded-full
                    border
                    px-4
                    py-2.5

                    sm:px-6
                    sm:py-3
                  "
                  style={{
                    backgroundColor: COLORS.ivoryWhip,
                    borderColor: "rgba(200, 161, 90, 0.65)",
                    boxShadow: `
                      0 6px 18px rgba(88, 66, 47, 0.08)
                    `,
                  }}
                >
                  <p
                    className="
                      break-words
                      text-center
                      text-[10px]
                      tracking-[0.08em]

                      min-[390px]:text-[11px]
                      sm:text-xs
                      sm:tracking-[0.14em]
                    "
                    style={{ color: TONES.caramelDeep }}
                  >
                    Invitado:
                    <span
                      className="ml-2 font-semibold"
                      style={{ color: TONES.sageDeep }}
                    >
                      {invitados}
                    </span>
                  </p>
                </div>

                <motion.p
                  animate={
                    abrirSobre
                      ? {
                          opacity: 0,
                          y: 4,
                        }
                      : {
                          opacity: [0.55, 1, 0.55],
                          y: [0, -2, 0],
                        }
                  }
                  transition={
                    abrirSobre
                      ? {
                          duration: 0.3,
                        }
                      : {
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                  className="
                    mt-5
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.23em]

                    sm:mt-6
                    sm:text-[9px]
                    sm:tracking-[0.32em]
                  "
                  style={{ color: TONES.caramelDeep }}
                >
                  Toca el sobre para continuar
                </motion.p>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* =================================================
          PORTADA PRINCIPAL
      ================================================= */}

      <section
        className="
          relative
          min-h-[100svh]
          w-full
          overflow-hidden
        "
        style={{
          backgroundColor: TONES.sageDeep,
        }}
      >
        {/* Imagen */}

        <motion.img
          src="/portada.jpg"
          alt="Valeria y Alejandro"
          initial={{
            opacity: 0,
            scale: 1.06,
          }}
          animate={
            mostrarContenido
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  scale: 1.06,
                }
          }
          transition={{
            opacity: {
              duration: 1.1,
              ease: "easeOut",
            },
            scale: {
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="
  absolute
  inset-0
  h-full
  w-full
  object-cover

  object-center

  md:object-[center_35%]
  lg:object-[center_30%]
"
        />

        {/* Gradiente suave para legibilidad.
            No es una tarjeta y no tiene desenfoque. */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: mostrarContenido ? 1 : 0,
          }}
          transition={{
            duration: 1,
          }}
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(66, 72, 50, 0.14) 0%,
                rgba(66, 72, 50, 0.02) 35%,
                rgba(66, 72, 50, 0.16) 58%,
                rgba(66, 72, 50, 0.64) 100%
              )
            `,
          }}
        />

        {/* Contenido sin tarjeta transparente */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            mostrarContenido
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-10
            flex
            min-h-[100svh]
            w-full
            flex-col
            items-center
            justify-end
            px-5
            pb-12
            pt-24
            text-center

            sm:px-8
            sm:pb-16

            md:justify-center
            md:px-12
            md:pb-12

            lg:px-20
          "
        >
          <div className="w-full max-w-4xl">
            {/* Frase */}

            <div
              className="
                mb-5
                flex
                items-center
                justify-center
                gap-3

                sm:mb-6
                sm:gap-5
              "
            >
              <span
                className="h-px w-8 sm:w-16"
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
                className="h-px w-8 sm:w-16"
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

            {/* Nombres */}

            <h1
              className="
                font-cursiveDancing
                text-[50px]
                leading-[0.9]

                min-[390px]:text-[58px]
                sm:text-[80px]
                md:text-[96px]
                lg:text-[108px]
              "
              style={{
                color: COLORS.ivoryWhip,
                textShadow: `
                  0 3px 5px rgba(66, 72, 50, 0.8),
                  0 8px 26px rgba(66, 72, 50, 0.5)
                `,
              }}
            >
              Moisés
            </h1>

            <span
              className="
                my-1
                block
                font-serif
                text-xl
                italic

                sm:my-2
                sm:text-3xl
              "
              style={{
                color: COLORS.butterBloom,
                textShadow: `
                  0 2px 8px rgba(66, 72, 50, 0.75)
                `,
              }}
            >
              &
            </span>

            <h2
              className="
                font-cursiveDancing
                text-[50px]
                leading-[0.9]

                min-[390px]:text-[58px]
                sm:text-[80px]
                md:text-[96px]
                lg:text-[108px]
              "
              style={{
                color: COLORS.ivoryWhip,
                textShadow: `
                  0 3px 5px rgba(66, 72, 50, 0.8),
                  0 8px 26px rgba(66, 72, 50, 0.5)
                `,
              }}
            >
              Mariana
            </h2>

            {/* Fecha */}

            <div
              className="
                mx-auto
                my-6
                h-px
                w-24

                sm:my-7
                sm:w-40
              "
              style={{
                background: `
                  linear-gradient(
                    to right,
                    transparent,
                    ${COLORS.butterBloom},
                    transparent
                  )
                `,
              }}
            />

            <p
              className="
                mb-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.27em]

                sm:text-xs
                sm:tracking-[0.46em]
                md:text-sm
              "
              style={{
                color: COLORS.ivoryWhip,
                textShadow: `
                  0 2px 8px rgba(66, 72, 50, 0.85)
                `,
              }}
            >
              13 · Marzo · 2027
            </p>

            {/* Contador */}

            <Countdown targetDate="2027-03-13T00:00:00" />
          </div>
        </motion.div>
      </section>
    </main>
  );
}