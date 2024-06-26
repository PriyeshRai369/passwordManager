import React from 'react'
import style from './InputContainer.module.css'
import InputFild from '../InputFild/InputFild'
import Heading from '../Heading/Heading'
import Ads from '../Ads/Ads'

function InputContainer({handleClicks}) {
  return (
    <div className={style.inputContainer}>
        <div className={style.heading}>
          <Heading />
        <p>Keep Your Password Safe</p>
        </div>
        <Ads/>
        <InputFild handleClicks={handleClicks} />
    </div>
  )
}

export default InputContainer