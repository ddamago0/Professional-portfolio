export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8">
      <p className="text-lg mb-3">Hola, soy</p>

      <h1 className="text-5xl md:text-7xl font-bold">
        Daniel David Martinez Gonzalez
      </h1>

      <h2 className="text-2xl md:text-4xl mt-4 text-gray-500">
        Desarrollador de Software
      </h2>

      <p className="max-w-xl mt-8 text-gray-400">
        Me apasiona crear proyectos modernos, aprender nuevas tecnologías y
        desarrollar experiencias web profesionales.
      </p>

      <div className="flex gap-4 mt-10">
        <button className="px-6 py-3 border rounded-xl">Ver proyectos</button>

        <button className="px-6 py-3 border rounded-xl">Contactarme</button>
      </div>
    </section>
  );
}
