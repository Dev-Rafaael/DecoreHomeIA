export function LocationSection() {
  return (
    <section
      className="
        w-full
        bg-black/80
        bg-cover
        bg-center
        text-white
        py-20
        px-6
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(40,39,39,0.6), rgba(0,0,0,0.9)), url('https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765320644/hrz-5_fmohou.jpg')",
      }}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-16
        "
      >
        <div
          className="
            flex
            items-center
            gap-6
            text-center
          "
        >
          <i
            className="
              bi bi-geo-alt-fill
              text-6xl
              text-pink-500
            "
          />

          <div className="space-y-2 text-lg">
            <p>Av. Paulista, 1578</p>
            <p>Bela Vista – São Paulo, SP</p>
            <p>Abertura: 14h</p>
          </div>
        </div>

        <div className="max-w-md text-center lg:text-left">
          <h1
            className="
              text-5xl
              uppercase
              text-fuchsia-500
              mb-6
              font-bold
            "
          >
            Local de Destaque
          </h1>

          <p className="text-xl leading-relaxed">
            O evento será realizado em um dos pontos mais conhecidos da cidade,
            com fácil acesso por metrô, restaurantes próximos e excelente estrutura.
          </p>
        </div>
      </div>
    </section>
  )
}