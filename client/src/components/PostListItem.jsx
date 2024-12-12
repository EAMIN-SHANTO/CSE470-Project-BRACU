import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8 mb-12">
        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3">
            <img src="postImg.jpeg" alt="featured" className="rounded-2xl object-cover w=735" />

        </div>
        {/* details */} 
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="text-4xl font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium error alias vel debitis id, velit consectetur est odio distinctio dolore dolores provident porro mollitia ullam reprehenderit nesciunt eius, aliquam accusamus?
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written by</span>
                <Link className="text-blue-800">EAMIN</Link>

                <span>On</span>
                <Link className="text-blue-800">Web Design</Link>
                <span> 2 days ago</span>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit delectus consequatur hic voluptatibus magnam cum, ad distinctio laudantium aspernatur explicabo odio ea quibusdam fuga recusandae numquam expedita iusto. Asperiores, amet?</p>
            <Link to="/test" className="underline text-red-800">Read More</Link>
        </div>

      
        
      </div>
    );
  }
  export default PostListItem;