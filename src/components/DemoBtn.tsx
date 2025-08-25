"use client"
const DemoBtn = () => {
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
    <button
      className="btn_gradient_1 w-[107px] h-[36px] border rounded-[29px] text-white text-[10px] font-light leading-[20px] tracking-[-0.1px] items-center"
      onClick={() => handleScroll("INQUIRY")}
    >
      DEMO
    </button>
  )
}

export default DemoBtn
