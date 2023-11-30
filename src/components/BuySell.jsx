import React from 'react'

function BuySell() {
  return (
   <section>
    <div className='container-wrapper'>

        <div className='flex justify-center'>
            <img src="images/team-main.png" alt="" />

        </div>
        <div className=' flex justify-center gap-4'>
           <a href="/">Buy</a>
           <a href="/"> sell</a> 
        </div>

        <div className=' flex justify-center'>
            <img src="images/share.png" alt="" />
        </div>

    </div>
   </section>
  )
}

export default BuySell