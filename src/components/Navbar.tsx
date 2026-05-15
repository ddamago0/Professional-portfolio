export default function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-8 border-b">
      <h1 className="text-xl font-bold">Daniel</h1>

      <ul className="hidden md:flex gap-8">
        <li className="cursor-pointer">Inicio</li>

        <li className="cursor-pointer">Sobre mí</li>

        <li className="cursor-pointer">Proyectos</li>

        <li className="cursor-pointer">Contacto</li>
      </ul>

      <button>ES | EN</button>
    </nav>
  );
}
