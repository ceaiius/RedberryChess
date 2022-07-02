import React from 'react'

export default function PersonalFields({onFocus,onBlur,type, name, value, placeholder}) {
  return (
    <div className='form-div'>
        
            <input type={type} placeholder={placeholder} onFocus={onFocus} onBlur={onBlur}/>
          

        
    </div>
  )
}
