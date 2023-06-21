import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#2E3090]'>
            <div>
                <div className='flex gap-14 ml-10 pt-8 pb-5 border-[#cfcccc] border-b-[1px]'>
                    <h1 className='text-white text-5xl'>Where to buy</h1>
                    <h1 className='text-white text-2xl'>Our Products are currently available in <br /> Lebanese stores</h1>
                </div>
                <div className='flex justify-between'>
                    <div className='flex gap-6 ml-10 pt-10'>
                        <h1 className='text-white text-3xl'>LogoHere</h1>
                        <div>
                            <h1 className='text-white'>Address: Mount Lebanon</h1>
                            <h1 className='text-white'>Phone: +961 71 455 200</h1>
                            <h1 className='text-white'>Email: salibadairies@gmail.com</h1>
                        </div>
                    </div>
                    <div className='flex gap-2 mx-52'>
                        <img src="../assets/logo/instagram.svg" alt="" />
                        <img src="../assets/logo/facebook.svg" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer