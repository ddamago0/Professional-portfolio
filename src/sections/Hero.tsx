'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg mb-3"
      >
        Hola, soy
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold"
      >
        Daniel
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-2xl md:text-4xl mt-4 text-gray-500"
      >
        Desarrollador de Software
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-xl mt-8 text-gray-400"
      >
        Me apasiona crear proyectos modernos, aprender nuevas tecnologías y
        desarrollar experiencias web profesionales.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-4 mt-10"
      >
        <button className="px-6 py-3 border rounded-xl">Ver proyectos</button>

        <button className="px-6 py-3 border rounded-xl">Contactarme</button>
      </motion.div>
    </section>
  );
}
