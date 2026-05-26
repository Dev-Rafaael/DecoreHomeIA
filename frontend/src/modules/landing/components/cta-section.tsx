export function CtaSection() {
  return (
    <section
      className="
        w-full
        py-24
        px-6
        bg-cover
        bg-center
        text-white
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(22,22,22,0.8), rgba(8,5,5,0.8)), url('https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765320644/hrz-2_xcwz6r.jpg')",
      }}
    >
      <div
        className="
          max-w-4xl
          mx-auto
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        <h1
          className="
            text-5xl
            font-light
            mb-10
          "
        >
          Gostou? Então se inscreva:
        </h1>

        <button
          className="
            bg-pink-500
            hover:bg-pink-600
            transition
            px-16
            py-4
            rounded-lg
            text-2xl
            font-medium
          "
        >
          Solicitar Inscrição
        </button>
      </div>
    </section>
  )
}