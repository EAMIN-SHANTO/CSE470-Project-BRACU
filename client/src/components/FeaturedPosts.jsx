import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
    return ( 
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* First */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* image */}
            <Image src="hp.jpg" className="rounded-3xl object-cover" w="895" />
            
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold lg:text-lg">01.</h1>
                <Link className="text-blue-800 lg:text-lg"> BRACU FEST</Link>
                

                
                <span className="text-gray-500">1 day ago</span>

            </div>

            {/* title */}
            <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold">  HARRY POTTER FEST 2024! </Link>
            
            </div>
            {/* other */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/* second */}
                <div className="lg:h-1/3 flex justify-between gap-4">
                <div className=" w-1/3 aspect-video">

                                        

                        <Image 
                        src="featured2.jpeg" 
                        className="rounded-3xl object-cover w-full h-full" 
                        w="298"/>
                        </div>
                    {/* details and title */}
                    <div className="w-2/3">
                        {/* details */}
                        <div className="flex item-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold text-sm lg:text-base">02.</h1>
                            <Link to="/website-design" className="text-blue-800">website design</Link>
                            <span className="text-gray-500 text-sm">2 day ago</span>
                        </div>
                        <div>
                            {/* title */}
                            <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Webdesign</Link>
                        </div>
                    </div>

            
            </div>
            {/* third */}
            <div className="lg:h-1/3 flex justify-between gap-4">

            <div className=" w-1/3 aspect-video">

                   

                <Image 
                src="featured3.jpeg" 
                className="rounded-3xl object-cover w-full h-full" 
                w="298"/>
                </div>
                                {/* details and title */}
                <div className="w-2/3">
                    {/* details */}
                    <div className="flex item-center gap-4 text-sm lg:text-base mb-4">
                        <h1 className="font-semibold text-sm lg:text-base">02.</h1>
                        <Link to="/website-design" className="text-blue-800">website design</Link>
                        <span className="text-gray-500 text-sm">2 day ago</span>
                    </div>
                    <div>
                        {/* title */}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Webdesign</Link>
                    </div>
                </div>


                </div>
            {/* fourth */}
            <div className="lg:h-1/3 flex justify-between gap-4">

            <div className=" w-1/3 aspect-video">

                   

                <Image 
                src="featured4.jpeg" 
                className="rounded-3xl object-cover w-full h-full" 
                w="298"/>
                </div>
                    {/* details and title */}
                    <div className="w-2/3">
                        {/* details */}
                        <div className="flex item-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold text-sm lg:text-base">02.</h1>
                            <Link to="/website-design" className="text-blue-800">website design</Link>
                            <span className="text-gray-500 text-sm">2 day ago</span>
                        </div>
                        <div>
                            {/* title */}
                            <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Webdesign</Link>
                        </div>
                    </div>


                    </div>

            </div>
        </div>


    )
}

export default FeaturedPosts;