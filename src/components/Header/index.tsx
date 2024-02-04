"use client"

import Image from "next/image"
import logo from "../../../public/logo.png"
import Link from "next/link"
import { useState } from "react"
import { List, X } from "@phosphor-icons/react"

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex w-full	 items-center justify-between min-h-10 pt-5 pb-3">
      <Link href="/" className="cursor-pointer">
        <Image src={logo} alt="" />
      </Link>

      <button className="md:hidden" onClick={toggleSidebar}>
        <List size={32} weight="light" />
      </button>
      <ul className="hidden md:flex items-center justify-center gap-4 cursor-pointer">
        <Link href="/weather">
          <li>Consultar Clima</li>
        </Link>
        <Link href="/forecast">
          <li>Previsões futuras</li>
        </Link>
      </ul>
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
          <div className="h-full w-64 bg-white shadow-md overflow-hidden">
            <div className="flex justify-end">
              {" "}
              <button className="bg-black " onClick={toggleSidebar}>
                {" "}
                <X size={32} weight="fill" color="white" />{" "}
              </button>{" "}
            </div>
            <div className="p-4">
              <ul className="flex flex-col items-center justify-center gap-4">
                <Link href="/weather">
                  <li>Consultar Clima</li>
                </Link>
                <Link href="/forecast">
                  <li>Previsões futuras</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
