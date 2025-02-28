import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
            <p>I was hesitant to buy a sweater online, but I'm so glad I took the chance. The quality is amazing, it's true to size, and the color is even more vibrant in person. It's warm but not too heavy, perfect for layering.</p>
        </div>
    </div>
  )
}

export default DescriptionBox