// used this video for the stacked cards
// https://youtu.be/29deL9MFfWc?si=bYJGe8nJfOI6WEXb

// used this video for the scroll effect
// https://youtu.be/PkADl0HubMY?si=xfCE1mBwFJO_5N56

import './EBoard.css'

import PhotoKelly from '../assets/EBoardPhotos/NotKelly.png'
import PhotoMaggie from '../assets/EBoardPhotos/Maggie.png'
import PhotoErina from '../assets/EBoardPhotos/Erina.png'
import PhotoGuan from '../assets/EBoardPhotos/Guan.png'
import PhotoSabrina from '../assets/EBoardPhotos/Sabrina.png'
import PhotoGael from '../assets/EBoardPhotos/Gael.png'
import PhotoAnthony from '../assets/EBoardPhotos/Anthony.png'
import PhotoKyle from '../assets/EBoardPhotos/Kyle.png'
import PhotoJackie from '../assets/EBoardPhotos/Jackie.png'
import PhotoMaya from '../assets/EBoardPhotos/Maya.png'
import PhotoMamota from '../assets/EBoardPhotos/Mamota.png'
import PhotoTahya from '../assets/EBoardPhotos/Tahya.png'
import PhotoFahmida from '../assets/EBoardPhotos/Fahmida.png'
import PhotoFariha from '../assets/EBoardPhotos/Fariha.png'
// import Photo from '../assets/EBoardPhotos/.png'

import { useRef, useEffect } from 'react'

function EBoard()
{
    const members = [
        {
            name: "Kelly",
            role: "President",
            photo: PhotoKelly
        },
        {
            name: "Maggie",
            role: "Vice President",
            photo: PhotoMaggie
        },
        {
            name: "Erina",
            role: "Secretary",
            photo: PhotoErina
        },
        {
            name: "Guan",
            role: "Treasurer",
            photo: PhotoGuan
        },
        {
            name: "Sabrina",
            role: "Public Relations",
            photo: PhotoSabrina
        },
        {
            name: "Gael",
            role: "Event Coordinator",
            photo: PhotoGael
        },
        {
            name: "Anthony",
            role: "Tech Advisor",
            photo: PhotoAnthony
        },
        {
            name: "Kyle",
            role: "Tech Coordinator",
            photo: PhotoKyle
        },
        {
            name: "Jackie",
            role: "Data && Logistics Coordinator",
            photo: PhotoJackie
        },
        {
            name: "Maya",
            role: "Event Coordinator",
            photo: PhotoMaya
        },
        {
            name: "Mamota",
            role: "Event Coordinator",
            photo: PhotoMamota
        },
        {
            name: "Tahya",
            role: "Tech Coordinator",
            photo: PhotoTahya
        },
        {
            name: "Fahmida",
            role: "Community Manager",
            photo: PhotoFahmida
        },
        {
            name: "Fariha",
            role: "Tech Advisor",
            photo: PhotoFariha
        },
        {
            name: "Dinasty",
            role: "Public Relations",
            photo: PhotoFahmida
        },

    ]
    
    const trackRef = useRef(null);
    const mouseDownAt = useRef(0);
    const prevScrollLeft = useRef(0);

    const targetScroll = useRef(0);
    const animationFrame = useRef(null);



    const handleOnDown = (e) => {
        mouseDownAt.current = e.clientX;
    };

    const handleOnUp = () => {
        mouseDownAt.current = 0;
        prevScrollLeft.current = trackRef.current.scrollLeft;
        
    };

    const smoothScrollToTarget = () => {
        const track = trackRef.current;
        if (!track) return;
      
        const current = track.scrollLeft;
        const target = targetScroll.current;
        const delta = target - current;
      
        if (Math.abs(delta) < 1) {
          track.scrollLeft = target;
          return;
        }
      
        track.scrollLeft += delta * .15;
      
        animationFrame.current = requestAnimationFrame(smoothScrollToTarget);
      };
      
      
    const handleOnMove = (e) => {
        if (mouseDownAt.current === 0) return;
            
        const mouseDelta = mouseDownAt.current - e.clientX;
      
        targetScroll.current = prevScrollLeft.current + mouseDelta;
      
        cancelAnimationFrame(animationFrame.current);
        smoothScrollToTarget();
      };
      
      //code below was a handlemove that was a little bit more accurate to
      // will remove after this commit since the newer one works better and
      // it's simple
      //   const handleOnMove = (e) => {
    //     if (mouseDownAt.current === 0) return;
    
    //     const mouseDelta = mouseDownAt.current - e.clientX;
    //     const deltaPercent = mouseDelta / window.innerWidth;
    
    //     const track = trackRef.current;
    //     const maxScroll = track.scrollWidth - track.clientWidth;
    //     const scrollAmount = deltaPercent * maxScroll;
    
    //     const RANDOM_MULTIPLIER =3;
    //     targetScroll.current = prevPercentage.current + scrollAmount*RANDOM_MULTIPLIER;
    
    //     // Cancel old frame and start new animation
    //     cancelAnimationFrame(animationFrame.current);
    //     smoothScrollToTarget();
    //   };

    useEffect(() => {
        const handleTouchStart = (e) => handleOnDown(e.touches[0]);
        const handleTouchEnd = (e) => handleOnUp(e.touches?.[0]);
        const handleTouchMove = (e) => handleOnMove(e.touches[0]);

        window.addEventListener("mousedown", handleOnDown);
        window.addEventListener("mouseup", handleOnUp);
        window.addEventListener("mousemove", handleOnMove);

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
        window.removeEventListener("mousedown", handleOnDown);
        window.removeEventListener("mouseup", handleOnUp);
        window.removeEventListener("mousemove", handleOnMove);

        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchend", handleTouchEnd);
        window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);


    return(
        <div className="eBoard" ref={trackRef}>
            {members.map((member, index) => (
                <EBoardCard
                    key={index}
                    name={member.name}
                    role={member.role}
                    photo={member.photo}
                />
            ))}

        </div>
    );
}export default EBoard

function EBoardCard(props){
    return(
        <div className="eBoardCard">
            <img 
                src={props.photo} 
                alt={`${props.name} picture`} 
                className='MemberPhoto'
                draggable="false"
            ></img>
            <p>{props.name}</p>
            <p>{props.role}</p>
        </div>
    );
}