import Image from "../components/Image";
import { Link } from "react-router-dom";
const SinglePostPage = () => {
    return (
      <div className="flex flex-col gap-8">
       {/* details */}
       <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1>starting of sing post writing here is how</h1>
          <span> Written By</span>
          <Link> </Link>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg"/>
        
        </div>

       </div>
       {/* content */}
       <div className="">

       </div>
      </div>
    )
  }
  
  export default SinglePostPage;