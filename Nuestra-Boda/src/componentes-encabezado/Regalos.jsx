import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ✨ Animación
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const Regalos = () => {

  const [mostrarModal, setMostrarModal] = useState(false);

  // 🎁 Número de evento Liverpool
  const numeroEvento = "12345678";

  // 🔗 Link dinámico Liverpool
  const linkLiverpool = `https://www.liverpool.com.mx/tienda/giftregistry/giftRegistryDetail.jsp?eventNo=${numeroEvento}`;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center gap-3 h-96 md:h-80 lg:h-[700px]"
    >
      
      {/* 🎁 ICONO */}
      <img
        className="h-24 w-24 sm:h-28 sm:w-28 p-3"
        src="/regalo1.png"
        alt="Regalo"
      />

      {/* 📝 TITULO */}
      <h1 className="text-xl sm:text-2xl font-bold p-3 font-playfair">
        REGALOS
      </h1>

      {/* 💬 TEXTO */}
      <p className="text-lg sm:text-xl p-7 text-center max-w-xl">
        Tu presencia es nuestro mejor regalo, pero si deseas tener un detalle con nosotros,
        hemos creado una mesa de regalos en Liverpool 💛
      </p>

      {/* 🔘 BOTÓN */}
      <button 
        className="bg-[#9E8E7B] rounded-md p-3 w-80 h-14 flex items-center justify-center text-lg text-white hover:scale-105 transition"
        onClick={() => setMostrarModal(true)}
      >
        Ver Mesa de Regalos
      </button>

      {/* 🪟 MODAL */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setMostrarModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* 💎 TARJETA PREMIUM */}
            <motion.div
              className="relative w-[340px] min-h-[300px] rounded-3xl p-6 text-white shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 80 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 80 }}
              transition={{ duration: 0.4 }}
              style={{
                background: "linear-gradient(135deg, #9E8E7B, #6e6458)",
              }}
            >

              {/* ✨ BRILLO */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)] animate-[shine_4s_infinite]" />

              {/* 💍 CONTENIDO */}
              <div className="relative z-10 flex flex-col items-center text-center">

                <p className="text-xs tracking-[0.3em] opacity-70">
                  MESA DE REGALOS
                </p>

                <h2 className="text-2xl font-playfair mt-2">
                  Liverpool
                </h2>

                <div className="w-12 h-[1px] bg-white/40 my-4" />

                <p className="text-sm opacity-80">
                  Número de evento
                </p>

                <p className="text-3xl tracking-[0.2em] font-semibold mt-2">
                  {numeroEvento}
                </p>

                <p className="text-xs mt-4 opacity-70 leading-relaxed px-4">
                  Hemos seleccionado algunos regalos que nos encantaría recibir.
                  Puedes ver nuestra mesa dando clic abajo.
                </p>

                {/* 🔗 BOTÓN LIVERPOOL */}
                <a
                  href={linkLiverpool}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-3 rounded-xl bg-white text-black font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  Ver mesa de regalos
                </a>

              </div>

              {/* ❌ CERRAR */}
              <button
                className="absolute top-3 right-4 text-white text-lg opacity-70 hover:opacity-100"
                onClick={() => setMostrarModal(false)}
              >
                ✕
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default Regalos;