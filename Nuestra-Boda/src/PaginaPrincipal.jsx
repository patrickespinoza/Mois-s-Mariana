import React, { useState } from "react";
import Carousel from "./carrusel";
import { motion, AnimatePresence } from "framer-motion";
import Itinerario from "./Itinerario";
import Preguntas from "./Preguntas";
import Regalos from "./componentes-encabezado/Regalos";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import FrasePremium from "./componentes-encabezado/FrasePrincipal";
import EventoDireccion from "./componentes-encabezado/Ubicacion";
import DressCodePremium from "./componentes-encabezado/codigovestimenta";


export default function PaginaPrincipal() {
   // Estados para manejar boton de album
  const [open, setOpen] = useState(false);
  // Estados para manejar el formulario
  
  const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
// Estados para manejar boton de tarjeta bancaria

  const[mostrarModal, setMostrarModal] = useState(false)
  const [copiado, setCopiado] = useState(false);
  const copiarCuenta = () => {
  navigator.clipboard.writeText("1234 5678 9012 3456");
  setCopiado(true);

  setTimeout(() => {
    setCopiado(false);
  }, 2000);
};
  




  return (
    <div >

<FrasePremium/>

{/* Direccion del evento*/}

<EventoDireccion/>

 {/* Sección de Momentos */}
       <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="relative overflow-hidden py-32 px-6"
  style={{
    background: `
      radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 18%),
      radial-gradient(circle at bottom right, rgba(255,255,255,0.04), transparent 22%),
      linear-gradient(
        145deg,
        #f8f4ee 0%,
        #efe4d2 38%,
        #dcc4a3 100%
      )
    `,
  }}
>

  {/* GLOW */}
  <motion.div
    className="absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-20"
    style={{
      background: "rgba(212,175,55,0.18)",
      top: "-140px",
      left: "-120px",
    }}
    animate={{
      scale: [1, 1.12, 1],
      opacity: [0.15, 0.25, 0.15],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* TEXTURA */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `
        repeating-linear-gradient(
          45deg,
          rgba(0,0,0,0.08) 0px,
          rgba(0,0,0,0.08) 1px,
          transparent 1px,
          transparent 6px
        )
      `,
    }}
  />

  {/* CONTENIDO */}
  <div className="relative z-10 max-w-6xl mx-auto text-center">

    {/* SUBTITULO */}
    <motion.p
      className="uppercase text-[11px] tracking-[0.55em]"
      style={{
        color: "#9b7b52",
      }}
      animate={{
        letterSpacing: ["0.45em", "0.55em", "0.45em"],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      NUESTROS MOMENTOS
    </motion.p>

    {/* TITULO */}
    <motion.h1
      className="mt-6 text-[42px] md:text-[72px] leading-none font-cursiveDancing"
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
          0 2px 10px rgba(212,175,55,0.12),
          0 8px 24px rgba(0,0,0,0.08)
        `,
      }}
      animate={{
        opacity: [0.92, 1, 0.92],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
    >
      Nuestra Historia
    </motion.h1>

    {/* DETALLE */}
    <motion.div
      className="relative flex justify-center items-center my-10"
      animate={{
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
    >

      <motion.div
        className="h-[1px]"
        style={{
          width: "90px",
          background:
            "linear-gradient(to right, transparent, rgba(180,140,80,0.7))",
        }}
        animate={{
          width: ["70px", "95px", "70px"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="relative mx-5"
        animate={{
          rotate: [0, 4, -4, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >

        <div className="absolute inset-0 blur-xl bg-[#d4af37]/20 scale-150 rounded-full" />

        <div
          className="relative w-3 h-3 rotate-45"
          style={{
            background: `
              linear-gradient(
                135deg,
                #d4af37 0%,
                #b38728 45%,
                #7a5a16 100%
              )
            `,
          }}
        />
      </motion.div>

      <motion.div
        className="h-[1px]"
        style={{
          width: "90px",
          background:
            "linear-gradient(to left, transparent, rgba(180,140,80,0.7))",
        }}
        animate={{
          width: ["70px", "95px", "70px"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

    </motion.div>

    {/* TEXTO */}
    <motion.p
      className="max-w-2xl mx-auto text-[15px] md:text-[17px] leading-relaxed"
      style={{
        color: "#6f5a40",
      }}
      animate={{
        opacity: [0.75, 1, 0.75],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
    >
      Un recorrido por los momentos más especiales
      que han marcado nuestra historia juntos.
    </motion.p>

    {/* CARD CARRUSEL */}
    <motion.div
      className="relative mt-20 rounded-[40px] overflow-hidden p-5 md:p-8"
      style={{
        background: `
          linear-gradient(
            145deg,
            rgba(255,255,255,0.72),
            rgba(255,255,255,0.35)
          )
        `,
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.4)",
        boxShadow: `
          0 25px 60px rgba(0,0,0,0.12),
          inset 0 1px 0 rgba(255,255,255,0.6)
        `,
      }}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >

      {/* BRILLO */}
      <div
        className="absolute top-0 left-0 w-28 h-full opacity-10"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.9), transparent)",
          transform: "skewX(-20deg)",
        }}
      />

      {/* BORDE */}
      <div className="absolute inset-[10px] rounded-[30px] border border-white/30 pointer-events-none" />

      {/* CARRUSEL */}
      <div className="relative z-10">
        <Carousel />
      </div>

    </motion.div>

  </div>

</motion.section>

{/* Seccion de Itinerario  */}
<div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex justify-center">
  <div className="w-full max-w-xl">
    <Itinerario />
  </div>
</div>

{/* Seccion de Frase  */}
 <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="relative flex flex-col items-center justify-center text-center py-36 px-6 overflow-hidden bg-gradient-to-b from-[#fdfaf6] via-[#fbf6f2] to-[#fffefb]"
>

  {/* Glow de fondo ultra premium */}
  <div className="absolute w-[700px] h-[700px] bg-gradient-to-tr from-[#f5d185]/30 via-[#9e8e7b]/20 to-[#ffffff]/0 rounded-full blur-3xl animate-pulse top-[-150px] left-[-100px]"></div>
  <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-[#facf91]/20 to-[#fdf6e3]/0 rounded-full blur-2xl bottom-[-120px] right-[-80px] animate-pulse"></div>

  {/* Resplandor radial detrás del texto */}
  <div className="absolute w-[600px] h-[600px] bg-pink-100/20 rounded-full blur-3xl animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

  {/* Partículas flotantes */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className="absolute bg-red-400/75 rounded-full blur-sm"
        style={{
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float${i} ${Math.random() * 10 + 5}s ease-in-out infinite alternate`
        }}
      ></div>
    ))}
  </div>

  {/* Contenido */}
  <div className="relative z-10 max-w-3xl">

    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[GreatVibes] bg-clip-text text-transparent bg-gradient-to-r from-[#7f5b45] via-[#d18f81] to-[#a08428] leading-snug mb-4 drop-shadow-xl">
      "Sea cual sea la materia de que estan hechas
    </p>
    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[GreatVibes] bg-clip-text text-transparent bg-gradient-to-r from-[#9d7155] via-[#c1897c] to-[#a08428] leading-snug mb-4 drop-shadow-xl">
      nuestras almas
    </p>
    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[GreatVibes] bg-clip-text text-transparent bg-gradient-to-r from-[#b27d5c] via-[#a9776c] to-[#a08428] leading-snug mb-12 drop-shadow-xl">
      la suya y la mia son iguales."
    </p>

    {/* Línea central elegante */}
    <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-[#E9CFC9] to-transparent mx-auto mb-8 rounded-full shadow-lg"></div>

    <p className="text-sm sm:text-base tracking-[0.4em] text-[#9c713b] uppercase font-semibold drop-shadow-md">
      - Emily Bronte
    </p>
  </div>

  {/* Animación de partículas */}
  <style jsx>{`
    ${Array.from({ length: 30 }).map((_, i) => `
      @keyframes float${i} {
        0% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
        50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
      }
    `).join('')}
  `}</style>

</motion.div>


   {/* Sección de Vestimenta */}

 <DressCodePremium/>

 {/* Sección de Album Compartido */}

 <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex items-center justify-center p-6"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-md w-full text-center space-y-6 text-black relative overflow-hidden">

          {/* Glow */}
          <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-[#fcd5b5]/40 via-[#f9e1d1]/20 to-transparent rounded-full blur-3xl animate-pulse -z-10"></div>

          <h1 className="text-3xl sm:text-4xl font-bold font-playfair tracking-wide">
            ÁLBUM COMPARTIDO
          </h1>

          <div className="w-20 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#9E8E7B] to-transparent rounded-full"></div>

          <p className="text-lg sm:text-2xl font-[DancingScript]">
            Sube tus fotos del evento y revive cada momento especial junto a nosotros
          </p>

          {/* BOTÓN */}
          <button
            onClick={() => setOpen(true)}
            className="bg-[#9E8E7B] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            Ir al Álbum 📸
          </button>
        </div>
      </motion.div>

      {/* MODAL de Album*/}
 <AnimatePresence>
  {open && (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 40 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white rounded-[2rem] p-8 max-w-md w-full text-center space-y-6 shadow-[0_25px_80px_rgba(0,0,0,0.3)] overflow-hidden"
      >

        {/* Glow interno */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fcd5b5]/30 via-transparent to-[#f9e1d1]/20 rounded-[2rem] blur-2xl -z-10"></div>

        {/* Cerrar */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-5 text-gray-400 hover:text-black text-xl transition"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-2xl font-playfair font-semibold text-[#7f5b45]">
          Nuestro Álbum 📸
        </h2>

        {/* Línea */}
        <div className="w-20 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#9E8E7B] to-transparent"></div>

        {/* App */}
        <p className="text-gray-600">
          Aplicación:
          <span className="block font-semibold text-[#9E8E7B] mt-1">
            Wedshoots
          </span>
        </p>

        {/* Botón app */}
        <a
          href="https://apps.apple.com/mx/app/wedshoots/id660256196"
          target="_blank"
          className="inline-block px-6 py-2 rounded-full border border-[#9E8E7B] text-[#9E8E7B] hover:bg-[#9E8E7B] hover:text-white transition"
        >
          Descargar App
        </a>

        {/* Código */}
        <div className="space-y-2">
          <p className="text-gray-500 text-sm">Código del álbum</p>
          <div className="bg-[#f8f5f2] rounded-xl py-3 px-4 font-mono text-lg tracking-[0.3em] text-[#7f5b45] shadow-inner">
            MXat19tb26
          </div>
        </div>

        {/* QR con estilo */}
        <div className="flex justify-center">
          <div className="p-3 bg-white rounded-2xl shadow-lg border border-gray-200">
            <img
              src="/qr.png"
              alt="QR"
              className="w-40 h-40 rounded-lg"
            />
          </div>
        </div>

        <p className="text-xs text-gray-400">
          Escanea el código o usa la app para subir tus fotos ✨
        </p>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

{/* Sección de Cuanto nos conoces */}
<div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex justify-center">
  <div className="w-full max-w-xl">
    <Preguntas/>
  </div>
</div>
     

 {/* Sección de Regalos */}
<div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex justify-center">
  <div className="w-full max-w-xl">
    <Regalos/>
  </div>
</div>
     

{/* Sección de imagen de separacion */}

<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="relative w-full flex justify-center items-center py-16 bg-black overflow-hidden"
>

  {/* Fondo con blur */}
  <img
    src="/finalboda.webp"
    alt="Fondo boda"
    className="absolute w-full h-full object-cover opacity-30 blur-sm scale-110"
  />

  {/* Contenido principal */}
  <div className="relative flex flex-col items-center">

    <img
      src="/finalboda.webp"
      alt="Boda"
      className="w-72 sm:w-96 rounded-2xl shadow-2xl border border-white/20"
    />

    {/* Línea decorativa */}
    <div className="w-24 h-[2px] bg-[#9E8E7B] mt-6"></div>

    {/* Texto opcional elegante */}
    <p className="text-white mt-4 text-lg font-cursiveDancing opacity-90">
      ¡Te esperamos!
    </p>

  </div>
</motion.div>

{/* Sección de Confirmación de Asistencia */}
<div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex justify-center">
  <div className="w-full max-w-xl">
    <Confirmacion/>
  </div>
</div>

      </div>      
  );
}
