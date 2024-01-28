import Image from "next/image";
import React from "react";
import Card from "@/components/card";
import Blog from "@/components/blogs";
import Blogs from "@/components/blogs";
import Contact from "@/components/contactus";
import Product from "@/components/e/productlist"
import Promo from "@/components/e/promosection"





// export default function Home() {
//   return (

    
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div>Hello world</div>
//     </main>
//   );
// }

const Home = () => {
return(

  <main >
         {/* <div>Hello world</div> */}

       {/* <div>
        Cards
        <Card/>
       </div>
       <div>
        blogs
       <Blogs />
       </div>
       <div>
        contactus
       <Contact />
       </div> */}

       <div><Promo/></div>


        <div><Product/></div>
      




       </main>
)}

export default Home;