import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';

// const App = () => {
  
//   const gsapRef = useRef()

//   useGSAP(()=>{
//     gsap.to(gsapRef.current,{
//       x:1500,
//       duration:2,
//       delay:1,
//       rotate:720
//     })
//   })

//   return (
//     <main>
//       <div ref={gsapRef} className="box">

//       </div>
//     </main>
//   )
// }

const App = () => {

  const [circle, setCircle] = useState(0)

  const random = gsap.utils.random(-500,500,10)

  console.log(random)

  return (
    <main>
      <button onClick={()=>{

    }}>Animate</button>
      <div className="circle"></div>
    </main>
  )
}

export default App