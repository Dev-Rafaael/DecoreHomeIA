import Image from "next/image"

export function EnvironmentSection() {
  return (
    <section
      id="evento"
      className="
        w-full
        bg-amber-100
        py-20
        px-6
      "
    >
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex justify-center">
          <figure className="text-center">
            <Image
              src="https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765320644/hrz-4_al55ry.jpg"
              alt="Ambiente"
              width={600}
              height={400}
              className="rounded-lg"
            />

            <figcaption
              className="
                text-5xl
                font-bold
                text-zinc-700
                mt-8
                max-w-2xl
              "
            >
              Conheça os nossos ambientes que você vai decorar
            </figcaption>
          </figure>
        </div>

        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-center
            gap-12
          "
        >
          <div className="max-w-lg">
            <h1
              className="
                text-5xl
                font-light
                text-zinc-700
                mb-8
              "
            >
              Detalhes
            </h1>

            <ul
              className="
                list-disc
                space-y-4
                text-xl
                text-zinc-700
              "
            >
              <li>Posicionamento</li>
              <li>Aproveitamento de Espaço</li>
              <li>Combinação de Cores</li>
              <li>Organização</li>
              <li className="font-bold">
                E muito mais...
              </li>
            </ul>
          </div>

          <Image
            src="https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765320689/sqr-2_u8ibz6.jpg"
            alt="Detalhes"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}