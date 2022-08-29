import React from 'react'
import {MdArrowForwardIos} from "react-icons/md"
import Logo1 from "../assets/vectors/coupa-logo.png"
import Logo2 from "../assets/vectors/ivalua-logo.png"
import Logo3 from "../assets/vectors/gep-smart-logo.png"
import Logo4 from "../assets/vectors/microsoft-dynamics-logo.png"
import Logo5 from "../assets/vectors/oracle-logo.png"
import Logo6 from "../assets/vectors/sap-logo.png"
import Logo7 from "../assets/vectors/sap-ariba-logo.png"
import Logo8 from "../assets/vectors/tenderboard-logo.png"



function Homepage() {
  return (
    <main className='flex flex-col flex-wrap w-full h-full px-[120px] bg-[#EFEFF0] items-center'>
        <div className='flex h-[385px] w-4/5 bg-white border-[1px] border-[#E4E5E7] rounded mt-[24px] p-[9px]'>
            <div className='relative w-full h-full rounded bg-[url(/src/assets/images/bannerbackground.png)] bg-cover'>
                <div className='absolute left-[63px] top-[100px] text-[#1E4DAF] font-normal text-[28px] leading-[32px]'>Punchout integration with all major</div>
                <div className='absolute left-[63px] top-[144px] text-[#1E4DAF] font-bold text-[36px] font-roboto leading-[54px]'>ERPs & eProcurement Solutions</div>
                <button className='absolute left-[63px] top-[219px] bg-[#1E4DAF] rounded-3xl text-white font-roboto font-bold text-[24px] leading-[28px] tracking-[0.5px] py-[10px] px-[32px]'>Learn More</button>

                {/* Add company logos */}
                <div className='absolute w-2/5 h-[88px] shadow-banner right-[-8px] top-[85px] rounded-tl-sm bg-white'>
                    <div className='flex w-full h-full items-center'>
                    <div className='flex flex-row space-x-[20px] flex-wrap w-full h-1/2 mx-[32px]'>                
                        <img src={Logo1} alt={''} className='w-1/5 object-contain'/>
                        <img src={Logo2} alt={''} className='w-1/5 object-contain'/>
                        <img src={Logo3} alt={''} className='w-1/5 object-contain'/>
                        <img src={Logo4} alt={''} className='w-1/5 object-contain'/>
                    </div>
                    </div>
                </div>
                <div className='absolute w-1/2 h-[88px] shadow-banner right-[-8px] top-[193px] rounded-tl-sm bg-white'>
                <div className='flex w-full h-full items-center'>
                    <div className='flex flex-row space-x-[20px] flex-wrap w-full h-1/2 mx-[32px]'> 
                <img src={Logo5} alt={''} className='w-1/5 object-contain'/>
                <img src={Logo6} alt={''} className='w-1/5 object-contain'/>
                <img src={Logo7} alt={''} className='w-1/5 object-contain'/>
                <img src={Logo8} alt={''} className='w-1/5 object-contain'/>
                </div>
                </div>
                </div>

            </div>
        </div>

        <section id="featurebrands" className='w-full mt-[40px]'>
            <div className='self-start font-roboto font-bold text-[20px] leading-[28px] tracking-[0.3px]'>
            Feature Brands
            </div>
            <div className='flex flex-row justify-between'>
                <p className='text-[#55585D] text-[14px] leading-[16px] font-roboto font-normal'>Browse the full catalog of brands today</p>
                <span className='flex font-roboto font-normal text-[#2A64DB] text-[14px] leading-[22px]'>View More <MdArrowForwardIos className='self-center w-[14px] h-[14px] ml-[4px] text-[#2A64DB] leading-[28px]'/></span>
            </div>
            <div className='flex flex-row w-full mt-[12px] space-x-[8px]'>
                <div className='flex w-1/6 h-[157px] bg-[red] justify-center align-center'>Abb</div>
                <div className='flex w-1/6 h-[157px] bg-[red] justify-center align-center'>Abb</div>
                <div className='flex w-1/6 h-[157px] bg-[red] justify-center align-center'>Abb</div>
                <div className='flex w-1/6 h-[157px] bg-[red] justify-center align-center'>Abb</div>
                <div className='flex w-1/6 h-[157px] bg-[red] justify-center align-center'>Abb</div>
                <div className='flex w-1/6 h-[157px] bg-[red] justify-center align-center'>Abb</div>
            </div>
        </section>

        <section id="ourproducts" className='w-full mt-[40px]'>
            <div className='self-start font-roboto font-bold text-[20px] leading-[28px] tracking-[0.3px]'>
            Our Products
            </div>
            <div className='flex flex-row justify-between'>
                <p className='text-[#55585D] text-[14px] leading-[16px] font-roboto font-normal'>Trusted by the best companies in Asia</p>
                <span className='flex font-roboto font-normal text-[#2A64DB] text-[14px] leading-[22px]'>View More <MdArrowForwardIos className='self-center w-[14px] h-[14px] ml-[4px] text-[#2A64DB] leading-[28px]'/></span>
            </div>
            <div className='flex flex-row w-full mt-[12px] space-x-[8px]'>
                <div className='flex w-1/6 h-[157px] bg-[red] justify-center align-center'>Abb</div>
                <div className='flex w-1/6 h-[157px] bg-[red] justify-center align-center'>Abb</div>
                <div className='flex w-1/6 h-[157px] bg-[red] justify-center align-center'>Abb</div>
                <div className='flex w-1/6 h-[157px] bg-[red] justify-center align-center'>Abb</div>
                <div className='flex w-1/6 h-[157px] bg-[red] justify-center align-center'>Abb</div>
                <div className='flex w-1/6 h-[157px] bg-[red] justify-center align-center'>Abb</div>
            </div>
        </section>
    </main>
  )
}

export default Homepage