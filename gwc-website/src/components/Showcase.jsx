// import './Showcase.css'
import {useState, useEffect, useRef} from 'react'
import reactLogo from '../assets/react.svg'
import showcasePhoto from '../assets/leetcodeEvent.jpeg'
import './Showcase.css'

function Showcase(){
    const elementRef = useRef(null)

    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) => {
          console.log(entry)
          if(entry.isIntersecting){
            entry.target.classList.add('showcase-reveal');
          }
        //   else{
        //     entry.target.classList.remove('show');
        //   }
        })
      });
    
      useEffect(()=>{
        console.log(elementRef.current)
        const hiddenElements = elementRef.current
        // const hiddenElements = document.querySelectorAll('.hide');
        // hiddenElements.forEach((el) =>observer.observe(el));
        observer.observe(hiddenElements)
      },[]);

    return(
        <>
            <img ref={elementRef} src={showcasePhoto} className="showcase-hide w-[75%] h-auto rounded-3xl drop-shadow-lg" alt="React logo" />
            {/* <img src={reactLogo} className="hide w-80 h-80" alt="React logo" /> */}
        </>
    );
}export default Showcase