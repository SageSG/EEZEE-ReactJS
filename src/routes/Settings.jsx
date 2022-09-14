import React, {useState} from 'react'
import Profile from '../components/profile/Profile'

function Settings() {
    const [menu, setMenu] = useState(0)
  return (
    <main>
        <div className='flex flex-col flex-wrap w-full h-screen bg-w2'>
        <div className='flex w-1/4 h-full bg-w2'>
        <div className='flex flex-row flex-wrap w-full h-fit bg-w1 rounded m-8 p-8'>
                <div className='flex w-full h-fit font-type1 font-bold text-[20px]' onClick={()=>{setMenu(0)}}>Profile</div>
                <div className='font-type1 w-full h-fit text-[20px]' onClick={()=>{setMenu(1)}}>Account</div>
                <div className='font-type1 w-full h-fit text-[20px]' onClick={()=>{setMenu(2)}}>Transaction History</div>
            </div>
            </div>
            <div className='flex w-3/4 h-full bg-g2'>
              <Profile/>
            </div>
        </div>
    </main>
  )
}

export default Settings