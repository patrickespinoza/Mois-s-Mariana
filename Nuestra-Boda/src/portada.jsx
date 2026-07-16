import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Countdown from "./componentes-encabezado/encabeza-cuenta";

/* =========================
   TEMAS DEL SOBRE
========================= */
const envelopeThemes = {
  luxuryGold: {
    body: "linear-gradient(135deg, #1f1f1f, #2c2c2c 40%, #111111 100%)",
    flap: "linear-gradient(to bottom, #3a3a3a, #1a1a1a)",
    border: "#c8a95b",
    seal:
      "radial-gradient(circle at 30% 30%, #f5e6b0, #d4af37 40%, #9c7a1c 70%, #5f4a00 100%)",
  },

  romanticRose: {
    body: "linear-gradient(135deg, #f3d6dc, #e7b8c2 40%, #d998a7 100%)",
    flap: "linear-gradient(to bottom, #f0c7d1, #d998a7)",
    border: "#c97b8d",
    seal:
      "radial-gradient(circle at 30% 30%, #fff0f3, #f7b2c4 40%, #d97b93 70%, #a64d67 100%)",
  },

  emerald: {
    body: "linear-gradient(135deg, #6b705c, #5a614f 40%, #4a4f40 100%)",
    flap: "linear-gradient(to bottom, #7a8068, #5a614f)",
    border: "#7a8068",
    seal:
      "radial-gradient(circle at 30% 30%, #f5e6b0, #d4af37 40%, #9c7a1c 70%, #5f4a00 100%)",
  },

  royalBlue: {
    body: "linear-gradient(135deg, #1e3a5f, #27496d 40%, #142850 100%)",
    flap: "linear-gradient(to bottom, #3b5b8a, #1e3a5f)",
    border: "#6fa3d2",
    seal:
      "radial-gradient(circle at 30% 30%, #dceeff, #7db9ff 40%, #3f7dcf 70%, #224c8f 100%)",
  },
};

export default function Portada() {
  const audioRef = useRef(null);

  const [introActiva, setIntroActiva] = useState(true);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [abrirSobre, setAbrirSobre] = useState(false);

  const [invitados, setInvitados] = useState("Invitado");
  const [pases, setPases] = useState(1);

  /* =========================
     TEMA ACTIVO
  ========================= */
  const theme = envelopeThemes.luxuryGold;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const nombre = params.get("nombre");
    const cantidad = params.get("pases");

    if (nombre) setInvitados(nombre);
    if (cantidad) setPases(parseInt(cantidad));
  }, []);

  const iniciarExperiencia = () => {
    setAbrirSobre(true);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.play();
      }

      setIntroActiva(false);
      setMostrarContenido(true);
    }, 1800);
  };

  return (
    <div className="relative w-full overflow-hidden bg-white text-[#1a1a1a]">

      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/TylerShaw.mp3" type="audio/mpeg" />
      </audio>

      {/* INTRO */}
      <AnimatePresence>
        {introActiva && (

          <motion.div
  className="fixed inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-50 pt-16 sm:pt-24 overflow-hidden"
  style={{
  background: `
    radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 20%),
    linear-gradient(
      145deg,
      #3a1f1f 0%,
      #241212 40%,
      #120909 100%
    )
  `,
}}
  exit={{ opacity: 0 }}
>

            {/* TEXTOS PREMIUM */}
<div className="relative mb-10 sm:mb-12">

  {/* LÍNEA DECORATIVA */}
  <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5">

    <div className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#c8a96b]" />

    <p
      className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.45em] sm:tracking-[0.55em] font-light"
      style={{
        color: "#8b7355",
        textShadow: "0 1px 2px rgba(255,255,255,0.4)",
      }}
    >
      NUESTRA BODA
    </p>

    <div className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#c8a96b]" />

  </div>

  {/* NOMBRES */}
  <h1
    className="text-[42px] sm:text-[52px] md:text-[78px] leading-none font-cursiveDancing"
    style={{
      background: `
        linear-gradient(
          180deg,
          #fffdf8 0%,
          #f4dfb8 35%,
          #d4af37 65%,
          #8f6b1d 100%
        )
      `,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: `
        0 2px 10px rgba(212,175,55,0.15),
        0 8px 30px rgba(0,0,0,0.15)
      `,
      letterSpacing: "0.02em",
    }}
  >
    Valeria
  </h1>

  {/* AMPERSAND */}
  <div className="flex justify-center my-1">

    <span
      className="text-[18px] sm:text-[22px] md:text-[28px] italic"
      style={{
        color: "#b08b2d",
        textShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      &
    </span>

  </div>

  {/* SEGUNDO NOMBRE */}
  <h1
    className="text-[42px] sm:text-[52px] md:text-[78px] leading-none font-cursiveDancing"
    style={{
      background: `
        linear-gradient(
          180deg,
          #fffdf8 0%,
          #f4dfb8 35%,
          #d4af37 65%,
          #8f6b1d 100%
        )
      `,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: `
        0 2px 10px rgba(212,175,55,0.15),
        0 8px 30px rgba(0,0,0,0.15)
      `,
      letterSpacing: "0.02em",
    }}
  >
    Alejandro
  </h1>

  {/* FECHA */}
  <div className="mt-5 sm:mt-6 flex flex-col items-center">

    <div className="w-20 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c8a96b] to-transparent mb-4" />

    <p
      className="text-[11px] sm:text-[13px] md:text-[14px] tracking-[0.3em] sm:tracking-[0.45em] uppercase"
      style={{
        color: "#7a6447",
        textShadow: "0 1px 2px rgba(255,255,255,0.3)",
      }}
    >
      11 • Junio • 2026
    </p>

  </div>
</div>

            {/* SOBRE PREMIUM */}
<div
  onClick={iniciarExperiencia}
  className="relative w-[92vw] max-w-[340px] aspect-[340/240] cursor-pointer group"
  style={{ perspective: 2200 }}
>

  {/* GLOW EXTERIOR */}
  <div className="absolute inset-0 rounded-[28px] bg-[#d4af37]/20 blur-3xl scale-110 opacity-60" />

  {/* SOMBRA */}
  <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 w-[70%] h-14 sm:h-16 bg-black/25 blur-3xl rounded-full" />

  {/* CUERPO PRINCIPAL */}
  <div
    className="absolute inset-0 rounded-[26px] border overflow-hidden backdrop-blur-xl"
    style={{
      background: `
        linear-gradient(
          145deg,
          rgba(255,255,255,0.08),
          rgba(255,255,255,0.02)
        ),
        ${theme.body}
      `,
      borderColor: "rgba(255,255,255,0.12)",
      boxShadow: `
        0 40px 80px rgba(0,0,0,0.45),
        inset 0 1px 0 rgba(255,255,255,0.12),
        inset 0 -2px 12px rgba(0,0,0,0.45)
      `,
    }}
  >

    {/* TEXTURA */}
    <div
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.12) 0px,
            rgba(255,255,255,0.12) 1px,
            transparent 1px,
            transparent 6px
          )
        `,
      }}
    />

    {/* BRILLO SUPERIOR */}
    <div
      className="absolute top-0 left-0 w-full h-24 opacity-30"
      style={{
        background:
          "linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)",
      }}
    />

    {/* REFLEJO LATERAL */}
    <div
      className="absolute top-0 left-0 h-full w-20 opacity-10"
      style={{
        background:
          "linear-gradient(to right, rgba(255,255,255,0.6), transparent)",
        transform: "skewX(-20deg)",
      }}
    />
  </div>

  {/* BORDE INTERNO */}
  <div className="absolute inset-[8px] rounded-[20px] border border-white/10" />

  {/* TAPA DEL SOBRE */}
  <motion.div
    className="absolute top-0 left-0 w-full h-1/2 origin-top z-20"
    style={{
      clipPath: "polygon(0 0, 50% 100%, 100% 0)",
      background: `
        linear-gradient(
          to bottom,
          rgba(255,255,255,0.18),
          rgba(255,255,255,0.02)
        ),
        ${theme.flap}
      `,
      boxShadow: `
        0 25px 40px rgba(0,0,0,0.4),
        inset 0 2px 0 rgba(255,255,255,0.15)
      `,
    }}
    animate={
      abrirSobre
        ? {
            rotateX: -185,
            y: -2,
          }
        : {
            rotateX: 0,
            y: 0,
          }
    }
    transition={{
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    }}
  />

  {/* CARTA INTERNA */}
<motion.div
  className="absolute left-1/2 top-[10%] -translate-x-1/2 w-[82%] h-[78%] rounded-[18px] z-10 overflow-hidden flex flex-col items-center justify-between py-5 sm:py-6 px-4"
  style={{
    background: `
      linear-gradient(
        180deg,
        #fffdf8 0%,
        #f5eee2 100%
      )
    `,
    boxShadow: `
      0 10px 30px rgba(0,0,0,0.18),
      inset 0 1px 0 rgba(255,255,255,0.8)
    `,
  }}
  animate={
    abrirSobre
      ? {
          y: -70,
          scale: 1.02,
        }
      : {
          y: 0,
          scale: 1,
        }
  }
  transition={{
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  }}
>

  {/* DECORACIÓN */}
  <div className="w-12 sm:w-16 h-[2px] bg-[#d4af37]/60 mt-1" />

  {/* TEXTO SUPERIOR */}
  <p
    className="
      text-center
      text-[8px]
      sm:text-[11px]
      tracking-[0.25em]
      sm:tracking-[0.4em]
      text-[#b08b2d]
      whitespace-nowrap
    "
  >
    INVITACIÓN
  </p>

  {/* NOMBRES */}
  <div className="flex flex-col items-center justify-center leading-none">

    <h3 className="text-[20px] sm:text-[28px] font-cursiveDancing text-[#3d2d1f] text-center">
      Valeria
    </h3>

    <span className="text-[#b08b2d] text-[14px] sm:text-[18px] my-1">
      &
    </span>

    <h3 className="text-[20px] sm:text-[28px] font-cursiveDancing text-[#3d2d1f] text-center">
      Alejandro
    </h3>

  </div>

  {/* TEXTO INFERIOR */}
  <p
    className="
      text-center
      text-[8px]
      sm:text-[11px]
      tracking-[0.18em]
      sm:tracking-[0.3em]
      text-[#8b7355]
      whitespace-nowrap
    "
  >
    TOUCH TO OPEN
  </p>

</motion.div>

  {/* SELLO */}
  <motion.div
    className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
    animate={
      abrirSobre
        ? {
            scale: 0.6,
            opacity: 0,
            y: -20,
          }
        : {
            scale: 1,
            opacity: 1,
            y: 0,
          }
    }
    transition={{ duration: 0.6 }}
  >
    <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">

      {/* GLOW */}
      <div className="absolute inset-0 rounded-full bg-[#d4af37]/30 blur-2xl scale-125" />

      {/* SELLO */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: theme.seal,
          boxShadow: `
            inset 0 4px 10px rgba(255,255,255,0.6),
            inset 0 -12px 20px rgba(0,0,0,0.45),
            0 20px 35px rgba(0,0,0,0.45)
          `,
        }}
      />

      {/* BORDE */}
      <div className="absolute inset-[6px] rounded-full border border-black/25" />

      {/* LETRA */}
      <div
        className="relative z-10 text-[26px] sm:text-[34px] font-serif"
        style={{
          color: "#6e5500",
          textShadow: `
            1px 1px 0 rgba(255,255,255,0.45),
            -1px -1px 0 rgba(0,0,0,0.55),
            0 4px 6px rgba(0,0,0,0.35)
          `,
        }}
      >
        M
      </div>
    </div>
  </motion.div>

  {/* TEXTO */}
  <motion.div
    className="absolute inset-0 flex items-start justify-center pt-4 sm:pt-6 z-40"
    animate={abrirSobre ? { opacity: 0 } : { opacity: 1 }}
  >
    <p className="text-white/75 tracking-[0.3em] sm:tracking-[0.45em] text-[9px] sm:text-[11px] font-light">
      ABRIR
    </p>
  </motion.div>
</div>

            {/* PASES */}
<div className="mt-10 sm:mt-12 flex flex-col items-center">

  {/* LÍNEA SUPERIOR */}
  <div className="w-20 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c8a96b] to-transparent mb-5" />

  {/* TEXTO */}
  <p
    className="text-[10px] sm:text-[11px] md:text-xs tracking-[0.45em] sm:tracking-[0.55em] uppercase"
    style={{
      color: "#8b7355",
      textShadow: "0 1px 2px rgba(255,255,255,0.35)",
    }}
  >
    HEMOS RESERVADO
  </p>

  {/* NÚMERO */}
  <div className="relative my-3">

    {/* GLOW */}
    <div className="absolute inset-0 blur-2xl bg-[#d4af37]/20 scale-150 rounded-full" />

    <span
      className="relative text-[46px] sm:text-[56px] md:text-[68px] leading-none font-light"
      style={{
        background: `
          linear-gradient(
            180deg,
            #fffdf8 0%,
            #f4dfb8 35%,
            #d4af37 65%,
            #8f6b1d 100%
          )
        `,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: `
          0 2px 10px rgba(212,175,55,0.18),
          0 8px 24px rgba(0,0,0,0.12)
        `,
      }}
    >
      {pases}
    </span>

  </div>

  {/* SUBTEXTO */}
  <p
    className="text-[10px] sm:text-[11px] md:text-xs tracking-[0.35em] sm:tracking-[0.45em] uppercase text-center"
    style={{
      color: "#7a6447",
      textShadow: "0 1px 2px rgba(255,255,255,0.25)",
    }}
  >
    LUGARES EN SU HONOR
  </p>

  {/* LÍNEA */}
  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c8a96b]/70 to-transparent mt-5 mb-5" />

  {/* INVITADO */}
  <div
    className="px-4 sm:px-5 py-2 rounded-full border backdrop-blur-md max-w-[92vw]"
    style={{
      background: "rgba(255,255,255,0.18)",
      borderColor: "rgba(255,255,255,0.25)",
      boxShadow: `
        0 8px 24px rgba(0,0,0,0.08),
        inset 0 1px 0 rgba(255,255,255,0.25)
      `,
    }}
  >
    <p
      className="text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.12em] sm:tracking-[0.18em] text-center break-words"
      style={{
        color: "#6f5a40",
      }}
    >
      Invitado:
      <span
        className="ml-2"
        style={{
          color: "#3d2d1f",
          fontWeight: 600,
        }}
      >
        {invitados}
      </span>
    </p>
  </div>

</div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTENIDO */}
      <div className="relative w-full">

        <motion.img
          src="/prueba-03.jpg"
          alt="portada"
          className="w-full h-auto object-contain"
          initial={{ opacity: 0 }}
          animate={mostrarContenido ? { opacity: 1 } : { opacity: 0 }}
        />

        <motion.div
          className="absolute inset-0 bg-black/30"
          initial={{ opacity: 0 }}
          animate={mostrarContenido ? { opacity: 1 } : { opacity: 0 }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white"
          initial={{ opacity: 0 }}
          animate={mostrarContenido ? { opacity: 1 } : { opacity: 0 }}
        >
          <h1 className="text-4xl md:text-7xl font-cursiveDancing">
            Valeria & Alejandro
          </h1>

          <Countdown targetDate="2027-06-11T00:00:00" />
        </motion.div>

      </div>
    </div>
  );
}