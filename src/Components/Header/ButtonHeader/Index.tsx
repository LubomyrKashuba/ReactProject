import React from "react";

import './ButtonHeader.scss'

function ButtonHeader({icons}:any) {
  return (
    <div className="ButtonHeader">
      <svg
        className="bg"
        width="47"
        height="45"
        viewBox="0 0 47 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        
        <path
        className='icon__header'
          d="M45.2083 18.1669L45.2084 18.167C46.7906 22.9887 47.0613 28.4122 45.2187 33.0569C42.3923 40.1815 34.8975 44.3582 27.6059 44.4963C21.8566 44.6044 14.3579 42.3387 8.69888 38.1334C3.05046 33.9361 -0.68529 27.8778 0.845276 20.378C2.16342 13.9239 7.85576 7.82595 13.0413 4.37013C19.7859 -0.122065 26.5525 -0.480618 32.2513 2.14746C37.9685 4.78402 42.6817 10.4605 45.2083 18.1669Z"
          stroke="#518B26"
        ></path>
      </svg>
      <div className="button-icon"> {icons}</div>
    </div>
  );
}

export default ButtonHeader;
