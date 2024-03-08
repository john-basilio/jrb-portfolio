"use client"

//Icon Imports
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function ScrollToTop () {
    // Scroll-to-top function for the logo name
   const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
     }};

     return(
        <button
        className= "fixed bottom-0 right-0 py-2 mr-6 mb-[5rem] items-center desktop:hidden"
        onClick={scrollToTop}
      >
        <IoIosArrowDropupCircle size={50} />
</button>
     )
}