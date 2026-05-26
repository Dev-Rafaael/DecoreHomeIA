"use client"

import { useState } from "react"
import Link from "next/link"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-md
        bg-black/40
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-6
          py-4
        "
      >
        <h1
          className="
            text-2xl
            font-bold
            text-white
          "
        >
          <span className="text-pink-500">
            In
          </span>
          DeCor
        </h1>

        <nav
          className={`
            absolute
            md:static
            top-16
            right-0
            bg-black/90
            md:bg-transparent
            w-72
            md:w-auto
            flex
            flex-col
            md:flex-row
            gap-6
            p-6
            md:p-0
            transition-transform
            duration-300
            ${
              open
                ? "translate-x-0"
                : "translate-x-full md:translate-x-0"
            }
          `}
        >
          <Link href="#home">Início</Link>
          <Link href="#sobre">Sobre</Link>
          <Link href="#evento">Evento</Link>
          <Link href="#contato">Contato</Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            flex
            flex-col
            gap-1
          "
        >
          <span className="w-6 h-1 bg-white rounded" />
          <span className="w-6 h-1 bg-white rounded" />
          <span className="w-6 h-1 bg-white rounded" />
        </button>
      </div>
    </header>
  )
}