import { useAuth, useUser } from "@clerk/clerk-react";
import Image from "./Image";
const Comment = () => {
    return (
        <div className="p-4 bg-slate-50 rounded-xl mb-8">
          <div className="flex items-center gap-4">
            
              <Image
                src="userImg.jpeg"
                className="w-10 h-10 rounded-full object-cover"
                w="40"
              />
            
            <span className="font-medium">EAMIN</span>
            <span className="text-sm text-gray-500"> 5 minutes ago</span>
              
          </div>
          <div className="mt-4">
            <p className="text-gray-700">
            Check in on your website at least once a month to make sure there are no bugs. 
            </p>
         
          </div>
        </div>
    );
    }

export default Comment;