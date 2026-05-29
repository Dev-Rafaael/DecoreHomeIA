import { DecorationForm } from "../../decoration/components/DecorationForm"
import { EventForm } from "../components/event-form"

export function HeroSection() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-cover
        bg-center
        flex
        items-center
        justify-center
        px-6
        py-20
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.8), rgba(24,23,23,0.8)), url('https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765320643/hrz-3_lxjnmu.jpg')",
      }}
    >
      <div
        className="
          max-w-7xl
          w-full
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-16
        "
      >
        <div className="max-w-xl text-white">
          <h1
            className="
              text-6xl
              font-bold
              text-pink-500
              mb-4
            "
          >
            InDeCor
          </h1>

          <h2
            className="
              text-4xl
              uppercase
              mb-6
            "
          >
            Um evento para revolucionar sua criatividade
          </h2>

          <p>Data do Evento:</p>

          <p className="text-pink-500 text-xl font-bold">
            Domingo, 28 Maio às 14h
          </p>
        </div>

       <DecorationForm/>
      </div>
    </section>
  )
}