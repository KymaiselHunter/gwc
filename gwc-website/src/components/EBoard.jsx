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
    

    return(
        <div className="eBoard">
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
            <img src={props.photo} alt={`${props.name} picture`} className='MemberPhoto'></img>
            <p>{props.name}</p>
            <p>{props.role}</p>
        </div>
    );
}