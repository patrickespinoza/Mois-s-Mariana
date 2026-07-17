"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Copy,
  Link2,
  MessageCircle,
  Sparkles,
  TicketCheck,
  UserRound,
  UsersRound,
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
    y: 35,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =====================================================
   CODIFICAR DATOS DE LA INVITACIÓN
===================================================== */

/*
  El enlace final tendrá este formato:

  /?id=eyJ...

  El nombre y los pases ya no aparecerán directamente
  en la URL.

  Nota:
  Esto oculta los datos de forma práctica, pero no es
  cifrado criptográfico de alta seguridad.
*/
const codificarInvitacion = (datos) => {
  const json = JSON.stringify(datos);

  /*
    Invertimos el texto para conservar compatibilidad
    con el lector del componente Confirmacion.
  */
  const textoInvertido = json
    .split("")
    .reverse()
    .join("");

  /*
    Convertimos correctamente caracteres como:
    á, é, í, ó, ú, ñ y emojis.
  */
  const bytes = new TextEncoder().encode(
    textoInvertido
  );

  let textoBinario = "";

  bytes.forEach((byte) => {
    textoBinario += String.fromCharCode(byte);
  });

  /*
    Base64 URL-safe:
    + se convierte en -
    / se convierte en _
    = se elimina
  */
  return window
    .btoa(textoBinario)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
};

/* =====================================================
   COMPONENTE
===================================================== */

export default function Generador() {
  const [nombre, setNombre] = useState("");
  const [pases, setPases] = useState("");
  const [link, setLink] = useState("");

  const [error, setError] = useState("");
  const [copiado, setCopiado] = useState(false);
  const [mensajeCopiado, setMensajeCopiado] =
    useState(false);

  const [mensajeWhatsapp, setMensajeWhatsapp] =
    useState("");

  /* =====================================================
     CREAR MENSAJE PREDETERMINADO PARA WHATSAPP
  ===================================================== */

  const crearMensajeWhatsapp = (
    nombreInvitado,
    numeroPases,
    enlace
  ) => {
    const textoPases =
      Number(numeroPases) === 1
        ? "Se ha reservado 1 lugar para ti."
        : `Se han reservado ${numeroPases} lugares para ustedes.`;

    return `Hola ${nombreInvitado} ✨

Nos dará mucha alegría compartir contigo uno de los días más especiales de nuestras vidas.

${textoPases}

Puedes consultar tu invitación y confirmar tu asistencia en el siguiente enlace:

${enlace}`;
  };

  /* =====================================================
     GENERAR ENLACE
  ===================================================== */

  const generarLink = () => {
    const nombreLimpio = nombre.trim();
    const pasesConvertidos = Number(pases);

    if (!nombreLimpio) {
      setError(
        "Escribe el nombre del invitado o de la familia."
      );
      return;
    }

    if (
      !Number.isFinite(pasesConvertidos) ||
      pasesConvertidos < 1
    ) {
      setError(
        "El número de pases debe ser igual o mayor a 1."
      );
      return;
    }

    setError("");
    setCopiado(false);
    setMensajeCopiado(false);

    const datosInvitacion = {
      nombre: nombreLimpio,
      pases: Math.floor(pasesConvertidos),
    };

    const idEncriptado = codificarInvitacion(
      datosInvitacion
    );

    const url = `${
      window.location.origin
    }/?id=${encodeURIComponent(idEncriptado)}`;

    setLink(url);

    setMensajeWhatsapp(
      crearMensajeWhatsapp(
        nombreLimpio,
        Math.floor(pasesConvertidos),
        url
      )
    );
  };

  /* =====================================================
     COPIAR ENLACE
  ===================================================== */

  const copiarLink = async () => {
    if (!link) return;

    try {
      await navigator.clipboard.writeText(link);
      setCopiado(true);

      window.setTimeout(() => {
        setCopiado(false);
      }, 2200);
    } catch (errorCopiado) {
      console.error(
        "No fue posible copiar el enlace:",
        errorCopiado
      );

      setError(
        "No se pudo copiar el enlace. Inténtalo nuevamente."
      );
    }
  };

  /* =====================================================
     COPIAR MENSAJE COMPLETO
  ===================================================== */

  const copiarMensaje = async () => {
    if (!mensajeWhatsapp.trim()) return;

    try {
      await navigator.clipboard.writeText(
        mensajeWhatsapp
      );

      setMensajeCopiado(true);

      window.setTimeout(() => {
        setMensajeCopiado(false);
      }, 2200);
    } catch (errorCopiado) {
      console.error(
        "No fue posible copiar el mensaje:",
        errorCopiado
      );

      setError(
        "No se pudo copiar el mensaje. Inténtalo nuevamente."
      );
    }
  };

  /* =====================================================
     ACTUALIZAR NOMBRE
  ===================================================== */

  const cambiarNombre = (event) => {
    setNombre(event.target.value);
    setLink("");
    setMensajeWhatsapp("");
    setCopiado(false);
    setMensajeCopiado(false);
    setError("");
  };

  /* =====================================================
     ACTUALIZAR PASES
  ===================================================== */

  const cambiarPases = (event) => {
  const valor = event.target.value;

  // Permite dejar el campo vacío mientras se edita
  if (valor === "") {
    setPases("");
    setLink("");
    setMensajeWhatsapp("");
    setCopiado(false);
    setMensajeCopiado(false);
    setError("");
    return;
  }

  // Solo permite números enteros positivos
  if (!/^\d+$/.test(valor)) return;

  const numero = Number(valor);

  // Máximo 20 pases
  if (numero > 20) {
    setPases("20");
  } else {
    setPases(valor);
  }

  setLink("");
  setMensajeWhatsapp("");
  setCopiado(false);
  setMensajeCopiado(false);
  setError("");
};

  return (
    <main
      className="
        relative
        isolate
        min-h-screen
        w-full
        overflow-hidden
        px-4
        py-12

        sm:px-8
        sm:py-16

        lg:px-12
        lg:py-20
      "
      style={{
        background: `
          radial-gradient(
            circle at 10% 10%,
            rgba(248, 230, 160, 0.48) 0%,
            rgba(248, 230, 160, 0.13) 26%,
            transparent 48%
          ),
          radial-gradient(
            circle at 90% 88%,
            rgba(168, 170, 125, 0.28) 0%,
            transparent 42%
          ),
          linear-gradient(
            180deg,
            ${COLORS.ivoryWhip} 0%,
            rgba(248, 230, 160, 0.17) 52%,
            ${COLORS.ivoryWhip} 100%
          )
        `,
      }}
    >
      {/* Textura */}

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

      {/* Resplandor */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-96
          w-96
          rounded-full
          blur-3xl
        "
        style={{
          backgroundColor:
            "rgba(248, 230, 160, 0.35)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-36
          -right-32
          h-[430px]
          w-[430px]
          rounded-full
          blur-3xl
        "
        style={{
          backgroundColor:
            "rgba(168, 170, 125, 0.22)",
        }}
      />

      {/* Contenedor */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* Encabezado */}

        <header
          className="
            mx-auto
            mb-10
            max-w-3xl
            text-center

            sm:mb-14
          "
        >
          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-4
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

            <div className="flex items-center gap-2">
              <Sparkles
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

                  sm:text-[11px]
                  sm:tracking-[0.48em]
                "
                style={{
                  color: TONES.caramelDeep,
                }}
              >
                Invitaciones personalizadas
              </p>
            </div>

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

          <h1
            className="
              font-cursiveDancing
              text-[52px]
              leading-none

              sm:text-[72px]
              md:text-[82px]
            "
            style={{
              color: TONES.sageDeep,
            }}
          >
            Generador de invitaciones
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-7

              sm:text-base
            "
            style={{
              color: TONES.caramelDeep,
            }}
          >
            Personaliza el nombre y el número de pases
            disponibles para cada invitado.
          </p>
        </header>

        {/* Contenido */}

        <div
          className="
            grid
            overflow-hidden
            rounded-[30px]
            border

            lg:grid-cols-[0.9fr_1.1fr]

            sm:rounded-[38px]
          "
          style={{
            backgroundColor: COLORS.ivoryWhip,
            borderColor:
              "rgba(200, 161, 90, 0.56)",
            boxShadow: `
              0 30px 85px rgba(88, 66, 47, 0.16),
              inset 0 1px 0 rgba(249, 246, 238, 0.9)
            `,
          }}
        >
          {/* =============================================
              VISTA PREVIA
          ============================================= */}

          <section
            className="
              relative
              min-h-[560px]
              overflow-hidden

              sm:min-h-[650px]

              lg:min-h-[760px]
            "
          >
            <img
              src="/imagenfinal.jpg"
              alt="Vista previa de la invitación"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
              style={{
                objectPosition: "50% 50%",
              }}
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
                    rgba(66, 72, 50, 0.95) 0%,
                    rgba(66, 72, 50, 0.28) 45%,
                    rgba(66, 72, 50, 0.08) 70%,
                    rgba(66, 72, 50, 0.18) 100%
                  )
                `,
              }}
            />

            {/* Marco interior */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-5
                rounded-[24px]
                border

                sm:inset-7
                sm:rounded-[30px]
              "
              style={{
                borderColor:
                  "rgba(249, 246, 238, 0.3)",
              }}
            />

            {/* Etiqueta */}

            <div
              className="
                absolute
                left-1/2
                top-8
                z-10
                flex
                -translate-x-1/2
                items-center
                gap-3
                rounded-full
                border
                px-5
                py-3
                backdrop-blur-md

                sm:top-11
              "
              style={{
                backgroundColor:
                  "rgba(66, 72, 50, 0.3)",
                borderColor:
                  "rgba(249, 246, 238, 0.25)",
              }}
            >
              <TicketCheck
                size={15}
                strokeWidth={1.5}
                style={{
                  color: COLORS.butterBloom,
                }}
              />

              <span
                className="
                  whitespace-nowrap
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.27em]

                  sm:text-[10px]
                "
                style={{
                  color: COLORS.ivoryWhip,
                }}
              >
                Vista previa
              </span>
            </div>

            {/* Información sobre imagen */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-10
                px-7
                pb-12
                text-center

                sm:px-12
                sm:pb-16
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.36em]

                  sm:text-[11px]
                  sm:tracking-[0.48em]
                "
                style={{
                  color: COLORS.butterBloom,
                }}
              >
                Invitación especial para
              </p>

              <AnimatePresence mode="wait">
                <motion.h2
                  key={nombre || "invitado"}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  className="
                    mx-auto
                    mt-4
                    max-w-xl
                    font-cursiveDancing
                    text-[44px]
                    leading-tight

                    min-[390px]:text-[50px]

                    sm:text-[64px]
                  "
                  style={{
                    color: COLORS.ivoryWhip,
                    textShadow:
                      "0 6px 24px rgba(66,72,50,0.35)",
                  }}
                >
                  {nombre.trim() ||
                    "Nombre del invitado"}
                </motion.h2>
              </AnimatePresence>

              <div
                className="
                  mx-auto
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-3
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
                    h-2
                    w-2
                    rotate-45
                  "
                  style={{
                    backgroundColor:
                      COLORS.goldenBatter,
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

              <div
                className="
                  mx-auto
                  mt-6
                  flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  border
                  px-5
                  py-3
                  backdrop-blur-md
                "
                style={{
                  backgroundColor:
                    "rgba(249, 246, 238, 0.12)",
                  borderColor:
                    "rgba(249, 246, 238, 0.25)",
                }}
              >
                <UsersRound
                  size={16}
                  strokeWidth={1.5}
                  style={{
                    color: COLORS.butterBloom,
                  }}
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                  "
                  style={{
                    color: COLORS.ivoryWhip,
                  }}
                >
                  {pases}{" "}
                  {Number(pases) === 1
                    ? "pase asignado"
                    : "pases asignados"}
                </span>
              </div>
            </div>
          </section>

          {/* =============================================
              FORMULARIO
          ============================================= */}

          <section
            className="
              relative
              flex
              min-h-[620px]
              items-center
              px-6
              py-12

              sm:px-10
              sm:py-14

              lg:min-h-[760px]
              lg:px-14
              lg:py-16

              xl:px-20
            "
          >
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
                  "rgba(248, 230, 160, 0.3)",
              }}
            />

            <div
              className="
                relative
                z-10
                w-full
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.34em]

                  sm:text-[11px]
                "
                style={{
                  color: COLORS.goldenBatter,
                }}
              >
                Crear invitación
              </p>

              <h2
                className="
                  mt-4
                  font-serif
                  text-[34px]
                  leading-tight

                  sm:text-[44px]
                  lg:text-[50px]
                "
                style={{
                  color: TONES.sageDeep,
                }}
              >
                Personaliza los datos del invitado
              </h2>

              <p
                className="
                  mt-5
                  text-sm
                  leading-7

                  sm:text-base
                "
                style={{
                  color: TONES.caramelDeep,
                }}
              >
                El nombre quedará bloqueado en el
                formulario de confirmación y solamente se
                podrán seleccionar los pases asignados.
              </p>

              <div
                className="
                  my-8
                  h-px
                  w-full
                "
                style={{
                  background: `
                    linear-gradient(
                      to right,
                      rgba(200, 161, 90, 0.55),
                      transparent
                    )
                  `,
                }}
              />

              {/* Nombre */}

              <div>
                <label
                  htmlFor="nombreInvitado"
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                  "
                  style={{
                    color: TONES.caramelDeep,
                  }}
                >
                  <UserRound
                    size={16}
                    strokeWidth={1.5}
                  />

                  Nombre o familia
                </label>

                <input
                  id="nombreInvitado"
                  type="text"
                  placeholder="Ej. Familia Hernández"
                  value={nombre}
                  maxLength={100}
                  onChange={cambiarNombre}
                  className="
                    min-h-[58px]
                    w-full
                    rounded-[18px]
                    border
                    px-5
                    py-4
                    font-playfair
                    text-sm
                    outline-none
                    transition
                    duration-300

                    focus:ring-2
                    focus:ring-[#A8AA7D]/25

                    sm:text-base
                  "
                  style={{
                    backgroundColor:
                      COLORS.ivoryWhip,
                    borderColor:
                      "rgba(200,161,90,0.46)",
                    color: TONES.sageDeep,
                  }}
                />
              </div>

              {/* Pases */}

              <div className="mt-6">
                <label
                  htmlFor="numeroPases"
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                  "
                  style={{
                    color: TONES.caramelDeep,
                  }}
                >
                  <UsersRound
                    size={16}
                    strokeWidth={1.5}
                  />

                  Número de pases
                </label>

                <input
                  id="numeroPases"
                  type="number"
                  min="1"
                  max="20"
                  value={pases}
                  onChange={cambiarPases}
                  className="
                    min-h-[58px]
                    w-full
                    rounded-[18px]
                    border
                    px-5
                    py-4
                    text-center
                    font-playfair
                    text-base
                    outline-none
                    transition
                    duration-300

                    focus:ring-2
                    focus:ring-[#A8AA7D]/25
                  "
                  style={{
                    backgroundColor:
                      COLORS.ivoryWhip,
                    borderColor:
                      "rgba(200,161,90,0.46)",
                    color: TONES.sageDeep,
                  }}
                />

                <p
                  className="
                    mt-2
                    text-[11px]
                    leading-5

                    sm:text-xs
                  "
                  style={{
                    color: TONES.caramelDeep,
                  }}
                >
                  Puedes asignar entre 1 y 20 pases.
                </p>
              </div>

              {/* Error */}

              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    key="error"
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    className="
                      mt-6
                      rounded-[16px]
                      border
                      px-5
                      py-4
                      text-sm
                    "
                    style={{
                      backgroundColor:
                        "rgba(168,135,98,0.1)",
                      borderColor:
                        "rgba(168,135,98,0.35)",
                      color:
                        TONES.caramelDark,
                    }}
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Generar */}

              <motion.button
                type="button"
                onClick={generarLink}
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
                  min-h-[60px]
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
                    "rgba(200,161,90,0.5)",
                  color: COLORS.ivoryWhip,
                  boxShadow:
                    "0 14px 30px rgba(66,72,50,0.2)",
                }}
              >
                <Link2
                  size={19}
                  strokeWidth={1.5}
                  style={{
                    color: COLORS.butterBloom,
                  }}
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]

                    sm:text-[11px]
                  "
                >
                  Generar invitación
                </span>
              </motion.button>

              {/* Resultado */}

              <AnimatePresence>
                {link && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    className="
                      mt-8
                      space-y-4
                    "
                  >
                    <div
                      className="
                        rounded-[20px]
                        border
                        p-5
                      "
                      style={{
                        backgroundColor:
                          "rgba(248,230,160,0.16)",
                        borderColor:
                          "rgba(200,161,90,0.36)",
                      }}
                    >
                      <p
                        className="
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.28em]
                        "
                        style={{
                          color:
                            TONES.caramelDeep,
                        }}
                      >
                        Enlace generado
                      </p>

                      <p
                        className="
                          mt-3
                          break-all
                          font-mono
                          text-xs
                          leading-6

                          sm:text-sm
                        "
                        style={{
                          color: TONES.sageDeep,
                        }}
                      >
                        {link}
                      </p>
                    </div>

                    {/* Mensaje editable para WhatsApp */}

                    <div
                      className="
                        rounded-[20px]
                        border
                        p-5
                      "
                      style={{
                        backgroundColor:
                          "rgba(168,170,125,0.1)",
                        borderColor:
                          "rgba(168,170,125,0.42)",
                      }}
                    >
                      <label
                        htmlFor="mensajeWhatsapp"
                        className="
                          mb-3
                          flex
                          items-center
                          gap-2
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.28em]
                        "
                        style={{
                          color: TONES.caramelDeep,
                        }}
                      >
                        <MessageCircle
                          size={16}
                          strokeWidth={1.5}
                        />

                        Mensaje para WhatsApp
                      </label>

                      <textarea
                        id="mensajeWhatsapp"
                        value={mensajeWhatsapp}
                        onChange={(event) => {
                          setMensajeWhatsapp(
                            event.target.value
                          );
                          setMensajeCopiado(false);
                        }}
                        rows={10}
                        maxLength={1500}
                        placeholder="Escribe o edita el mensaje que enviarás por WhatsApp"
                        className="
                          min-h-[230px]
                          w-full
                          resize-y
                          rounded-[16px]
                          border
                          px-4
                          py-4
                          font-playfair
                          text-sm
                          leading-6
                          outline-none
                          transition
                          duration-300

                          focus:ring-2
                          focus:ring-[#A8AA7D]/25
                        "
                        style={{
                          backgroundColor:
                            COLORS.ivoryWhip,
                          borderColor:
                            "rgba(200,161,90,0.42)",
                          color: TONES.sageDeep,
                        }}
                      />

                      <div
                        className="
                          mt-2
                          flex
                          items-center
                          justify-between
                          gap-3
                        "
                      >
                        <p
                          className="
                            text-[10px]
                            leading-5
                          "
                          style={{
                            color:
                              TONES.caramelDeep,
                          }}
                        >
                          Puedes cambiar cualquier parte del
                          mensaje antes de copiarlo.
                        </p>

                        <span
                          className="
                            shrink-0
                            text-[10px]
                          "
                          style={{
                            color:
                              TONES.caramelDeep,
                          }}
                        >
                          {mensajeWhatsapp.length}/1500
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={copiarLink}
                      className="
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
                        transition
                        duration-300

                        hover:-translate-y-0.5
                      "
                      style={{
                        backgroundColor:
                          COLORS.ivoryWhip,
                        borderColor:
                          "rgba(168,170,125,0.6)",
                        color: TONES.sageDeep,
                      }}
                    >
                      {copiado ? (
                        <Check
                          size={18}
                          strokeWidth={1.8}
                        />
                      ) : (
                        <Copy
                          size={18}
                          strokeWidth={1.5}
                        />
                      )}

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.23em]

                          sm:text-[11px]
                        "
                      >
                        {copiado
                          ? "Enlace copiado"
                          : "Copiar enlace"}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={copiarMensaje}
                      className="
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
                        transition
                        duration-300

                        hover:-translate-y-0.5
                      "
                      style={{
                        background: `
                          linear-gradient(
                            135deg,
                            ${TONES.caramelDeep} 0%,
                            ${TONES.caramelDark} 100%
                          )
                        `,
                        borderColor:
                          "rgba(200,161,90,0.5)",
                        color: COLORS.ivoryWhip,
                      }}
                    >
                      {mensajeCopiado ? (
                        <Check
                          size={18}
                          strokeWidth={1.8}
                          style={{
                            color:
                              COLORS.butterBloom,
                          }}
                        />
                      ) : (
                        <Copy
                          size={18}
                          strokeWidth={1.5}
                          style={{
                            color:
                              COLORS.butterBloom,
                          }}
                        />
                      )}

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.23em]

                          sm:text-[11px]
                        "
                      >
                        {mensajeCopiado
                          ? "Mensaje copiado"
                          : "Copiar mensaje completo"}
                      </span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </div>
      </motion.div>
    </main>
  );
}