import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Comments from "../components/Comments";
import Comment from "../components/Comment";

import Search from "../components/Search";
const SinglePostPage = () => {
    return (
      <div className="flex flex-col gap-8">
       {/* details */}
       <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold" >What is Web Design? </h1>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span> Written By</span>
          <Link className="text-blue-800">EAMIN </Link>
          <span>On</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>1 day ago</span>
          </div>
          <p className="text-gray-500 font-medium">Web design involves creating the visual layout and aesthetics of a website, focusing on user experience, graphics, and overall look. Front-end development, on the other hand, involves implementing the design into a functional website using coding languages like HTML, CSS, and JavaScript.</p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="webdesign.jpg" className="rounded-2xl"/>
        
        </div>

       </div>
       {/* content */}
       <div className="flex flex-col md:flex-row gap-12 justify-between">
         {/* text */}
         <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
          Web design has come a long way since the first site was published in 1991. With over one billion live websites on the internet today, it's no surprise that this industry is here to stay. Wix is home to thousands of website design professionals, enthusiasts, and designers who are empowering the industry to reach new heights. So, if you're here to learn more about the world of web design, you've come to the right place.
          </p>
          <p>
          Web design is the art of planning and arranging content on a website so that it can be shared and accessed online with the world. A combination of aesthetic and functional elements, web design is a type of digital design that determines the look of a website—such as its colors, fonts, graphics and user interface (see our guide on website design best practices).
          </p>
          <p>
          Today, creating a website is one of the pillars of having an online presence. Because of this, the world of web design is as dynamic as ever. It is constantly evolving, including mobile apps and user interface design, to meet the growing needs of website owners and visitors alike.
          Web design is often a collaborative process that combines knowledge and tools from related industries, ranging from web design statistics to SEO optimization and UX. Web designers will often bring together professionals from these areas who can optimize performance and focus on the larger process and outcome.
          </p>

          <p>
          The first step in our web design journey is to clarify the difference between web design and website development, since the two are closely related and often (mistakenly) used interchangeably: Web design refers to the visual design and experiential aspects of a particular website. We're going to dive into more detail about web design throughout the rest of this article. Website development refers to the building and maintenance of a website's structure, and involves intricate coding systems that ensure the website functions properly.

          </p>
          <p>
          However, if you use a CMS (a computer software application that manages the digital content of a website) you can learn how to make a website and make updates without the knowledge of using code. Wix is an example of a CMS, which functions as a user-friendly system for website content development. Wix even offers you a way to design a website with AI . 
          </p>
          <p>
          Web designers require their own unique set of tools to create and design. There are a few key elements that will determine which types youll use, and at which stage you ll need them.


          Here are a few questions to consider: How big is your team? What kind of budget do you have? What kind of technical requirements will your site need? What is the overall aesthetic you wish to achieve? Will you create an adaptive or responsive design? What is the purpose of your website? The answers to these questions will also help you understand which kind of website builder you want to work with, or other design software tools.
          </p>

          <p>
          Web designers require their own unique set of tools to create and design. There are a few key elements that will determine which types you'll use, and at which stage you'll need them.


          Here are a few questions to consider: How big is your team? What kind of budget do you have? What kind of technical requirements will your site need? What is the overall aesthetic you wish to achieve? Will you create an adaptive or responsive design? What is the purpose of your website? The answers to these questions will also help you understand which kind of website builder you want to work with, or other design software tools.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
          <div className="flex items-center gap-8">
          <Image
                  src='userImg.jpeg'
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                />
          <Link className="text-blue-800">EAMIN</Link>
          </div>
          <p className="text-sm text-gray-500">
             BRACU CSE Department
          </p>
          <div className="flex gap-2">
          <Link>
                <Image src="facebook.svg" />
          </Link>

          <Link>
            <Image src="instagram.svg" />
          </Link>
          </div>


          
          </div>
          <PostMenuActions/>
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />

        </div>
       


       </div>
       <Comments/>
      </div>
    )
  }
  
  export default SinglePostPage;