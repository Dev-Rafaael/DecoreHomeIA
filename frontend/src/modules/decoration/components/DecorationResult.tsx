import { DecorResponse } from "../types/decor-ai"

type Props = {
  data: DecorResponse
}

export function DecorationResult({
  data
}: Props) {

  return (
    <div className="space-y-8">

      <section>
        <h2
          className="
            text-2xl
            font-semibold
          "
        >
          ✨ Atmosfera
        </h2>

        <p
          className="
            mt-3
            text-zinc-600
            leading-relaxed
          "
        >
          {data.summary}
        </p>
      </section>

      <section>
        <h2
          className="
            text-2xl
            font-semibold
          "
        >
          🎨 Paleta de cores
        </h2>

        <div className="mt-4 flex gap-4">
          {data.palette.map((color) => (
            <div
              key={color}
              className="
                h-16
                w-16
                rounded-2xl
                border
              "
              style={{
                background: color
              }}
            />
          ))}
        </div>
      </section>

      <section>
        <h2
          className="
            text-2xl
            font-semibold
          "
        >
          🛋️ Sugestões
        </h2>

        <div className="mt-4 space-y-4">
          {data.furniture.map((item) => (
            <div
              key={item.name}
              className="
                rounded-2xl
                border
                p-5
              "
            >
              <h3 className="font-medium">
                {item.name}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-zinc-600
                "
              >
                {item.reason}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}