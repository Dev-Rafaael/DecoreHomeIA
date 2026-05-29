
import Image from "next/image"


export function AboutSection() {
return (
    <section
      id="sobre"
      className="w-full bg-amber-100"
    >

      <h1
        className="
          flex
          items-center
          justify-center
          h-32
          bg-gray-500
          text-zinc-800
          text-3xl
          font-light
          text-center
          px-4
        "
      >
        O que você vai aprender:
      </h1>

      <div
        className="
          flex
          flex-col
          lg:flex-row
          items-center
          justify-center
          gap-10
          py-8
          px-4
        "
      >
        <figure className="text-center">
          <Image
            src="https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765320700/hrz-1_i9fgwn.jpg"
            alt="Dormitórios"
            width={250}
            height={250}
            className="
              rounded-full
              object-cover
              aspect-square
              mx-auto
              mb-4
            "
          />

          <figcaption
            className="
              max-w-xs
              text-lg
              text-zinc-600
            "
          >
            Tendências e melhores opções para decoração de Dormitórios.
          </figcaption>
        </figure>

        <figure className="text-center">
          <Image
            src="https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765320689/sqr-2_u8ibz6.jpg"
            alt="Cozinha"
            width={250}
            height={250}
            className="
              rounded-full
              object-cover
              aspect-square
              mx-auto
              mb-4
            "
          />

          <figcaption
            className="
              max-w-xs
              text-lg
              text-zinc-600
            "
          >
            Tendências e melhores opções para decoração de Cozinha.
          </figcaption>
        </figure>

        <figure className="text-center">
          <Image
            src="https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765320700/sqr-3_wrfh5o.jpg"
            alt="Sala"
            width={250}
            height={250}
            className="
              rounded-full
              object-cover
              aspect-square
              mx-auto
              mb-4
            "
          />

          <figcaption
            className="
              max-w-xs
              text-lg
              text-zinc-600
            "
          >
            Tendências e melhores opções para decoração de Sala de Estar.
          </figcaption>
        </figure>
      </div>

   
    </section>
  )
}