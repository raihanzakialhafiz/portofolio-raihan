import Backdrop from "./Backdrop/Backdrop"
import { useState, useEffect } from "react"
import CountUp from "./CountUp/CountUp"

const PreLoader = () => {
  const [loading, setLoading] = useState(true)
  const [countDone, setCountDone] = useState(false)
  const [fadeText, setFadeText] = useState(false)
  const [fadeScreen, setFadeScreen] = useState(false)

  useEffect(() => {
    if (countDone) {
      // Urutan: teks naik & memudar dulu → layar memudar → baru unmount
      // 1) Fade teks
      const fadeTextTimer = setTimeout(() => setFadeText(true), 500)

      // 2) Fade seluruh screen (transisi opacity 1000ms)
      const fadeScreenTimer = setTimeout(() => setFadeScreen(true), 1500)

      // 3) Unmount preloader setelah animasi fade layar selesai
      const hideTimer = setTimeout(() => setLoading(false), 2500)

      return () => {
        clearTimeout(fadeTextTimer)
        clearTimeout(fadeScreenTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [countDone])

  return (
    loading && (
      <div
        className={`w-full h-dvh fixed inset-0 flex items-center justify-center bg-[var(--color-ink)] z-[var(--z-overlay)] overflow-hidden transition-opacity duration-1000 ${
          fadeScreen ? "opacity-0" : "opacity-100"
        }`}
      >
        <Backdrop />
        <div
          className={`absolute text-white text-6xl font-bold transition-[opacity,transform] duration-1000 ${
            fadeText ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
          }`}
        >
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
            onEnd={() => setCountDone(true)}
          />
        </div>
      </div>
    )
  )
}

export default PreLoader
