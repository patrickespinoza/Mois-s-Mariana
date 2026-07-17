"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  Heart,
  LoaderCircle,
  LockKeyhole,
  MessageCircleHeart,
  Send,
  Sparkles,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

/* =====================================================
   CONFIGURACIÓN
===================================================== */

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx8w2fvMJn5PpgEB0ZsZ3l9KyA6GfJtknnhO7C3zOBriHj_yzbpeA4JzJZCoxS4S3tVtQ/exec";

/*
  IMPORTANTE:
  Coloca los números completos con código de país,
  sin espacios, guiones ni el signo +.

  México:
  52 + número de 10 dígitos

  Ejemplo:
  "525512345678"
*/
const NUMEROS_WHATSAPP = {
  "Moisés": "525573666703",
  "Mariana": "525584295359",
};

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

const sectionVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
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
   LECTURA DE DATOS DE LA URL
===================================================== */


const decodificarBase64Unicode = (valor) => {
  try {
    const textoBinario = window.atob(valor);

    const bytes = Uint8Array.from(
      textoBinario,
      (caracter) => caracter.charCodeAt(0)
    );

    return new TextDecoder().decode(bytes);
  } catch {
    return window.atob(valor);
  }
};

const obtenerDatosInvitacion = () => {
  const resultadoInicial = {
    nombre: "",
    pases: 1,
    idInvitacion: "",
  };

  if (typeof window === "undefined") {
    return resultadoInicial;
  }

  const parametros = new URLSearchParams(
    window.location.search
  );

  const nombreDirecto =
    parametros.get("nombre") ||
    parametros.get("invitado") ||
    parametros.get("familia");

  const pasesDirectos =
    parametros.get("pases") ||
    parametros.get("invitados") ||
    parametros.get("lugares");

  const id = parametros.get("id");

  /*
    Primero intenta leer el parámetro id.
  */

  if (id) {
    const intentos = [];

    try {
      const base64Normalizado = decodeURIComponent(id)
        .replace(/-/g, "+")
        .replace(/_/g, "/");

      const paddingNecesario =
        (4 - (base64Normalizado.length % 4)) % 4;

      const base64ConPadding =
        base64Normalizado + "=".repeat(paddingNecesario);

      const decodificado =
        decodificarBase64Unicode(base64ConPadding);

      /*
        Intento 1:
        El contenido fue invertido antes de convertirlo a Base64.
      */

      intentos.push(
        decodificado.split("").reverse().join("")
      );

      /*
        Intento 2:
        JSON convertido directamente a Base64.
      */

      intentos.push(decodificado);
    } catch (error) {
      console.warn(
        "No fue posible decodificar el id de la invitación:",
        error
      );
    }

    for (const intento of intentos) {
      try {
        const datos = JSON.parse(intento);

        const nombre =
          datos.nombre ||
          datos.invitado ||
          datos.familia ||
          "";

        const pases = Number(
          datos.pases ??
            datos.invitados ??
            datos.lugares ??
            1
        );

        if (nombre) {
          return {
            nombre: String(nombre).trim(),
            pases:
              Number.isFinite(pases) && pases >= 1
                ? Math.min(Math.floor(pases), 20)
                : 1,
            idInvitacion: id,
          };
        }
      } catch {
        /*
          Continúa con el siguiente formato.
        */
      }
    }
  }

  /*
    Si no se pudo leer el id, utiliza parámetros directos.
  */

  const pasesConvertidos = Number(pasesDirectos);

  return {
    nombre: nombreDirecto
      ? decodeURIComponent(nombreDirecto).trim()
      : "",
    pases:
      Number.isFinite(pasesConvertidos) &&
      pasesConvertidos >= 1
        ? Math.min(
            Math.floor(pasesConvertidos),
            20
          )
        : 1,
    idInvitacion: id || "",
  };
};

/* =====================================================
   WHATSAPP
===================================================== */

const limpiarNumeroWhatsapp = (numero) =>
  String(numero || "").replace(/\D/g, "");

const crearMensajeWhatsapp = ({
  nombre,
  asistencia,
  invitados,
  pasesAsignados,
  mensaje,
  lado,
}) => {
  const cantidadTexto =
    asistencia === "Sí asistiré"
      ? `${invitados} ${
          invitados === 1 ? "persona" : "personas"
        }`
      : "0 personas";

  const mensajeAdicional = mensaje
    ? `\n\nMensaje:\n${mensaje}`
    : "";

  return `Hola ${lado}, deseo confirmar mi asistencia. 💍

Nombre: ${nombre}
Asistencia: ${asistencia}
Asistentes confirmados: ${cantidadTexto}
Pases asignados: ${pasesAsignados}${mensajeAdicional}`;
};

/* =====================================================
   COMPONENTE
===================================================== */

export default function Confirmacion() {
  const [nombreInvitado, setNombreInvitado] =
    useState("");

  const [pasesAsignados, setPasesAsignados] =
    useState(1);

  const [idInvitacion, setIdInvitacion] =
    useState("");

  const [mensajeInvitado, setMensajeInvitado] =
    useState("");

  const [asistencia, setAsistencia] =
    useState("");

  const [invitados, setInvitados] =
    useState(1);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [botonActivo, setBotonActivo] =
    useState("");

  const [enviado, setEnviado] =
    useState(false);

  const [ladoEnviado, setLadoEnviado] =
    useState("");

  /* =====================================================
     CARGAR INFORMACIÓN DEL ENLACE
  ===================================================== */

  useEffect(() => {
    const datos = obtenerDatosInvitacion();

    setNombreInvitado(datos.nombre);
    setPasesAsignados(datos.pases);
    setIdInvitacion(datos.idInvitacion);
    setInvitados(1);
  }, []);

  /* =====================================================
     OPCIONES DEL SELECTOR
  ===================================================== */

  const opcionesInvitados = useMemo(() => {
    return Array.from(
      { length: pasesAsignados },
      (_, indice) => indice + 1
    );
  }, [pasesAsignados]);

  /* =====================================================
     CAMBIAR ASISTENCIA
  ===================================================== */

  const seleccionarAsistencia = (opcion) => {
    if (loading) return;

    setAsistencia(opcion);
    setError("");
    setEnviado(false);

    if (opcion === "No podré asistir") {
      setInvitados(0);
    } else if (invitados === 0) {
      setInvitados(1);
    }
  };

  /* =====================================================
     ENVIAR CONFIRMACIÓN
  ===================================================== */

  const enviarConfirmacion = async (lado) => {
    if (loading) return;

    if (!nombreInvitado.trim()) {
      setError(
        "No encontramos el nombre del invitado en el enlace."
      );
      return;
    }

    if (!asistencia) {
      setError(
        "Selecciona si podrás acompañarnos."
      );
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (invitados < 1 ||
        invitados > pasesAsignados)
    ) {
      setError(
        `Puedes confirmar de 1 a ${pasesAsignados} ${
          pasesAsignados === 1
            ? "persona"
            : "personas"
        }.`
      );

      return;
    }

    setError("");
    setEnviado(false);
    setLoading(true);
    setBotonActivo(lado);

    const cantidadConfirmada =
      asistencia === "Sí asistiré"
        ? invitados
        : 0;

    const data = {
      nombre: nombreInvitado.trim(),
      asistencia,
      invitados: cantidadConfirmada,
      pasesAsignados,
      mensaje: mensajeInvitado.trim(),
      lado,
      confirmadoCon: lado,
      idInvitacion,
      fechaRegistro: new Date().toISOString(),
    };

    const numeroWhatsapp = limpiarNumeroWhatsapp(
      NUMEROS_WHATSAPP[lado]
    );

    if (
      !numeroWhatsapp ||
      numeroWhatsapp.includes("X")
    ) {
      setLoading(false);
      setBotonActivo("");
      setError(
        `Configura el número de WhatsApp de ${lado} en NUMEROS_WHATSAPP.`
      );
      return;
    }

    const mensajeWhatsapp = crearMensajeWhatsapp({
      nombre: data.nombre,
      asistencia: data.asistencia,
      invitados: data.invitados,
      pasesAsignados: data.pasesAsignados,
      mensaje: data.mensaje,
      lado,
    });

    const enlaceWhatsapp =
      `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
        mensajeWhatsapp
      )}`;

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      setLadoEnviado(lado);
      setEnviado(true);

      /*
        Primero se envían los datos al Excel y después
        se abre WhatsApp con el mensaje preparado para
        la persona seleccionada.
      */

      window.setTimeout(() => {
        window.location.assign(enlaceWhatsapp);
      }, 650);
    } catch (err) {
      console.error(
        "Error al enviar la confirmación:",
        err
      );

      setError(
        "No pudimos enviar tu confirmación. Inténtalo nuevamente."
      );
    } finally {
      setLoading(false);
      setBotonActivo("");
    }
  };

  const nombreDisponible =
    nombreInvitado.trim().length > 0;

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
            circle at 10% 12%,
            rgba(248, 230, 160, 0.44) 0%,
            rgba(248, 230, 160, 0.12) 27%,
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
            rgba(248, 230, 160, 0.14) 52%,
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

      {/* Resplandor superior */}

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
          opacity: [0.55, 0.84, 0.55],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Resplandor inferior */}

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
          opacity: [0.5, 0.72, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Esquina superior */}

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

      {/* Esquina inferior */}

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

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* Encabezado */}

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
                  tracking-[0.3em]

                  min-[390px]:text-[10px]

                  sm:text-[11px]
                  sm:tracking-[0.48em]
                "
                style={{
                  color: TONES.caramelDeep,
                }}
              >
                R. S. V. P.
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
              lg:text-[90px]
            "
            style={{
              color: TONES.sageDeep,
              textShadow:
                "0 4px 16px rgba(85,91,63,0.1)",
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
            Será un honor compartir este momento contigo.
            Ayúdanos a preparar cada detalle confirmando
            tu asistencia.
          </p>
        </motion.header>

        {/* Tarjeta */}

        <motion.div
          variants={scaleIn}
          className="
            relative
            mx-auto
            max-w-4xl
            overflow-hidden
            rounded-[28px]
            border

            sm:rounded-[34px]
            lg:rounded-[40px]
          "
          style={{
            backgroundColor: COLORS.ivoryWhip,
            borderColor:
              "rgba(200, 161, 90, 0.56)",
            boxShadow: `
              0 28px 75px rgba(88, 66, 47, 0.14),
              inset 0 1px 0 rgba(249, 246, 238, 0.9)
            `,
          }}
        >
          {/* Franja superior */}

          <div
            className="
              relative
              overflow-hidden
              px-6
              py-10
              text-center

              sm:px-10
              sm:py-12
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
                borderColor:
                  "rgba(249,246,238,0.18)",
              }}
            />

            <div
              className="
                relative
                z-10
                mx-auto
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
                  "rgba(248,230,160,0.14)",
                borderColor:
                  "rgba(248,230,160,0.4)",
                color: COLORS.butterBloom,
              }}
            >
              <Heart
                size={27}
                strokeWidth={1.4}
              />
            </div>

            <p
              className="
                relative
                z-10
                mt-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.38em]
              "
              style={{
                color: COLORS.butterBloom,
              }}
            >
              Nos encantará contar contigo
            </p>

            <p
              className="
                relative
                z-10
                mx-auto
                mt-3
                max-w-xl
                font-cursiveDancing
                text-[38px]
                leading-tight

                sm:text-[48px]
              "
              style={{
                color: COLORS.ivoryWhip,
              }}
            >
              Tu presencia hará este día más especial
            </p>
          </div>

          {/* Formulario */}

          <div
            className="
              relative
              px-5
              py-10

              min-[390px]:px-6

              sm:px-10
              sm:py-12

              md:px-14
              md:py-14

              lg:px-20
            "
          >
            <motion.div
              variants={sectionVariants}
              className="space-y-7"
            >
              {/* Nombre bloqueado */}

              <motion.div variants={fadeUp}>
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
                    tracking-[0.25em]

                    sm:text-[11px]
                  "
                  style={{
                    color: TONES.caramelDeep,
                  }}
                >
                  <UserRound
                    size={15}
                    strokeWidth={1.5}
                  />

                  Invitado
                </label>

                <div className="relative">
                  <input
                    id="nombreInvitado"
                    type="text"
                    value={nombreInvitado}
                    readOnly
                    aria-readonly="true"
                    placeholder="Nombre del invitado"
                    className="
                      min-h-[58px]
                      w-full
                      cursor-not-allowed
                      rounded-[18px]
                      border
                      px-5
                      py-4
                      pr-12
                      font-playfair
                      text-sm
                      outline-none

                      sm:text-base
                    "
                    style={{
                      backgroundColor:
                        "rgba(168,170,125,0.1)",
                      borderColor:
                        nombreDisponible
                          ? "rgba(168,170,125,0.46)"
                          : "rgba(200,161,90,0.54)",
                      color: TONES.sageDeep,
                    }}
                  />

                  <LockKeyhole
                    aria-hidden="true"
                    size={18}
                    strokeWidth={1.5}
                    className="
                      pointer-events-none
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                    "
                    style={{
                      color: COLORS.gardenSage,
                    }}
                  />
                </div>

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
                  Este nombre fue asignado desde tu
                  invitación y no puede modificarse.
                </p>
              </motion.div>

              {/* Asistencia */}

              <motion.div variants={fadeUp}>
                <p
                  className="
                    mb-3
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]

                    sm:text-[11px]
                  "
                  style={{
                    color: TONES.caramelDeep,
                  }}
                >
                  ¿Podrás acompañarnos?
                </p>

                <div
                  className="
                    grid
                    gap-3

                    sm:grid-cols-2
                  "
                >
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() =>
                      seleccionarAsistencia(
                        "Sí asistiré"
                      )
                    }
                    className="
                      flex
                      min-h-[64px]
                      items-center
                      gap-4
                      rounded-[18px]
                      border
                      px-5
                      py-4
                      text-left
                      transition
                      duration-300

                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                    style={{
                      backgroundColor:
                        asistencia === "Sí asistiré"
                          ? "rgba(168,170,125,0.17)"
                          : "rgba(249,246,238,0.8)",

                      borderColor:
                        asistencia === "Sí asistiré"
                          ? COLORS.gardenSage
                          : "rgba(200,161,90,0.34)",
                    }}
                  >
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border-2
                      "
                      style={{
                        borderColor:
                          asistencia ===
                          "Sí asistiré"
                            ? TONES.sageDeep
                            : "rgba(114,88,63,0.4)",
                      }}
                    >
                      {asistencia ===
                        "Sí asistiré" && (
                        <span
                          className="
                            flex
                            h-4
                            w-4
                            items-center
                            justify-center
                            rounded-full
                          "
                          style={{
                            backgroundColor:
                              TONES.sageDeep,
                            color:
                              COLORS.ivoryWhip,
                          }}
                        >
                          <Check
                            size={11}
                            strokeWidth={2}
                          />
                        </span>
                      )}
                    </span>

                    <span>
                      <span
                        className="
                          block
                          font-playfair
                          text-sm
                          font-semibold
                        "
                        style={{
                          color: TONES.sageDeep,
                        }}
                      >
                        Sí asistiré
                      </span>

                      <span
                        className="
                          mt-1
                          block
                          text-xs
                        "
                        style={{
                          color:
                            TONES.caramelDeep,
                        }}
                      >
                        Con mucha alegría
                      </span>
                    </span>
                  </button>

                  <button
                    type="button"
                    disabled={loading}
                    onClick={() =>
                      seleccionarAsistencia(
                        "No podré asistir"
                      )
                    }
                    className="
                      flex
                      min-h-[64px]
                      items-center
                      gap-4
                      rounded-[18px]
                      border
                      px-5
                      py-4
                      text-left
                      transition
                      duration-300

                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                    style={{
                      backgroundColor:
                        asistencia ===
                        "No podré asistir"
                          ? "rgba(168,135,98,0.12)"
                          : "rgba(249,246,238,0.8)",

                      borderColor:
                        asistencia ===
                        "No podré asistir"
                          ? COLORS.toastedCaramel
                          : "rgba(200,161,90,0.34)",
                    }}
                  >
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border-2
                      "
                      style={{
                        borderColor:
                          asistencia ===
                          "No podré asistir"
                            ? TONES.caramelDeep
                            : "rgba(114,88,63,0.4)",
                      }}
                    >
                      {asistencia ===
                        "No podré asistir" && (
                        <span
                          className="
                            flex
                            h-4
                            w-4
                            items-center
                            justify-center
                            rounded-full
                          "
                          style={{
                            backgroundColor:
                              TONES.caramelDeep,
                            color:
                              COLORS.ivoryWhip,
                          }}
                        >
                          <X
                            size={11}
                            strokeWidth={2}
                          />
                        </span>
                      )}
                    </span>

                    <span>
                      <span
                        className="
                          block
                          font-playfair
                          text-sm
                          font-semibold
                        "
                        style={{
                          color: TONES.sageDeep,
                        }}
                      >
                        No podré asistir
                      </span>

                      <span
                        className="
                          mt-1
                          block
                          text-xs
                        "
                        style={{
                          color:
                            TONES.caramelDeep,
                        }}
                      >
                        Estaré presente de corazón
                      </span>
                    </span>
                  </button>
                </div>
              </motion.div>

              {/* Número de asistentes */}

              <motion.div variants={fadeUp}>
                <label
                  htmlFor="numeroInvitados"
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]

                    sm:text-[11px]
                  "
                  style={{
                    color: TONES.caramelDeep,
                  }}
                >
                  <UsersRound
                    size={16}
                    strokeWidth={1.5}
                  />

                  Número de asistentes
                </label>

                {asistencia ===
                "No podré asistir" ? (
                  <div
                    className="
                      flex
                      min-h-[58px]
                      w-full
                      items-center
                      rounded-[18px]
                      border
                      px-5
                      py-4
                      font-playfair
                      text-sm
                    "
                    style={{
                      backgroundColor:
                        "rgba(168,135,98,0.08)",
                      borderColor:
                        "rgba(168,135,98,0.32)",
                      color:
                        TONES.caramelDeep,
                    }}
                  >
                    Se registrarán 0 asistentes
                  </div>
                ) : (
                  <div className="relative">
                    <select
                      id="numeroInvitados"
                      value={invitados}
                      disabled={
                        loading ||
                        asistencia !==
                          "Sí asistiré"
                      }
                      onChange={(event) =>
                        setInvitados(
                          Number(
                            event.target.value
                          )
                        )
                      }
                      className="
                        min-h-[58px]
                        w-full
                        appearance-none
                        rounded-[18px]
                        border
                        px-5
                        py-4
                        pr-12
                        font-playfair
                        text-sm
                        outline-none
                        transition
                        duration-300

                        disabled:cursor-not-allowed
                        disabled:opacity-55

                        sm:text-base
                      "
                      style={{
                        backgroundColor:
                          COLORS.ivoryWhip,
                        borderColor:
                          "rgba(200,161,90,0.46)",
                        color: TONES.sageDeep,
                      }}
                    >
                      {opcionesInvitados.map(
                        (cantidad) => (
                          <option
                            key={cantidad}
                            value={cantidad}
                          >
                            {cantidad}{" "}
                            {cantidad === 1
                              ? "persona"
                              : "personas"}
                          </option>
                        )
                      )}
                    </select>

                    <ChevronDown
                      aria-hidden="true"
                      size={19}
                      strokeWidth={1.5}
                      className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                      "
                      style={{
                        color:
                          COLORS.gardenSage,
                      }}
                    />
                  </div>
                )}

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
                  Esta invitación tiene{" "}
                  <strong>
                    {pasesAsignados}{" "}
                    {pasesAsignados === 1
                      ? "pase asignado"
                      : "pases asignados"}
                  </strong>
                  . No será posible confirmar una
                  cantidad mayor.
                </p>
              </motion.div>

              {/* Mensaje */}

              <motion.div variants={fadeUp}>
                <label
                  htmlFor="mensajeInvitado"
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]

                    sm:text-[11px]
                  "
                  style={{
                    color: TONES.caramelDeep,
                  }}
                >
                  <MessageCircleHeart
                    size={16}
                    strokeWidth={1.5}
                  />

                  Mensaje para los novios
                </label>

                <textarea
                  id="mensajeInvitado"
                  value={mensajeInvitado}
                  disabled={loading}
                  maxLength={500}
                  rows={5}
                  onChange={(event) =>
                    setMensajeInvitado(
                      event.target.value
                    )
                  }
                  placeholder="Escribe un mensaje especial (opcional)"
                  className="
                    min-h-[130px]
                    w-full
                    resize-none
                    rounded-[18px]
                    border
                    px-5
                    py-4
                    font-playfair
                    text-sm
                    leading-6
                    outline-none
                    transition
                    duration-300

                    disabled:cursor-not-allowed
                    disabled:opacity-60

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

                <p
                  className="
                    mt-2
                    text-right
                    text-[10px]
                  "
                  style={{
                    color: TONES.caramelDeep,
                  }}
                >
                  {mensajeInvitado.length}/500
                </p>
              </motion.div>

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
                    role="alert"
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-[18px]
                      border
                      px-5
                      py-4
                    "
                    style={{
                      backgroundColor:
                        "rgba(168,135,98,0.1)",
                      borderColor:
                        "rgba(168,135,98,0.38)",
                      color:
                        TONES.caramelDark,
                    }}
                  >
                    <X
                      size={18}
                      strokeWidth={1.7}
                      className="
                        mt-0.5
                        shrink-0
                      "
                    />

                    <p className="text-sm leading-6">
                      {error}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Éxito */}

              <AnimatePresence mode="wait">
                {enviado && (
                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      y: 8,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    role="status"
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-[18px]
                      border
                      px-5
                      py-4
                    "
                    style={{
                      backgroundColor:
                        "rgba(168,170,125,0.15)",
                      borderColor:
                        "rgba(168,170,125,0.48)",
                      color:
                        TONES.sageDeep,
                    }}
                  >
                    <Check
                      size={19}
                      strokeWidth={1.8}
                      className="
                        mt-0.5
                        shrink-0
                      "
                    />

                    <p className="text-sm leading-6">
                      Confirmación enviada correctamente
                      con{" "}
                      <strong>
                        {ladoEnviado}
                      </strong>
                      . Muchas gracias.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Botones */}

              <motion.div
                variants={fadeUp}
                className="
                  grid
                  gap-4
                  pt-2

                  sm:grid-cols-2
                "
              >
                <motion.button
                  type="button"
                  disabled={
                    loading || !nombreDisponible
                  }
                  onClick={() =>
                    enviarConfirmacion("Moisés")
                  }
                  whileHover={
                    loading
                      ? undefined
                      : {
                          y: -3,
                          scale: 1.01,
                        }
                  }
                  whileTap={
                    loading
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="
                    relative
                    flex
                    min-h-[62px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-full
                    border
                    px-5
                    py-4
                    text-center
                    transition
                    duration-300

                    disabled:cursor-not-allowed
                    disabled:opacity-55
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
                    color:
                      COLORS.ivoryWhip,
                    boxShadow:
                      "0 12px 26px rgba(66,72,50,0.18)",
                  }}
                >
                  {loading &&
                  botonActivo === "Moisés" ? (
                    <>
                      <LoaderCircle
                        size={19}
                        strokeWidth={1.8}
                        className="animate-spin"
                      />

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                        "
                      >
                        Enviando...
                      </span>
                    </>
                  ) : (
                    <>
                      <Send
                        size={18}
                        strokeWidth={1.5}
                        style={{
                          color:
                            COLORS.butterBloom,
                        }}
                      />

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]

                          min-[390px]:text-[11px]
                        "
                      >
                        Confirmar con Moisés
                      </span>
                    </>
                  )}
                </motion.button>

                <motion.button
                  type="button"
                  disabled={
                    loading || !nombreDisponible
                  }
                  onClick={() =>
                    enviarConfirmacion("Mariana")
                  }
                  whileHover={
                    loading
                      ? undefined
                      : {
                          y: -3,
                          scale: 1.01,
                        }
                  }
                  whileTap={
                    loading
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="
                    relative
                    flex
                    min-h-[62px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-full
                    border
                    px-5
                    py-4
                    text-center
                    transition
                    duration-300

                    disabled:cursor-not-allowed
                    disabled:opacity-55
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
                    color:
                      COLORS.ivoryWhip,
                    boxShadow:
                      "0 12px 26px rgba(88,66,47,0.2)",
                  }}
                >
                  {loading &&
                  botonActivo === "Mariana" ? (
                    <>
                      <LoaderCircle
                        size={19}
                        strokeWidth={1.8}
                        className="animate-spin"
                      />

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                        "
                      >
                        Enviando...
                      </span>
                    </>
                  ) : (
                    <>
                      <Send
                        size={18}
                        strokeWidth={1.5}
                        style={{
                          color:
                            COLORS.butterBloom,
                        }}
                      />

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]

                          min-[390px]:text-[11px]
                        "
                      >
                        Confirmar con Mariana
                      </span>
                    </>
                  )}
                </motion.button>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="
                  text-center
                  text-[11px]
                  italic
                  leading-5

                  sm:text-xs
                "
                style={{
                  color: TONES.caramelDeep,
                }}
              >
                Presiona solamente uno de los botones. El
                envío quedará bloqueado mientras se
                registra tu confirmación.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Separador inferior */}

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