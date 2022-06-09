import React from 'react'



export default function BlogComponent({ title, text }) {
        return (
                <div className="wrapper__container">
                        <div className='title__container'>
                                <h1>{title}</h1>
                        </div>

                        <div className='text__container'>
                             {text} 
                        </div>

                        
                </div>

        )
}