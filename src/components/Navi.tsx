"use client"
import Image from "next/image"
import { useState } from "react"
const Navi = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 150 // 헤더 높이(px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }
  return (
    <nav className="flex sticky top-0 h-[115px] w-full bg-[#000] pt-[40px] z-9999">
      <div className="flex w-[1024px] mx-auto">
        <div className="flex w-full justify-between items-center ">
          <button
            className="flex items-center gap-[10px]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image src="/logo.svg" alt="logo" width={134} height={36} />
          </button>
          <div className="flex items-center gap-[57px] h-[45px]">
            <button className="flex items-center gap-[10px] " onClick={() => handleScroll("ELI-CARE")}>
              <Image src="/logo_eli_care.svg" alt="logo" width={83} height={15} />
            </button>
            <button
              className="flex items-center gap-[10px] text-white text-[10px] font-light leading-[20px] tracking-[-0.1px]"
              onClick={() => handleScroll("ELI-CONNECTED")}
            >
              <Image src="/logo_eli_connected.svg" alt="logo" width={134} height={15} />
            </button>
            <button
              className="font-light text-[14px] leading-[45px] tracking-[-0.1px]"
              onClick={() => handleScroll("OUR-CORE")}
            >
              OUR CORE
            </button>
            <div className="relative flex flex-col">
              <button
                className="font-light text-[14px] leading-[45px] tracking-[-0.1px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                ABOUT US
              </button>
              {isOpen && (
                <div className="absolute bottom-[-135px] left-[-20px]  bg-black z-200">
                  <div className="flex flex-col w-[110px] h-[135px]">
                    <button
                      className="font-light text-[14px] leading-[45px] tracking-[-0.1px] text-[#AEAEAE] hover:text-white"
                      onClick={() => {
                        handleScroll("TEAM")
                        setIsOpen(false)
                      }}
                    >
                      TEAM
                    </button>
                    <button
                      className="font-light text-[14px] leading-[45px] tracking-[-0.1px] text-[#AEAEAE] hover:text-white"
                      onClick={() => {
                        handleScroll("MILESTONES")
                        setIsOpen(false)
                      }}
                    >
                      MILESTONES
                    </button>
                    <button
                      className="font-light text-[14px] leading-[45px] tracking-[-0.1px] text-[#AEAEAE] hover:text-white"
                      onClick={() => {
                        handleScroll("PRESS")
                        setIsOpen(false)
                      }}
                    >
                      PRESS
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              className="font-light text-[14px] leading-[45px] tracking-[-0.1px]"
              onClick={() => handleScroll("INQUIRY")}
            >
              INQUIRY
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navi
