import React from 'react'
import  './Preloader.scss'

const Preloader = () => {
  return (
    <div className='Preloader'>
            <h1 className='text'>Cooking in progress..</h1>
                <div id="cooking">
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div id="area">
                        <div id="sides">
                        <div id="pan"></div>
                        <div id="handle"></div>
                    </div>
                    <div id="pancake">
                        <div id="pastry"></div>
                    </div>
             </div>
            </div>
        </div>
  )
}

export default Preloader