import React from 'react'

export default function PersonalFields({onFocus,onBlur,type, id, name, value, placeholder, className, onChange}) {
return (

<div className='form-div'>
  <input className={className} type={type} id={id} name={name} value={value} onChange={onChange}
  placeholder={placeholder} onFocus={onFocus} onBlur={onBlur} />
</div>
)

}