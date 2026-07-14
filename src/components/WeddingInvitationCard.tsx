
// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { QRCodeSVG } from 'qrcode.react'
// import { FiAlertTriangle } from 'react-icons/fi'
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
//     <div ref={containerRef} className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f0f8ff' }}>
//       <div className="relative max-w-lg w-full overflow-hidden text-center text-gray-800" style={{ backgroundColor: '#fff' }}>

//         {/* Floral Decorations */}
//         <img 
//           src="/assets/type.png" 
//           alt="Top Left Flower" 
//           loading="lazy" 
//           className="absolute w-[367px] md:w-[389px] top-[0px] right-0" 
//         />
//         <img 
//           src="/assets/type.png" 
//           alt="Top Left Flower" 
//           loading="lazy" 
//           className="absolute w-[467px] md:w-[389px] top-[0px] right-0" 
//         />
//         <img 
//           src="/assets/type.png" 
//           alt="Top Left Flower" 
//           loading="lazy" 
//           className="absolute w-[367px] md:w-[389px] top-[700px] right-0" 
//         />
//         <img 
//           src="/assets/type.png" 
//           alt="Top Left Flower" 
//           loading="lazy" 
//           className="absolute w-[267px] md:w-[389px] bottom-[200px] left-0" 
//         />
//         <img 
//           src="/assets/type.png" 
//           alt="Top Left Flower" 
//           loading="lazy" 
//           className="absolute w-[267px] md:w-[389px] top-[500px] left-0" 
//         />
//         <img 
//           src="/assets/b.webp" 
//           alt="Top Left Flower" 
//           loading="lazy" 
//           className="absolute w-[157px] md:w-[189px] block top-0 left-o ]" 
//         />
//         <img 
//           src="/assets/a.webp" 
//           alt="Top Left Flower" 
//           loading="lazy" 
//           className="absolute w-[157px] md:w-[189px] block top-0 right-[0]" 
//         />
      
//         <img 
//           ref={floralWedDayRef}
//           src="/wed-day.png" 
//           alt="Wedding Day" 
//           loading="lazy" 
//           className="absolute top-[0%] w-[102px] left-[50%] -translate-x-[50%] -translate-y-[50%]" 
//         />
     
//         <img 
        
//           src="/assets/c.webp" 
//           alt="Bottom Right Flower" 
//           loading="lazy" 
//           className="absolute bottom-0 left-0  w-[123px]" 
//         />
//         <img 
         
//           src="/assets/d.webp" 
//           alt="Bottom Right Flower" 
//           loading="lazy" 
//           className="absolute bottom-0 right-0 w-[123px] " 
//         />
       

//         {/* Participant Name */}
//         <div ref={titleRef} className="mt-20 pt-7">
//           {qrData.isCouple && (
//             <h1 className="text- font- text-gray-700">
//               - Couple -
//             </h1>
//           )}
//           {!qrData.isCouple && (
//             <h1 className="text font- text-gray-700">
//               -Singleton-
//             </h1>
//           )}
//           <h1 className="text-3xl font-bold text-gray-800">
//             {qrData.participants[0].name}
//           </h1>
//           {qrData.isCouple && qrData.participants[1].name && (
//             <h1 className="text-3xl font-bold text-gray-800">
//               & {qrData.participants[1].name}
//             </h1>
//           )}
//           <p className="text-gray-600 mt-2">
//             Vous êtes invités
//           </p>
//         </div>

//        <div ref={photoRef} className="my-6 relative">
//   <div className="relative w-[290px] h-[290px] mx-auto">
//     <svg
//       viewBox="0 0 260 260"
//       className="absolute top-0 left-0 w-full h-full z-10"
//     >
//       <defs>
//         <clipPath id="circleClip">
//           <circle cx="130" cy="130" r="120" />
//         </clipPath>
//       </defs>
//       <image
//         href="/couple.jpg"
//         width="260"
//         height="260"
//         clipPath="url(#circleClip)"
//         preserveAspectRatio="xMidYMid slice"
//       />
//     </svg>

//     <svg
//       viewBox="0 0 260 260"
//       className="absolute size-[110%] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] z-0 pointer-events-none"
//     >
//       <circle
//         cx="130"
//         cy="130"
//         r="120"
//         fill="none"
//         stroke="#A4B9A4"
//         strokeWidth="4"
//       />
//     </svg>
//     <img src="/assets/e.webp" alt="Decoration" loading="lazy" className="absolute top-[34%] rotate-[44deg] z-50 translate-y-[-10%] right-[50%] translate-x-[50%] w-[275px]" />
//   </div>
// </div>

//         {/* Invitation Message */}
//         <div  className="mt-[50px] px-4 text-lg text-gray-700">
//           <div  className="mb-5 flex ocea  mx-auto flex-col w-max font-bold ">
//             <h3 className="text-3xl font-semibold text-gray-800">Romain Raha</h3>
//             <span className="text-lg font-bold h-[23px] my-1 grid justify-center text-blue-600">
//               <Heart className="text-orange-700 spain inline-block"/>
//               <Heart className="text-orange-500 translate-x-[14px] inline-block translate-y-[-23px] rotate-6"/>
//             </span>
//             <h3 className="text-3xl font-semibold text-gray-800">Eugenie Nkulu</h3>
//           </div>
//           <p ref={invitationRef} className="mb-4">

//             Les familles KARHUBAKA Roger et NZANA Hermes ont la joie de vous inviter à la célébration de l'union de leurs enfants.
//           </p>
//         </div>

//         <p  className="my- px-4 font-bold text-gray-600">
//           PROGRAMME DE MARIAGE
//         </p>
//         <p  className="mt-2 my-4 w-[34%] mx-auto h-1 rounded-full an z-50 bg-gray-800 ">
        
//         </p>

//         {/* Date and Venue */}
//         <div className="text-center space-y-4 px-2">
//           <div className="date-item">
//             <p className="text-xl text-green-800 font-bold ubuntu">Vendredi 28 Novembre 2025</p>
//             <div className="flex items-center justify-center gap-2">
//               <img src="/certificate.png" className='size-7 rotate-2' loading="lazy" />
//               <p className="text-gray-600 serif text-xl my-2"> à 10h00</p>
//             </div>
//             <FaArrowDown size={12} className='block c mx-auto animate-bounce text-blue-400' />
//             <p className="text-gray-600 text-xl">Mariage Civil</p>
//             <p className="text-gray-600 text-lg">Commune Annexe</p>
//           </div>

//           <div className="date-item">
//             <p className="text-xl text-green-800 font-bold ubuntu">Samedi 29 Novembre 2025</p>
//             <div className="flex items-center justify-center gap-2">
//               <img src="/rings.png" className='size-7 rotate-2' loading="lazy" />
//               <p className="text-gray-600 serif text-xl my-2"> à 12h00</p>
//             </div>
//             <FaArrowDown size={12} className='block c mx-auto animate-bounce text-blue-400' />
//             <p className="text-gray-600 text-xl">Mariage Religieux</p>
//             <p className="text-gray-600 text-lg">Église 8e CEPAC PENUEL</p>
//             <p className="text-gray-500 text-lg">Réf. Arrêt Texaco Boulevard M'siri</p>
//           </div>

//           <div className="date-item">
//             <div className="flex items-center justify-center gap-2">
//               <img src="/glass.png" className='size-7 rotate-2' loading="lazy" />
//               <p className="text-gray-600 serif text-xl my-2"> à 18h00 </p>
//             </div>
//             <FaArrowDown size={12} className='block c mx-auto animate-bounce text-blue-400' />
//             <p className="text-gray-600 text-xl">Réception</p>
//             <p className="text-animated-color text-2xl my-2 font-bold">Salle EL'SHADAI</p>
//             <p className="text-gray-500 text-lg">Réf. Arrêt Craa, prolongement de l'entrepôt de Auto Lubumbashi à quelque mètre de Jangwa</p>
//           </div>
//         </div>
//  <div ref={securityRef} className="mt-3  text-center p-2">
//           <div className="border-2 border-red-300 flex items-center bg-red-50 p-4 rounded-2xl shadow-sm  gap-4">
//             <div className="text-red-500 block mt-1">
//               <FiAlertTriangle size={24} />
//             </div>
//             <div>
//               <p className="text-red-700 text-sm font-bold mb-2">
//                 INFORMATION IMPORTANTE:
//               </p>
//               <p className="text-red-700 text-sm mb-2">
//                 Pour des raisons de sécurité, l'arrivée des invités commence à 18h00. Veuillez vous présenter à la salle à cette heure.
//               </p>
//               {/* <p className="text-red-700 text-sm">
//                 Présentez votre code QR à l'entrée. En cas de souci, une assistance sera disponible.
//               </p> */}
//             </div>
//           </div> 
//         </div>
//         {/* Contacts */}
//         <div className="mt-6 text-center px-2">
//           <p className="text-xl text-green-800 font-bold mb-2">Contacts</p>
//           <div className="space-y-1">
//             {/* <p className="text-gray-600 text-lg">+243976022715</p> */}
//             <p className="text-gray-600 text-lg">+243995711894</p>
//             <p className="text-gray-600 text-lg">+243999008101</p>
//           </div>
//         </div>

//         {/* Information de sécurité */}
       

     

//         {/* Signature */}
//                   <p className="text-gray-600 my-5 text-lg">
                    
//                 Ce code QR est unique pour chaque invitation, cela permet de n'est pas utiliser une invitation deux fois de suite. 
                    
//                     </p>


//         {/* QR Code Section */}
//         <div  className="mt-9 mb-8 relative">
//           <div className={`mx-auto p-2 blur-x border-4 rounded-xl w-max relative`}>
//             <QRCodeSVG
//               value={JSON.stringify(qrContent)}
//               size={180}
//               level="H"
//               includeMargin={true}
//               fgColor="#000"
//             />
//           </div>
//    <div className="mt-8 text-center">
//           <p className="text-gray-800 text-lg">Avec toute notre joie,</p>
//           <p className="mt-2 text-gray-700 text-xl">La famille</p>
//         </div>
//           {/* Message pour le QR Code */}
//           {/* <div className="mt-3 px-4 text-center">
//             <p className="text-sm font-bold text-green-700 mb-1">
//               PRÉSENTEZ CE CODE QR À L'ENTRÉE
//             </p>
//           </div> */}
//         </div>
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
    <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-rose-50">
      <div className="relative max-w-lg w-full overflow-hidden text-center text-gray-800 bg-white shadow-2xl rounded-3xl">

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
          className="absolute  top-[2%] w-[40px] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20" 
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
          <div className="inline-block bg-amber-100 border-2 border-amber-300 rounded-full px-6 py-2 mb-4">
            <span className="text-amber-800 font-semibold text-sm">🪵 Noces de Bois • 5 ans 🪵</span>
          </div>
          
          {/* Participant Name */}
          <div ref={titleRef}>
            {qrData.isCouple && (
              <h1 className="text-lg font-light text-gray-600 mb-2">
                — Couple —
              </h1>
            )}
            {!qrData.isCouple && (
              <h1 className="text-lg font-light text-gray-600 mb-2">
                — Invité(e) —
              </h1>
            )}
            <h1 className="text-3xl font-bold text-gray-800 font-serif">
              {qrData.participants[0].name}
            </h1>
            {qrData.isCouple && qrData.participants[1].name && (
              <h1 className="text-3xl font-bold text-gray-800 font-serif">
                & {qrData.participants[1].name}
              </h1>
            )}
            <p className="text-gray-600 mt-3 text-lg italic">
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
        <div className="mt-8 px-6 text-lg text-gray-700 relative z-10">
          <div className="mb-6 flex flex-col items-center font-serif">
            <h3 className="text-3xl font-semibold text-gray-800">Le Couple Kitenge</h3>
            <span className="text-lg font-bold h-[25px] my-2 grid justify-center">
              <Heart className="text-rose-600 inline-block" fill="#e11d48"/>
              <Heart className="text-rose-400 translate-x-[16px] inline-block translate-y-[-25px] rotate-6" fill="#fb7185"/>
            </span>
          </div>
          
          <div ref={invitationRef} className="bg-amber-50/50 border border-amber-200 rounded-2xl p-5 mb-4">
            <p className="text-gray-700 leading-relaxed italic">
              "À l'occasion de nos noces de bois, nous célébrons avec gratitude cinq années d'amour, de confiance et de fidélité. Votre présence serait pour nous un immense honneur. Nous vous invitons cordialement à partager ce moment de joie et de convivialité à nos côtés."
            </p>
          </div>
        </div>

        {/* Programme */}
        <p className="mt-4 px-4 font-bold text-gray-700 text-lg">
          PROGRAMME DE CÉLÉBRATION
        </p>
        <p className="mt-2 mb-6 w-[40%] mx-auto h-1 rounded-full bg-gradient-to-r from-amber-400 to-rose-400"></p>

        {/* Détails des événements */}
        <div ref={programRef} className="text-center space-y-6 px-2 relative z-10">
          <div className="date-item bg-white/80 rounded-2xl p-4 mx-4 shadow-sm border border-amber-100">
            <div className="flex items-center justify-center gap-2 mb-1">
              <FiClock className="text-amber-600" />
              <p className="text-xl text-amber-800 font-bold">Samedi 19 Juillet 2026</p>
            </div>
              <p className="text-xl text-amber-950 font-bold f select-">A 17 heures</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <FiMapPin className="text-rose-600" />
              <p className="text-rose-800 font-bold text-lg">Adresse</p>
            </div>
            <p className="text-gray-700 text-xl font-medium">Avenue Chrinovic Primaire</p>
            <p className="text-gray-600 text-lg">Référence : HK Lodge</p>
            {/* <p className="text-gray-500 text-sm mt-1">Prolongement de l'entrepôt Auto Lubumbashi, à quelques mètres de Jangwa</p> */}
          </div>
        <div className="mt-6 text-center px-2 relative z-10">
          <p className="text-xl text-amber-800 font-bold mb-3">📞 Contacts</p>
          <div className="space-y-2">
            <p className="text-gray-600 text-lg">+243 973 322 414</p>
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