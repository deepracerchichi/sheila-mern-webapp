import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function AnimPage() {

    useGSAP(() => {
        gsap.to(".swag", {
            y: -400,  // Move UP (negative = upward)
            rotation: 360,
            borderRadius: '100%',
            duration: 1.5,  // How long the animation takes
            ease: "power2.out",  // Slow down at the end
            stagger: {
                amount: 0.8,  // Total time spread
                from: "center",  // Start from middle box
                grid: [7, 1],  // 7 boxes in a row
            },
        })
    }, [])

    return(
        <div className="flex flex-row mx-auto justify-center fixed bottom-10">
            <div className="swag rounded-md w-30 h-30 bg-orange-500"></div>
            <div className="swag rounded-md w-30 h-30 bg-amber-400"></div>
            <div className="swag rounded-md w-30 h-30 bg-orange-300"></div>
            <div className="swag rounded-md w-30 h-30 bg-amber-200"></div>
            <div className="swag rounded-md w-30 h-30 bg-orange-300"></div>
            <div className="swag rounded-md w-30 h-30 bg-amber-400"></div>
            <div className="swag rounded-md w-30 h-30 bg-orange-500"></div>
            {/* <div className="swag rounded-md w-30 h-30 bg-orange-950"></div> */}
        </div>
    )
}