
// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { QRCodeSVG } from 'qrcode.react'
// import { FiAlertTriangle, FiMapPin, FiClock, FiHeart } from 'react-icons/fi'
// import { FaArrowDown } from 'react-icons/fa'
// import { Heart } from 'lucide-react'
// import Head from 'next/head'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// // Enregistrer ScrollTrigger
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger)
// }

// interface Participant {
//   name: string
//   number: string
//   tableNumber?: string
// }

// interface QRData {
//   id: string
//   participants: Participant[]
//   timestamp: number
//   isCouple: boolean
//   signature: string
//   secretCode: string
//   validated: boolean
// }

// const DEFAULT_TABLE_NUMBER = ''

// const formatFrenchDate = (timestamp: number): string => {
//   const date = new Date(timestamp)
//   const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
//   const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

//   const dayName = days[date.getDay()]
//   const day = date.getDate()
//   const month = months[date.getMonth()]
//   const year = date.getFullYear()

//   return `${dayName} ${day} ${month} ${year}`
// }

// export const WeddingInvitationCard = ({ qrData }: { qrData: QRData }) => {
//   const qrContent = {
//     participants: qrData.participants,
//     isCouple: qrData.isCouple,
//     tableNumber: qrData.participants[0]?.tableNumber || DEFAULT_TABLE_NUMBER,
//     validated: qrData.validated,
//     timestamp: qrData.timestamp
//   }
//   const [clickCount, setClickCount] = useState(0)
//   const [showQR, setShowQR] = useState(false)
//   const [isPulsing, setIsPulsing] = useState(false)

//   // Réfs pour les animations
//   const containerRef = useRef<HTMLDivElement>(null)
//   const titleRef = useRef<HTMLDivElement>(null)
//   const photoRef = useRef<HTMLDivElement>(null)
//   const invitationRef = useRef<HTMLDivElement>(null)
//   const programRef = useRef<HTMLDivElement>(null)
//   const locationRef = useRef<HTMLDivElement>(null)
//   const securityRef = useRef<HTMLDivElement>(null)
//   const qrRef = useRef<HTMLDivElement>(null)
  
//   // Réfs pour les décorations florales
//   const floralTopLeftRef = useRef<HTMLImageElement>(null)
//   const floralTopRightRef = useRef<HTMLImageElement>(null)
//   const floralWedDayRef = useRef<HTMLImageElement>(null)
//   const floralBottomLeftRef = useRef<HTMLImageElement>(null)
//   const floralBottomRight1Ref = useRef<HTMLImageElement>(null)
//   const floralBottomRight2Ref = useRef<HTMLImageElement>(null)
//   const floralBottomRight3Ref = useRef<HTMLImageElement>(null)
//   const floralBottomRight4Ref = useRef<HTMLImageElement>(null)

//   useEffect(() => {
//     // Animation de pulsation pour le QR code
//     const interval = setInterval(() => {
//       setIsPulsing(prev => !prev)
//     }, 1500)

//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     // Initialiser les animations GSAP
//     const ctx = gsap.context(() => {
//       // Animation des décorations florales
//       const floralRefs = [
//         floralTopLeftRef.current,
//         floralTopRightRef.current,
//         floralWedDayRef.current,
//         floralBottomLeftRef.current,
//         floralBottomRight1Ref.current,
//         floralBottomRight2Ref.current,
//         floralBottomRight3Ref.current,
//         floralBottomRight4Ref.current
//       ]

//       floralRefs.forEach((deco) => {
//         if (deco) {
//           gsap.fromTo(deco,
//             {
//               opacity: 0,
//               scale: 0.8,
//               rotation: -10
//             },
//             {
//               opacity: 1,
//               scale: 1,
//               rotation: 0,
//               duration: 1.5,
//               ease: "back.out(1.7)",
//               scrollTrigger: {
//                 trigger: deco,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none reverse"
//               }
//             }
//           )
//         }
//       })

//       // Animation du titre
//       if (titleRef.current) {
//         gsap.fromTo(titleRef.current,
//           {
//             y: 50,
//             opacity: 0
//           },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 1.2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: titleRef.current,
//               start: "top 85%",
//               end: "bottom 20%",
//               toggleActions: "play none none reverse"
//             }
//           }
//         )
//       }

//       // Animation de la photo
//       if (photoRef.current) {
//         gsap.fromTo(photoRef.current,
//           {
//             scale: 0.5,
//             opacity: 0,
//             rotationY: 90
//           },
//           {
//             scale: 1,
//             opacity: 1,
//             rotationY: 0,
//             duration: 1.5,
//             ease: "back.out(1.7)",
//             scrollTrigger: {
//               trigger: photoRef.current,
//               start: "top 75%",
//               end: "bottom 20%",
//               toggleActions: "play none none reverse"
//             }
//           }
//         )
//       }

//       // Animation du texte d'invitation
//       if (invitationRef.current) {
//         gsap.fromTo(invitationRef.current,
//           {
//             y: 30,
//             opacity: 0
//           },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 1.2,
//             stagger: 0.2,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: invitationRef.current,
//               start: "top 100%",
//               end: "bottom 50%",
//               toggleActions: "play none none reverse"
//             }
//           }
//         )
//       }

//       // Animation du programme
//       if (programRef.current) {
//         gsap.fromTo(programRef.current,
//           {
//             x: -50,
//             opacity: 0
//           },
//           {
//             x: 0,
//             opacity: 1,
//             duration: 1.2,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: programRef.current,
//               start: "top 80%",
//               end: "bottom 20%",
//               toggleActions: "play none none reverse"
//             }
//           }
//         )
//       }

//       // Animation du lieu
//       if (locationRef.current) {
//         gsap.fromTo(locationRef.current,
//           {
//             x: 50,
//             opacity: 0
//           },
//           {
//             x: 0,
//             opacity: 1,
//             duration: 1.2,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: locationRef.current,
//               start: "top 80%",
//               end: "bottom 20%",
//               toggleActions: "play none none reverse"
//             }
//           }
//         )
//       }

//       // Animation de l'alerte sécurité
//       if (securityRef.current) {
//         gsap.fromTo(securityRef.current,
//           {
//             scale: 0.8,
//             opacity: 0
//           },
//           {
//             scale: 1,
//             opacity: 1,
//             duration: 1,
//             ease: "elastic.out(1, 0.5)",
//             scrollTrigger: {
//               trigger: securityRef.current,
//               start: "top 85%",
//               end: "bottom 20%",
//               toggleActions: "play none none reverse"
//             }
//           }
//         )
//       }

//       // Animation du QR code
//       if (qrRef.current) {
//         gsap.fromTo(qrRef.current,
//           {
//             y: 50,
//             opacity: 0,
//             scale: 0.5
//           },
//           {
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             duration: 1.5,
//             ease: "back.out(1.7)",
//             scrollTrigger: {
//               trigger: qrRef.current,
//               start: "top 85%",
//               end: "bottom 20%",
//               toggleActions: "play none none reverse"
//             }
//           }
//         )
//       }

//       // Animation des éléments de date
//       gsap.fromTo(".date-item",
//         {
//           y: 30,
//           opacity: 0
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           stagger: 0.3,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: programRef.current,
//             start: "top 75%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       )

//       // Animation en boucle pour les flèches
//       gsap.to(".animate-bounce", {
//         y: -10,
//         duration: 0.6,
//         yoyo: true,
//         repeat: -1,
//         ease: "sine.inOut"
//       })

//     }, containerRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-rose-50">
//       <div className="relative max-w-lg w-full overflow-hidden text-center text-gray-800 bg-white shadow-2xl rounded-3xl">

//         {/* Floral Decorations - Design amélioré */}
//         <img 
//           src="/assets/type.png" 
//           alt="Décoration florale" 
//           loading="lazy" 
//           className="absolute w-[280px] md:w-[350px] top-[-20px] right-[-10px] opacity-80 rotate-12" 
//         />
//         <img 
//           src="/assets/type.png" 
//           alt="Décoration florale" 
//           loading="lazy" 
//           className="absolute w-[280px] md:w-[350px] top-[600px] right-[-20px] opacity-60 -rotate-45" 
//         />
//         <img 
//           src="/assets/type.png" 
//           alt="Décoration florale" 
//           loading="lazy" 
//           className="absolute w-[200px] md:w-[250px] bottom-[300px] left-[-10px] opacity-70 -rotate-12" 
//         />
//         <img 
//           src="/assets/type.png" 
//           alt="Décoration florale" 
//           loading="lazy" 
//           className="absolute w-[200px] md:w-[250px] top-[400px] left-[-20px] opacity-50 rotate-45" 
//         />
//         <img 
//           src="/assets/b.webp" 
//           alt="Décoration" 
//           loading="lazy" 
//           className="absolute w-[140px] md:w-[170px] block top-0 left-0 opacity-90" 
//         />
//         <img 
//           src="/assets/a.webp" 
//           alt="Décoration" 
//           loading="lazy" 
//           className="absolute w-[140px] md:w-[170px] block top-0 right-0 opacity-90" 
//         />
      
//         <img 
//           ref={floralWedDayRef}
//           src="/wed-day.png" 
//           alt="Jour du mariage" 
//           loading="lazy" 
//           className="absolute  top-[2%] w-[40px] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20" 
//         />
     
//         <img 
//           src="/assets/c.webp" 
//           alt="Décoration bas gauche" 
//           loading="lazy" 
//           className="absolute bottom-0 left-0 w-[130px] opacity-90" 
//         />
//         <img 
//           src="/assets/d.webp" 
//           alt="Décoration bas droite" 
//           loading="lazy" 
//           className="absolute bottom-0 right-0 w-[130px] opacity-90" 
//         />
       
//         {/* En-tête avec badge noces de bois */}
//         <div className="mt-16 pt-4 relative z-10">
//           <div className="inline-block bg-amber-100 border-2 border-amber-300 rounded-full px-6 py-2 mb-4">
//             <span className="text-amber-800 font-semibold text-sm">🪵 Noces de Bois • 5 ans 🪵</span>
//           </div>
          
//           {/* Participant Name */}
//           <div ref={titleRef}>
//             {qrData.isCouple && (
//               <h1 className="text-lg font-light text-gray-600 mb-2">
//                 — Couple —
//               </h1>
//             )}
//             {!qrData.isCouple && (
//               <h1 className="text-lg font-light text-gray-600 mb-2">
//                 — Invité(e) —
//               </h1>
//             )}
//             <h1 className="text-3xl font-bold text-gray-800 ">
//               {qrData.participants[0].name}
//             </h1>
//             {qrData.isCouple && qrData.participants[1].name && (
//               <h1 className="text-3xl font-bold text-gray-800 ">
//                 & {qrData.participants[1].name}
//               </h1>
//             )}
//             <p className="text-gray-600 mt-3 text-lg italic">
//               Nous avons la joie de vous inviter
//             </p>
//           </div>
//         </div>

//         {/* Photo de couple */}
//         <div ref={photoRef} className="my-6 relative z-10">
//           <div className="relative w-[250px] h-[250px] mx-auto">
//             <svg
//               viewBox="0 0 260 260"
//               className="absolute top-0 left-0 w-full h-full z-10"
//             >
//               <defs>
//                 <clipPath id="circleClip">
//                   <circle cx="130" cy="130" r="115" />
//                 </clipPath>
//               </defs>
//               <image
//                 href="/couple.jpg"
//                 width="260"
//                 height="260"
//                 clipPath="url(#circleClip)"
//                 preserveAspectRatio="xMidYMid slice"
//               />
//             </svg>

//             {/* Cercle décoratif */}
//             <svg
//               viewBox="0 0 260 260"
//               className="absolute size-[108%] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] z-0 pointer-events-none"
//             >
//               <circle
//                 cx="130"
//                 cy="130"
//                 r="115"
//                 fill="none"
//                 stroke="#D4A574"
//                 strokeWidth="3"
//                 strokeDasharray="8 4"
//               />
//             </svg>
//             <img src="/assets/e.webp" alt="Décoration" loading="lazy" className="absolute top-[30%] rotate-[44deg] z-50 translate-y-[-10%] right-[50%] translate-x-[50%] w-[240px]" />
//           </div>
//         </div>

//         {/* Message personnalisé des noces de bois */}
//         <div className="mt-8 px-6 text-lg text-gray-700 relative z-10">
//           <div className="mb-6 flex flex-col items-center ">
//             <h3 className="text-3xl font-semibold text-gray-800">Le Couple Kitenge</h3>
//             <span className="text-lg font-bold h-[25px] my-2 grid justify-center">
//               <Heart className="text-rose-600 inline-block" fill="#e11d48"/>
//               <Heart className="text-rose-400 translate-x-[16px] inline-block translate-y-[-25px] rotate-6" fill="#fb7185"/>
//             </span>
//           </div>
          
//           <div ref={invitationRef} className="bg-amber-50/50 border border-amber-200 rounded-2xl p-5 mb-4">
//             <p className="text-gray-700 leading-relaxed italic">
//               "À l'occasion de nos noces de bois, nous célébrons avec gratitude cinq années d'amour, de confiance et de fidélité. Votre présence serait pour nous un immense honneur. Nous vous invitons cordialement à partager ce moment de joie et de convivialité à nos côtés."
//             </p>
//           </div>
//         </div>

//         {/* Programme */}
//         <p className="mt-4 px-4 font-bold text-gray-700 text-lg">
//           PROGRAMME DE CÉLÉBRATION
//         </p>
//         <p className="mt-2 mb-6 w-[40%] mx-auto h-1 rounded-full bg-gradient-to-r from-amber-400 to-rose-400"></p>

//         {/* Détails des événements */}
//         <div ref={programRef} className="text-center space-y-6 px-2 relative z-10">
//           <div className="date-item bg-white/80 rounded-2xl p-4 mx-4 shadow-sm border border-amber-100">
//             <div className="flex items-center justify-center gap-2 mb-1">
//               <FiClock className="text-amber-600" />
//               <p className="text-xl text-amber-800 font-bold">Samedi 19 Juillet 2026</p>
//             </div>
//               <p className="text-xl text-amber-950 font-bold f select-">A 17 heures</p>
//             <div className="flex items-center justify-center gap-2 mb-2">
//               <FiMapPin className="text-rose-600" />
//               <p className="text-rose-800 font-bold text-lg">Adresse</p>
//             </div>
//             <p className="text-gray-700 text-xl font-medium">Avenue Chrinovic Primaire</p>
//             <p className="text-gray-600 text-lg">Référence : HK Lodge</p>
//             {/* <p className="text-gray-500 text-sm mt-1">Prolongement de l'entrepôt Auto Lubumbashi, à quelques mètres de Jangwa</p> */}
//           </div>
//         <div className="mt-6 text-center px-2 relative z-10">
//           <p className="text-xl text-amber-800 font-bold mb-3">📞 Contacts</p>
//           <div className="space-y-2">
//             <p className="text-gray-600 text-lg">+243 973 322 414</p>
//           </div>
//         </div>
//           </div>

        

        

    

//         {/* Contacts */}

      

//         {/* Espacement final */}
//         <div className="h-8"></div>
//       </div>
//     </div>
//   )
// }

'use client'

import { useState, useEffect, useRef } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { FiAlertTriangle, FiMapPin, FiClock, FiHeart } from 'react-icons/fi'
import { FaArrowDown } from 'react-icons/fa'
import { Heart } from 'lucide-react'
import Head from 'next/head'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Enregistrer ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface Participant {
  name: string
  number: string
  tableNumber?: string
}

interface QRData {
  id: string
  participants: Participant[]
  timestamp: number
  isCouple: boolean
  signature: string
  secretCode: string
  validated: boolean
}

const DEFAULT_TABLE_NUMBER = ''

const formatFrenchDate = (timestamp: number): string => {
  const date = new Date(timestamp)
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

  const dayName = days[date.getDay()]
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${dayName} ${day} ${month} ${year}`
}

export const WeddingInvitationCard = ({ qrData }: { qrData: QRData }) => {
  const qrContent = {
    participants: qrData.participants,
    isCouple: qrData.isCouple,
    tableNumber: qrData.participants[0]?.tableNumber || DEFAULT_TABLE_NUMBER,
    validated: qrData.validated,
    timestamp: qrData.timestamp
  }
  const [clickCount, setClickCount] = useState(0)
  const [showQR, setShowQR] = useState(false)
  const [isPulsing, setIsPulsing] = useState(false)

  // Réfs pour les animations
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const invitationRef = useRef<HTMLDivElement>(null)
  const programRef = useRef<HTMLDivElement>(null)
  const locationRef = useRef<HTMLDivElement>(null)
  const securityRef = useRef<HTMLDivElement>(null)
  const qrRef = useRef<HTMLDivElement>(null)
  
  // Réfs pour les décorations florales
  const floralTopLeftRef = useRef<HTMLImageElement>(null)
  const floralTopRightRef = useRef<HTMLImageElement>(null)
  const floralWedDayRef = useRef<HTMLImageElement>(null)
  const floralBottomLeftRef = useRef<HTMLImageElement>(null)
  const floralBottomRight1Ref = useRef<HTMLImageElement>(null)
  const floralBottomRight2Ref = useRef<HTMLImageElement>(null)
  const floralBottomRight3Ref = useRef<HTMLImageElement>(null)
  const floralBottomRight4Ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // Animation de pulsation pour le QR code
    const interval = setInterval(() => {
      setIsPulsing(prev => !prev)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Initialiser les animations GSAP
    const ctx = gsap.context(() => {
      // Animation des décorations florales
      const floralRefs = [
        floralTopLeftRef.current,
        floralTopRightRef.current,
        floralWedDayRef.current,
        floralBottomLeftRef.current,
        floralBottomRight1Ref.current,
        floralBottomRight2Ref.current,
        floralBottomRight3Ref.current,
        floralBottomRight4Ref.current
      ]

      floralRefs.forEach((deco) => {
        if (deco) {
          gsap.fromTo(deco,
            {
              opacity: 0,
              scale: 0.8,
              rotation: -10
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.5,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: deco,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          )
        }
      })

      // Animation du titre
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Animation de la photo
      if (photoRef.current) {
        gsap.fromTo(photoRef.current,
          {
            scale: 0.5,
            opacity: 0,
            rotationY: 90
          },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 1.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: photoRef.current,
              start: "top 75%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Animation du texte d'invitation
      if (invitationRef.current) {
        gsap.fromTo(invitationRef.current,
          {
            y: 30,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: invitationRef.current,
              start: "top 100%",
              end: "bottom 50%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Animation du programme
      if (programRef.current) {
        gsap.fromTo(programRef.current,
          {
            x: -50,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: programRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Animation du lieu
      if (locationRef.current) {
        gsap.fromTo(locationRef.current,
          {
            x: 50,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: locationRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Animation de l'alerte sécurité
      if (securityRef.current) {
        gsap.fromTo(securityRef.current,
          {
            scale: 0.8,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: securityRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Animation du QR code
      if (qrRef.current) {
        gsap.fromTo(qrRef.current,
          {
            y: 50,
            opacity: 0,
            scale: 0.5
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: qrRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Animation des éléments de date
      gsap.fromTo(".date-item",
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: programRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Animation en boucle pour les flèches
      gsap.to(".animate-bounce", {
        y: -10,
        duration: 0.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center relative">
      {/* Image de fond fixe */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/couple2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Overlay sombre pour la lisibilité du texte */}
      <div className="fixed inset-0 bg-black/40 z-[1]" />

      <div className="relative max-w-lg w-full overflow-hidden text-center bg-white/10 backdrop-blur-s shadow-2xl rounded-3xl z-10 border border-white/20">

        {/* Floral Decorations - Design amélioré */}
        <img 
          src="/assets/type.png" 
          alt="Décoration florale" 
          loading="lazy" 
          className="absolute w-[280px] md:w-[350px] top-[-20px] right-[-10px] opacity-80 rotate-12" 
        />
        <img 
          src="/assets/type.png" 
          alt="Décoration florale" 
          loading="lazy" 
          className="absolute w-[280px] md:w-[350px] top-[600px] right-[-20px] opacity-60 -rotate-45" 
        />
        <img 
          src="/assets/type.png" 
          alt="Décoration florale" 
          loading="lazy" 
          className="absolute w-[200px] md:w-[250px] bottom-[300px] left-[-10px] opacity-70 -rotate-12" 
        />
        <img 
          src="/assets/type.png" 
          alt="Décoration florale" 
          loading="lazy" 
          className="absolute w-[200px] md:w-[250px] top-[400px] left-[-20px] opacity-50 rotate-45" 
        />
        <img 
          src="/assets/b.webp" 
          alt="Décoration" 
          loading="lazy" 
          className="absolute w-[140px] md:w-[170px] block top-0 left-0 opacity-90" 
        />
        <img 
          src="/assets/a.webp" 
          alt="Décoration" 
          loading="lazy" 
          className="absolute w-[140px] md:w-[170px] block top-0 right-0 opacity-90" 
        />
      
        <img 
          ref={floralWedDayRef}
          src="/wed-day.png" 
          alt="Jour du mariage" 
          loading="lazy" 
          className="absolute top-[2%] w-[40px] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20" 
        />
     
        <img 
          src="/assets/c.webp" 
          alt="Décoration bas gauche" 
          loading="lazy" 
          className="absolute bottom-0 left-0 w-[130px] opacity-90" 
        />
        <img 
          src="/assets/d.webp" 
          alt="Décoration bas droite" 
          loading="lazy" 
          className="absolute bottom-0 right-0 w-[130px] opacity-90" 
        />
       
        {/* En-tête avec badge noces de bois */}
        <div className="mt-16 pt-4 relative z-10">
          <div className="inline-block bg-amber-100/90 border-2 border-amber-300 rounded-full px-6 py-2 mb-4">
            <span className="text-amber-800 font-semibold text-sm">🪵 Noces de Bois • 5 ans 🪵</span>
          </div>
          
          {/* Participant Name */}
          <div ref={titleRef}>
            {/* {qrData.isCouple && (
              <h1 className="text-lg font-light text-white mb-2">
               — Invité(es) —
              </h1>
            )}
            {!qrData.isCouple && (
              <h1 className="text-lg font-light text-white mb-2">
                — Invité(es) —
              </h1>
            )} */}
            <h1 className="text-3xl font-bold text-white  drop-shadow-lg">
              {qrData.participants[0].name}
            </h1>
            {qrData.isCouple && qrData.participants[1].name && (
              <h1 className="text-3xl font-bold text-white  drop-shadow-lg">
                & {qrData.participants[1].name}
              </h1>
            )}
            <p className="text-white/90 mt-3 text-lg italic drop-shadow">
              Nous avons la joie de vous inviter
            </p>
          </div>
        </div>

        {/* Photo de couple */}
        <div ref={photoRef} className="my-6 relative z-10">
          <div className="relative w-[250px] h-[250px] mx-auto">
            <svg
              viewBox="0 0 260 260"
              className="absolute top-0 left-0 w-full h-full z-10"
            >
              <defs>
                <clipPath id="circleClip">
                  <circle cx="130" cy="130" r="115" />
                </clipPath>
              </defs>
              <image
                href="/couple.jpg"
                width="260"
                height="260"
                clipPath="url(#circleClip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>

            {/* Cercle décoratif */}
            <svg
              viewBox="0 0 260 260"
              className="absolute size-[108%] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] z-0 pointer-events-none"
            >
              <circle
                cx="130"
                cy="130"
                r="115"
                fill="none"
                stroke="#D4A574"
                strokeWidth="3"
                strokeDasharray="8 4"
              />
            </svg>
            <img src="/assets/e.webp" alt="Décoration" loading="lazy" className="absolute top-[30%] rotate-[44deg] z-50 translate-y-[-10%] right-[50%] translate-x-[50%] w-[240px]" />
          </div>
        </div>

        {/* Message personnalisé des noces de bois */}
        <div className="mt-8 px-6 text-lg relative z-10">
          <div className="mb-6 flex flex-col items-center ">
            <h3 className="text-3xl font-semibold text-white drop-shadow-lg">Le Couple Kitenge</h3>
            <span className="text-lg font-bold h-[25px] my-2 grid justify-center">
              <Heart className="text-rose-400 inline-block drop-shadow-lg" fill="#e11d48"/>
              <Heart className="text-rose-300 translate-x-[16px] inline-block translate-y-[-25px] rotate-6 drop-shadow-lg" fill="#fb7185"/>
            </span>
          </div>
          
          <div ref={invitationRef} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 mb-4">
            <p className="text-white leading-relaxed italic drop-shadow">
              "À l'occasion de nos noces de bois, nous célébrons avec gratitude cinq années d'amour, de confiance et de fidélité. Votre présence serait pour nous un immense honneur. Nous vous invitons cordialement à partager ce moment de joie et de convivialité à nos côtés."
            </p>
          </div>
        </div>

        {/* Programme */}
        <p className="mt-4 px-4 font-bold text-white text-lg drop-shadow-lg">
          PROGRAMME DE CÉLÉBRATION
        </p>
        <p className="mt-2 mb-6 w-[40%] mx-auto h-1 rounded-full bg-gradient-to-r from-amber-400 to-rose-400"></p>

        {/* Détails des événements */}
        <div ref={programRef} className="text-center space-y-6 px-2 relative z-10">
          <div className="date-item bg-white/10 backdrop-blur-sm rounded-2xl p-4 mx-4 shadow-sm border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-1">
              <FiClock className="text-amber-300" />
              <p className="text-xl text-amber-300 font-bold drop-shadow">Dimanche 19 Juillet 2026</p>
            </div>
              <p className="text-xl text-white font-bold drop-shadow">A 17 heures</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <FiMapPin className="text-rose-300" />
              <p className="text-rose-300 font-bold text-lg drop-shadow">Adresse</p>
            </div>
            <p className="text-white text-xl font-medium drop-shadow">Avenue Chrinovic Primaire</p>
            <p className="text-white/90 text-lg drop-shadow">Référence : HK Lodge</p>
          </div>
        <div className="mt-6 text-center px-2 relative z-10">
          <p className="text-xl text-amber-300 font-bold mb-3 drop-shadow">📞 Contacts</p>
          <div className="space-y-2">
            <p className="text-white text-lg drop-shadow">+243 973 322 414</p>
          </div>
        </div>
          </div>

        

        

    

        {/* Contacts */}

      

        {/* Espacement final */}
        <div className="h-8"></div>
      </div>
    </div>
  )
}