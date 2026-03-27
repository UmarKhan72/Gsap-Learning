import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import React, { useRef, useState } from 'react';


// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import React, { useRef, useState } from 'react';

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

// const App = () => {

//   const randomX = gsap.utils.random(-500,500,100)
//   const rotateX = gsap.utils.random(-360,360,30)
//   const randomY = gsap.utils.random(-200,500,100)

//   const [xValue, setXValue] = useState(0)
//   const [yValue, setYValue] = useState(0)
//   const [roti, setRoti ] = useState(0)

//   const imageRef = useRef()

//   useGSAP(()=>{
//     gsap.to(imageRef.current,{
//       x:xValue,
//       y:yValue,
//       duration:0.6,
//       rotate:roti
//     })
//   },{scope:'main',dependencies:[xValue,yValue,roti]})

//   return (
//     <main>
//       <img onClick={()=>{
//         setXValue(randomX)
//         setRoti(rotateX)
//         setYValue(randomY)
//       }} ref={imageRef} src="https://images.vexels.com/media/users/3/242241/isolated/preview/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke.png" alt="" />
//     </main>
//   )
// }

// export default App

const App = () => {
  
  const boxRef = useRef(null)
  const {contextSafe} = useGSAP({scope:boxRef})

  // eslint-disable-next-line react-hooks/refs
  const rotateBox = contextSafe(()=>{
    gsap.to(boxRef.current,{
      rotate: 360,
      duration: 1
    })
  })

  return ( 
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box">Box</div>
    </main>
  );
}
 
export default App;