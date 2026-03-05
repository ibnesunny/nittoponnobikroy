import { useState, useEffect } from "react"
import Fiji from "../../../assets/images/e1.jpeg"
import fiji1 from "../../../assets/images/e2.jpeg"
import fiji2 from "../../../assets/images/e3.jpeg"
import fiji3 from "../../../assets/images/e4.jpeg"
import fiji4 from "../../../assets/images/e5.jpeg"
import fiji5 from "../../../assets/images/e6.jpeg"

const FijiServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [Fiji, fiji1, fiji2, fiji3, fiji4, fiji5]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="fiji-carousel hero bg-gradient-to-b from-cyan-100 via-cyan-200 to-green-100 lg:p-8">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-box">
        
        {/* Carousel Section */}
        <div className="flex justify-center">
          <div className="relative shadow-lg rounded-3xl max-w-md w-full overflow-hidden">
            <div
              className="carousel-container flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="carousel-item flex-shrink-0 w-full flex justify-center">
                  <img
                    src={image}
                    alt={`Fiji ${index + 1}`}
                    className="rounded-3xl w-full h-[280px] sm:h-[330px] md:h-[380px] object-contain shadow-md p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-800">
            Trusted Agency For FIJI Work Permit Visa
          </h1>
          <p className="pt-2 text-gray-700">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi.
          </p>
          <p className="py-4 text-gray-700">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white text-lg md:text-[22px] hover:shadow-blue-500 hover:shadow-md hover:border-white hover:border-2 w-fit">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default FijiServices
