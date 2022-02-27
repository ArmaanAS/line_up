import { useEffect, useState } from "react";
import logo from "../images/logo.svg";


/**
 * Header / navbar component containing logo
 * 
 * @returns Header component 
 */
export default function Header() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", e => {
      const scroll = document.documentElement.scrollTop;
      if (!shadow && scroll > 30) {
        setShadow(true);
      } else if (shadow && scroll <= 30) {
        setShadow(false);
      }
    });
  }, [shadow]);

  return (
    <header className={`sticky top-0 flex justify-center px-8 py-4 transition underline underline-offset-2 text-blue-400 border-b border-b-gray-900/40 ${shadow ? "shadow-lg backdrop-blur-sm bg-slate-800/40" : ""}`}>
      {/* <h1 className="text-5xl font-black tracking-tighter text-transparent bg-clip-text pb-2 pr-2 bg-gradient-to-br from-blue-600 via-blue-200 to-sky-500 text-shadowx">Line-Up</h1> */}
      <img src={logo} alt="Line-up Logo" className="h-24 py-4 px-12 bg-slate-200 rounded-full" />
    </header>
  );
}