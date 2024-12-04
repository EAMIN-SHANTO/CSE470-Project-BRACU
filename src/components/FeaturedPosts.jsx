import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
    return ( 
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* First */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* image */}
            <Image src="hp.jpg" className="rounded-3xl object-cover" />
            
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold lg:text-lg">01.</h1>
                <Link className="text-blue-800 lg:text-lg"> BRACU FEST</Link>
                

                
                <span className="text-gray-500">1 day ago</span>

            </div>

            {/* title */}
            <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold">  HARRY POTTER FEST 2024! </Link>
            <Link className="text-black-800 lg:text-sm block text-justify">world of HARRY POTTER FEST 2024, taking place from December 7th to 9th at BRAC University.

Our magical celebration invites you to embark on an exciting journey that champions the spirits of internationalism, economic prosperity, and climate sustainability. Join us as we explore a world where friendship, bravery, and acceptance reign supreme, uniting hearts and minds from every corner of our diverse community.</Link>
            </div>
            {/* other */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
            </div>
        </div>


    )
}

export default FeaturedPosts;