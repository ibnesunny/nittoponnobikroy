"use client"

import { useState, useEffect } from "react"
import { Plane } from "lucide-react"

export default function CirclingClockSpinner() {
  const [progress, setProgress] = useState(0)
  const [displayText, setDisplayText] = useState({ nittoponno: "", bikroy: "" })
  const [isScrambling, setIsScrambling] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 25) // Adjust speed here

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const targetNittoPonno = "NITTO PONNO"
    const targetBikroy = "BIKROY"
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let nittoponnoIndex = 0
    let bikroyIndex = 0

    const scrambleInterval = setInterval(() => {
      // Scramble NITTO PONNO
      if (nittoponnoIndex < targetNittoPonno.length) {
        setDisplayText((prev) => ({
          ...prev,
          nittoponno:
            targetNittoPonno.slice(0, nittoponnoIndex) +
            Array.from(
              { length: targetNittoPonno.length - nittoponnoIndex },
              () => chars[Math.floor(Math.random() * chars.length)],
            ).join(""),
        }))

        if (Math.random() >0.80) nittoponnoIndex++
      }

      // Scramble BIKROY (starts after NITTO PONNO is halfway done)
      if (nittoponnoIndex >= 2 && bikroyIndex < targetBikroy.length) {
        setDisplayText((prev) => ({
          ...prev,
          bikroy:
            targetBikroy.slice(0, bikroyIndex) +
            Array.from(
              { length: targetBikroy.length - bikroyIndex },
              () => chars[Math.floor(Math.random() * chars.length)],
            ).join(""),
        }))

        if (Math.random() > 0.7) bikroyIndex++
      }

      // Stop scrambling when both are complete
      if (nittoponnoIndex >= targetNittoPonno.length && bikroyIndex >= targetBikroy.length) {
        setDisplayText({ nittoponno: targetNittoPonno, bikroy: targetBikroy })
        setIsScrambling(false)
        clearInterval(scrambleInterval)
      }
    }, 20)

    return () => clearInterval(scrambleInterval)
  }, [])

  // Calculate the circumference for the progress circle
  const radius = 140
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  // Calculate plane position (convert progress to radians)
  const angle = (progress / 100) * 2 * Math.PI - Math.PI / 2 // Start from top
  const planeX = 160 + radius * Math.cos(angle)
  const planeY = 160 + radius * Math.sin(angle)

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="relative">
        {/* Background circle */}
        <svg width="320" height="320" className="transform -rotate-90">
          <circle cx="160" cy="160" r={radius} stroke="rgba(59, 130, 246, 0.2)" strokeWidth="5" fill="none" />
          {/* Progress circle */}
          <circle
            cx="160"
            cy="160"
            r={radius}
            stroke="rgb(59, 130, 246)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-75 ease-linear"
            style={{
              filter: "drop-shadow(0 0 10px rgb(59, 130, 246))",
            }}
          />
        </svg>

        {/* Flying plane */}
        <div
          className="absolute transition-all duration-75 ease-linear"
          style={{
            left: `${planeX}px`,
            top: `${planeY}px`,
            transform: `translate(-50%, -50%) rotate(${angle + Math.PI / 2}rad)`,
          }}
        >
          <Plane
            className="w-12 h-12 text-blue-400"
            style={{
              filter: "drop-shadow(0 0 10px rgb(96, 165, 250))",
            }}
          />
        </div>

        {/* NITTO PONNO BIKROY text in center of circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="flex flex-col items-center">
              {/* NITTO PONNO with holographic effect */}
              <h2
                className="text-3xl font-black tracking-[0.15em] mb-1 relative"
                style={{
                  background: "linear-gradient(45deg, #ffffff, #60a5fa, #3b82f6, #1d4ed8, #ffffff)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "holographic 3s ease-in-out infinite",
                  textShadow: "0 0 8px rgba(59, 130, 246, 0.2)",
                  filter: "drop-shadow(0 0 3px rgba(59, 130, 246, 0.3))",
                }}
              >
                {displayText.nittoponno}
              </h2>

              {/* BIKROY with neon glow effect */}
              <h2
                className="text-3xl font-black tracking-[0.15em] relative"
                style={{
                  background: "linear-gradient(45deg, #06b6d4, #0891b2, #0e7490, #155e75, #06b6d4)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "neonPulse 6s ease-in-out infinite alternate",
                  textShadow: "0 0 6px rgba(6, 182, 212, 0.3), 0 0 12px rgba(6, 182, 212, 0.2)",
                  filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))",
                }}
              >
                {displayText.bikroy}
              </h2>
            </div>

            {/* Animated underline */}
            <div
              className="w-20 h-0.5 mx-auto mt-3 rounded-full relative overflow-hidden"
              style={{
                background: "linear-gradient(90deg, transparent, #60a5fa, #06b6d4, transparent)",
                animation: "slideGlow 2s linear infinite",
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                  animation: "shimmer 1.5s linear infinite",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Percentage below the circle */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-16">
          <span className="text-4xl font-bold text-white">{Math.round(progress)}%</span>
        </div>

        {/* Custom CSS animations */}
        <style jsx>{`
          @keyframes holographic {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes neonPulse {
            0% { 
              background-position: 0% 50%;
              filter: drop-shadow(0 0 5px rgba(6, 182, 212, 0.5)) drop-shadow(0 0 10px rgba(6, 182, 212, 0.3));
            }
            100% { 
              background-position: 100% 50%;
              filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.6)) drop-shadow(0 0 15px rgba(6, 182, 212, 0.4));
            }
          }
          
          @keyframes slideGlow {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(200%) skewX(-15deg); }
          }
        `}</style>
      </div>
    </div>
  )
}
