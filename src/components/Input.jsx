import React from 'react'

export default function PersonalFields({onFocus,onBlur,type, id, name, value, placeholder, className}) {
  return (
    <div className='form-div'>
        
            <input className={className} type={type} id={id} name={name} value={value} placeholder={placeholder} onFocus={onFocus} onBlur={onBlur}/>
          

        
    </div>
  )
}
