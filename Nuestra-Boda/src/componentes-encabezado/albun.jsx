import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Camera,
  ChevronRight,
  Copy,
  Download,
  ExternalLink,
  Images,
  QrCode,
  Sparkles,
  X,
} from "lucide-react";


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

const Album = ({
  imagenPrincipal = "/album.png",
  imagenQR = "/qr.jpg",
  codigoAlbum = "ES1630efa4",
  enlaceApp =
    "https://apps.apple.com/mx/app/wedshoots/id660256196",
}) => {
  const [open, setOpen] = useState(false);
  const [codigoCopiado, setCodigoCopiado] =
    useState(false);
  const [errorImagen, setErrorImagen] =
    useState(false);
  const [errorQR, setErrorQR] = useState(false);

  const copiarCodigo = async () => {
    try {
      await navigator.clipboard.writeText(codigoAlbum);
      setCodigoCopiado(true);

      window.setTimeout(() => {
        setCodigoCopiado(false);
      }, 2200);
    } catch (error) {
      console.error(
        "No se pudo copiar el código del álbum:",
        error
      );
    }
  };

  /*
    Evita que la página se desplace mientras
    el modal se encuentra abierto.
  */
  useEffect(() => {
    if (!open) return undefined;

    const overflowAnterior =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
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
  }, [open]);

  return (
    <>
      <section
        className="
          relative
          w-full
          isolate
          overflow-hidden
          px-5
          py-20

          sm:px-8
          sm:py-24

          lg:px-12
          lg:py-28
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
        {/* Resplandor superior */}

        <div
          className="
            pointer-events-none
            absolute
            -left-36
            -top-40
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#F8E6A0]/35
            blur-[120px]

            sm:h-[540px]
            sm:w-[540px]
          "
        />

        {/* Resplandor inferior */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-52
            -right-36
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#A8AA7D]/20
            blur-[140px]

            sm:h-[620px]
            sm:w-[620px]
          "
        />

        {/* Línea superior */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-16
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-[#C8A15A]
            to-transparent

            sm:h-20
          "
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
          "
        >
          {/* Encabezado */}

          <div
            className="
              mx-auto
              mb-12
              max-w-3xl
              text-center

              sm:mb-16
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
                  w-10
                  bg-[#C8A15A]

                  sm:w-16
                "
              />

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <Sparkles
                  size={14}
                  strokeWidth={1.5}
                  className="text-[#C8A15A]"
                />

                <p
                  className="
                    font-playfair
                    text-[10px]
                    uppercase
                    tracking-[0.4em]
                    text-[#72583F]

                    sm:text-xs
                  "
                >
                  Nuestros recuerdos
                </p>
              </div>

              <span
                className="
                  h-px
                  w-10
                  bg-[#C8A15A]

                  sm:w-16
                "
              />
            </div>

            <h2
              className="
                font-cursiveDancing
                text-6xl
                leading-none
                text-[#555B3F]

                sm:text-7xl
                md:text-8xl
              "
            >
              Álbum compartido
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                font-playfair
                text-sm
                leading-7
                text-[#72583F]/85

                sm:text-base
              "
            >
              Queremos ver nuestra celebración a través de
              tus ojos. Comparte las fotografías y videos
              que captures durante este día tan especial.
            </p>
          </div>

          {/* Tarjeta principal */}

          <div
            className="
              grid
              overflow-hidden
              rounded-[34px]
              border
              border-[#C8A15A]/30
              bg-[#F9F6EE]
              shadow-[0_28px_70px_rgba(88,66,47,0.14)]

              lg:grid-cols-[1.08fr_0.92fr]
              lg:rounded-[46px]
            "
          >
            {/* SECCIÓN DE IMAGEN */}

            <motion.div
              initial={{
                opacity: 0,
                x: -45,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="
                relative
                min-h-[430px]
                overflow-hidden

                sm:min-h-[560px]

                lg:min-h-[700px]
              "
            >
              {!errorImagen ? (
                <img
                  src={imagenPrincipal}
                  alt="Momentos especiales de nuestra boda"
                  onError={() =>
                    setErrorImagen(true)
                  }
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition
                    duration-700
                    hover:scale-[1.03]
                  "
                />
              ) : (
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    bg-[#A8AA7D]
                    px-8
                    text-center
                  "
                >
                  <Images
                    size={54}
                    strokeWidth={1}
                    className="text-[#F8E6A0]"
                  />

                  <p
                    className="
                      font-playfair
                      text-lg
                      text-[#F9F6EE]
                    "
                  >
                    Agrega tu imagen en
                  </p>

                  <code
                    className="
                      rounded-full
                      border
                      border-[#C8A15A]/40
                      bg-[#555B3F]/40
                      px-5
                      py-2
                      text-sm
                      text-[#F8E6A0]
                    "
                  >
                    public/album-compartido.jpg
                  </code>
                </div>
              )}

              {/* Overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#555B3F]/95
                  via-[#555B3F]/15
                  to-[#555B3F]/10
                "
              />

              {/* Marco interior */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-5
                  rounded-[26px]
                  border
                  border-[#F9F6EE]/25

                  sm:inset-7
                  sm:rounded-[32px]
                "
              />

              {/* Distintivo */}

              <div
                className="
                  absolute
                  left-8
                  top-8
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#F9F6EE]/25
                  bg-[#555B3F]/35
                  px-5
                  py-3
                  backdrop-blur-md

                  sm:left-12
                  sm:top-12
                "
              >
                <Camera
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#F8E6A0]"
                />

                <span
                  className="
                    font-playfair
                    text-[9px]
                    uppercase
                    tracking-[0.28em]
                    text-[#F9F6EE]

                    sm:text-[10px]
                  "
                >
                  Captura el momento
                </span>
              </div>

              {/* Texto inferior */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-10
                  px-8
                  pb-11

                  sm:px-12
                  sm:pb-14
                "
              >
                <p
                  className="
                    font-playfair
                    text-[10px]
                    uppercase
                    tracking-[0.38em]
                    text-[#F8E6A0]

                    sm:text-xs
                  "
                >
                  Un recuerdo para siempre
                </p>

                <p
                  className="
                    mt-4
                    max-w-xl
                    font-cursiveDancing
                    text-4xl
                    leading-tight
                    text-[#F9F6EE]

                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  Cada fotografía cuenta una parte de
                  nuestra historia
                </p>

                <div
                  className="
                    mt-6
                    h-px
                    w-24
                    bg-[#C8A15A]
                  "
                />
              </div>
            </motion.div>

            {/* CONTENIDO */}

            <motion.div
              initial={{
                opacity: 0,
                x: 45,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="
                relative
                flex
                min-h-[580px]
                items-center
                px-6
                py-12

                sm:px-10
                sm:py-14

                lg:min-h-[700px]
                lg:px-12
                lg:py-16

                xl:px-16
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-72
                  w-72
                  rounded-full
                  bg-[#F8E6A0]/35
                  blur-[90px]
                "
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
                    mt-7
                    font-playfair
                    text-[10px]
                    uppercase
                    tracking-[0.38em]
                    text-[#C8A15A]

                    sm:text-xs
                  "
                >
                  Comparte con nosotros
                </p>

                <h3
                  className="
                    mt-4
                    font-playfair
                    text-3xl
                    leading-tight
                    text-[#555B3F]

                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  Ayúdanos a guardar cada instante
                </h3>

                <p
                  className="
                    mt-6
                    font-playfair
                    text-sm
                    leading-7
                    text-[#555B3F]/75

                    sm:text-base
                  "
                >
                  Descarga la App. Ingresa el codigo de boda y Sube las fotografías que tomes durante
                  nuestra celebración. Así podremos reunir
                  todas las sonrisas, abrazos y momentos
                  espontáneos en un solo lugar.
                </p>

                <div
                  className="
                    my-8
                    h-px
                    w-full
                    bg-[#C8A15A]/35
                  "
                />

                {/* Características */}

                <div className="space-y-4">
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-[18px]
                      border
                      border-[#C8A15A]/30
                      bg-[#F9F6EE]/65
                      px-4
                      py-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#555B3F]
                        text-[#F9F6EE]
                      "
                    >
                      <Camera
                        size={17}
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>
                      <p
                        className="
                          font-playfair
                          text-sm
                          text-[#555B3F]
                        "
                      >
                        Comparte fotos y videos
                      </p>

                      <p
                        className="
                          mt-1
                          font-playfair
                          text-xs
                          leading-5
                          text-[#555B3F]/60
                        "
                      >
                        Conserva los momentos más
                        especiales del evento.
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-[18px]
                      border
                      border-[#C8A15A]/30
                      bg-[#F9F6EE]/65
                      px-4
                      py-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#C8A15A]
                        text-[#555B3F]
                      "
                    >
                      <Images
                        size={18}
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>
                      <p
                        className="
                          font-playfair
                          text-sm
                          text-[#555B3F]
                        "
                      >
                        Un álbum entre todos
                      </p>

                      <p
                        className="
                          mt-1
                          font-playfair
                          text-xs
                          leading-5
                          text-[#555B3F]/60
                        "
                      >
                        Cada invitado podrá aportar sus
                        recuerdos.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Botón */}

                <motion.button
                  type="button"
                  onClick={() => setOpen(true)}
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
                    bg-gradient-to-br
                    from-[#555B3F]
                    to-[#424832]
                    px-6
                    py-4
                    font-playfair
                    text-sm
                    text-[#F9F6EE]
                    shadow-[0_16px_34px_rgba(85,91,63,0.28)]
                    transition
                    duration-300

                    hover:from-[#424832] hover:to-[#555B3F]
                  "
                >
                  <Camera
                    size={19}
                    strokeWidth={1.6}
                  />

                  Abrir álbum compartido

                  <ChevronRight
                    size={18}
                    strokeWidth={1.6}
                  />
                </motion.button>

                <p
                  className="
                    mt-4
                    text-center
                    font-playfair
                    text-xs
                    italic
                    leading-5
                    text-[#555B3F]/55
                  "
                >
                  Necesitarás la aplicación Wedshoots y
                  el código de nuestro álbum.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Línea inferior */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-16
            w-px
            -translate-x-1/2
            bg-gradient-to-t
            from-[#C8A15A]
            to-transparent

            sm:h-20
          "
        />
      </section>

      {/* MODAL */}

      <AnimatePresence>
        {open && (
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
                setOpen(false);
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
              bg-[#424832]/85
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
                y: 45,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Información del álbum compartido"
              className="
                relative
                my-auto
                w-full
                max-w-lg
                overflow-hidden
                rounded-[30px]
                border
                border-[#C8A15A]/45
                bg-[#F9F6EE]
                shadow-[0_35px_120px_rgba(88,66,47,0.32)]

                sm:rounded-[38px]
              "
            >
              {/* Cabecera del modal */}

              <div
                className="
                  relative
                  overflow-hidden
                  px-6
                  pb-9
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
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-64
                    w-64
                    rounded-full
                    bg-[#F8E6A0]/25
                    blur-[80px]
                  "
                />

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar álbum"
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
                    border-[#F9F6EE]/20
                    bg-[#F9F6EE]/10
                    text-[#F9F6EE]
                    backdrop-blur-md
                    transition
                    duration-300

                    hover:rotate-90
                    hover:bg-[#F9F6EE]/20
                  "
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
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C8A15A]/45
                    bg-[#C8A15A]/15
                    text-[#F8E6A0]
                  "
                >
                  <Camera
                    size={24}
                    strokeWidth={1.4}
                  />
                </div>

                <p
                  className="
                    relative
                    z-10
                    mt-5
                    font-playfair
                    text-[10px]
                    uppercase
                    tracking-[0.36em]
                    text-[#F8E6A0]
                  "
                >
                  Álbum digital
                </p>

                <h3
                  className="
                    relative
                    z-10
                    mt-3
                    font-cursiveDancing
                    text-5xl
                    leading-none
                    text-[#F9F6EE]

                    sm:text-6xl
                  "
                >
                  Nuestro álbum
                </h3>

                <p
                  className="
                    relative
                    z-10
                    mx-auto
                    mt-4
                    max-w-sm
                    font-playfair
                    text-sm
                    leading-6
                    text-[#F9F6EE]/65
                  "
                >
                  Descarga la aplicación y utiliza
                  nuestro código para compartir tus
                  fotografías.
                </p>
              </div>

              {/* Cuerpo del modal */}

              <div
                className="
                  relative
                  space-y-6
                  px-6
                  py-8

                  sm:px-9
                  sm:py-10
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-12
                    h-52
                    w-52
                    rounded-full
                    bg-[#F8E6A0]/35
                    blur-[70px]
                  "
                />

                {/* App */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-between
                    gap-4
                    rounded-[20px]
                    border
                    border-[#C8A15A]/35
                    bg-[#F9F6EE]/75
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-4
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
                        bg-[#555B3F]
                        text-[#F9F6EE]
                      "
                    >
                      <Download
                        size={18}
                        strokeWidth={1.5}
                      />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          font-playfair
                          text-[9px]
                          uppercase
                          tracking-[0.24em]
                          text-[#C8A15A]
                        "
                      >
                        Aplicación
                      </p>

                      <p
                        className="
                          mt-1
                          font-playfair
                          text-base
                          text-[#555B3F]
                        "
                      >
                        Wedshoots
                      </p>
                    </div>
                  </div>

                  <a
                    href={enlaceApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      shrink-0
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#555B3F]
                      px-4
                      py-2
                      font-playfair
                      text-xs
                      text-[#555B3F]
                      transition
                      duration-300

                      hover:bg-[#555B3F]
                      hover:text-[#F9F6EE]
                    "
                  >
                    Descargar

                    <ExternalLink
                      size={14}
                      strokeWidth={1.6}
                    />
                  </a>
                </div>

                {/* Código */}

                <div
                  className="
                    relative
                    z-10
                    rounded-[22px]
                    border
                    border-[#C8A15A]/35
                    bg-[#F8E6A0]/20
                    p-5
                    text-center
                  "
                >
                  <p
                    className="
                      font-playfair
                      text-[9px]
                      uppercase
                      tracking-[0.28em]
                      text-[#555B3F]/65
                    "
                  >
                    Código del álbum
                  </p>

                  <button
                    type="button"
                    onClick={copiarCodigo}
                    className="
                      mt-3
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-[16px]
                      border
                      border-[#C8A15A]/35
                      bg-[#F9F6EE]/80
                      px-4
                      py-4
                      transition
                      duration-300

                      hover:border-[#C8A15A]
                      hover:bg-[#F9F6EE]
                    "
                  >
                    <span
                      className="
                        break-all
                        font-mono
                        text-base
                        tracking-[0.18em]
                        text-[#555B3F]

                        sm:text-lg
                        sm:tracking-[0.28em]
                      "
                    >
                      {codigoAlbum}
                    </span>

                    <Copy
                      size={17}
                      strokeWidth={1.5}
                      className="
                        shrink-0
                        text-[#C8A15A]
                      "
                    />
                  </button>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={
                        codigoCopiado
                          ? "copiado"
                          : "instruccion"
                      }
                      initial={{
                        opacity: 0,
                        y: 4,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -4,
                      }}
                      className="
                        mt-3
                        font-playfair
                        text-xs
                        text-[#555B3F]/65
                      "
                    >
                      {codigoCopiado
                        ? "Código copiado correctamente"
                        : "Toca el código para copiarlo"}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* QR */}

                <div
                  className="
                    relative
                    z-10
                    text-center
                  "
                >
                  <div
                    className="
                      mb-4
                      flex
                      items-center
                      justify-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        h-px
                        w-10
                        bg-[#C8A15A]/55
                      "
                    />

                    <QrCode
                      size={17}
                      strokeWidth={1.5}
                      className="text-[#C8A15A]"
                    />

                    <span
                      className="
                        h-px
                        w-10
                        bg-[#C8A15A]/55
                      "
                    />
                  </div>

                  <p
                    className="
                      mb-4
                      font-playfair
                      text-sm
                      text-[#555B3F]/70
                    "
                  >
                    Escanea el código QR
                  </p>

                  <div
                    className="
                      mx-auto
                      flex
                      h-48
                      w-48
                      items-center
                      justify-center
                      rounded-[24px]
                      border
                      border-[#C8A15A]/35
                      bg-[#F9F6EE]
                      p-3
                      shadow-[0_15px_40px_rgba(88,66,47,0.14)]
                    "
                  >
                    {!errorQR ? (
                      <img
                        src={imagenQR}
                        alt="Código QR del álbum compartido"
                        onError={() =>
                          setErrorQR(true)
                        }
                        className="
                          h-full
                          w-full
                          rounded-[14px]
                          object-contain
                        "
                      />
                    ) : (
                      <div
                        className="
                          flex
                          flex-col
                          items-center
                          gap-3
                          text-center
                        "
                      >
                        <QrCode
                          size={42}
                          strokeWidth={1}
                          className="text-[#C8A15A]"
                        />

                        <p
                          className="
                            font-playfair
                            text-xs
                            leading-5
                            text-[#555B3F]/60
                          "
                        >
                          Agrega el código QR en
                          <br />
                          public/qr.png
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <p
                  className="
                    relative
                    z-10
                    text-center
                    font-playfair
                    text-xs
                    italic
                    leading-5
                    text-[#555B3F]/55
                  "
                >
                  Escanea el código o utiliza la
                  aplicación para comenzar a compartir tus
                  recuerdos.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Album;