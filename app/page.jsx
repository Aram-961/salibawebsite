import Image from "next/legacy/image";

import MilkIcon1 from '@public/assets/images/MilkIcon.png'
import MilkIcon2 from '@public/assets/images/MilkIcon2.png'
import CowIcon from '@public/assets/icons/cow-White.svg'

const Home = () => {
    return (
        <div className="font">
            <div className="relative" style={{
                backgroundImage: `url("../assets/background/cowsbg.png")`,
                height: '100vh',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                zIndex: -1,
            }} />


            {/* header */}
            <div className="flex-center pt-32 absolute top-60 left-0 right-0">
                <h1 className="text-white md:text-8xl pb-5">Milk & More</h1>
                <h2 className="text-white md:text-3xl pb-5">Fresh Local Delivered</h2>
                <button className="btn">View Our Products</button>
            </div>

            {/* Welcome section */}

            <section className="bg-[#2E3090] min-h-[31.2vh] w-full">
                <div className="flex items-center justify-center relative">
                    <div>
                        <div className="absolute top-0 left-0">
                            <Image src={MilkIcon1} />
                        </div>
                        <div className="absolute top-0 right-0">
                            <Image src={MilkIcon2} />
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-white md:text-5xl">Welcome To Our Family</h1>
                        <Image src={CowIcon} />
                        <p className=" text-white break-before-all md:text-3xl">Here you will find a wide range of healthy and fresh products that , <br /> were proudly produced by our farm</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;