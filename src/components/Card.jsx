import React from 'react'
import error from "../assets/Vector.png"
import other from "../assets/Vector2.png"
export default function Card({text, classname, title}) {
return (
<div>
    <div className={classname}>
        <div className='upperDiv'>
            <div className='iconDiv'>
                <img src={error} />
                <p>Invalid {title}</p>
            </div>
            <div className='otherDiv'>
                <img src={other} />
            </div>

        </div>
        <hr className='error-hr'>
        </hr>
        <div className='lowerDiv'>
            <p>{text}</p>
        </div>
    </div>
</div>
)
}