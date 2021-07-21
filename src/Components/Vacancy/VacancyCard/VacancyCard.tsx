import React from 'react'

import './VacancyCard.scss'

interface VacancyProps{
    src:string;
    position:string;
}

function VacancyCard({src,position}:VacancyProps){
    return(
        <div className='VacancyCard'>
            <img src={src} alt="" />
            <p>{position}</p>
        </div>
    )
}

export default VacancyCard