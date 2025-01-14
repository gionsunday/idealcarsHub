"use client"

import React from 'react' 
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

export const CustomButton = ({title, constainerStyles, handleClick, btnType} : CustomButtonProps) => {
  return (
    <button
     disabled = {false}
     type={btnType || "button"}
     className={`custom-btn ${constainerStyles}`}
     onClick={handleClick}
    >
        <span className={`flex-1  `}>
            {title}
        </span>
    </button>
  )
}