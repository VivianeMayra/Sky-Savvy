"use client"
import { ThermometerSimple } from "@phosphor-icons/react"

interface ButtonProps {
  onClick: () => void
}

export function Button({ onClick }: ButtonProps) {
  return (
    <button
      className="rounded-md bg-amber-400 hover:bg-amber-500 w-full text-white flex items-center justify-center p-2  "
      onClick={onClick}
    >
      Conferir clima agora{" "}
      <ThermometerSimple size={32} weight="light" color="white" />
    </button>
  )
}
