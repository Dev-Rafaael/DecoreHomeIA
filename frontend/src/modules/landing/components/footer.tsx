export function Footer() {
  return (
    <footer
      id="contato"
      className="
        bg-amber-100
        py-16
        text-center
      "
    >
      <h1
        className="
          text-4xl
          text-pink-500
          font-bold
        "
      >
        InDeCor
      </h1>

      <p className="text-zinc-600 mt-4">
        A evolução da decoração de interiores
      </p>

      <div className="mt-8 space-y-2 text-zinc-700">
        <p>
          <strong>Contato:</strong> oi@indecor.com.br
        </p>

        <p>
          <strong>Telefone:</strong> (55) 99990-9999
        </p>
      </div>
    </footer>
  )
}