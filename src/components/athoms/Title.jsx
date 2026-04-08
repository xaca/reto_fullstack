// Un componente de React funcional y moderno que usa Tailwind CSS v4.0
function Title({ title }) {
  return (
    // Contenedor principal para centrar el contenido en la página
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      {/* Contenedor del texto con espaciado vertical */}
      <div className="flex flex-col items-center gap-1">
        {/* Título: "Retreats Coming" */}
        <h1 className="
          /* Tipografía */
          text-4xl md:text-5xl lg:text-6xl
          font-medium
          tracking-tight
          
          /* Color del texto (Azul Marino Profundo) */
          text-[color:#092556]
          
          /* Espaciado */
          mb-1
        ">
          {title}
        </h1>

        {/* Separador: Una línea horizontal fina */}
        <div className="
          /* Dimensiones */
          w-16 h-px
          
          /* Color de fondo (Gris claro) */
          bg-stone-300
          
          /* Margen superior para separación */
          mt-2
        "></div>
      </div>
    </div>
  );
}
export default Title;