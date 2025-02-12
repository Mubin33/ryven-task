import Navbar from "./Shared/Navbar";
import { BsCoin } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { MdPostAdd } from "react-icons/md";
import { IoCalculatorSharp } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import { TbCoinPoundFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import img from "./assets/sddefault.jpg"
import { IoMdShare } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { GiRank3 } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";




function App() { 

  const [time, setTime] = useState("");
  const [activeShare, setActiveShare] = useState(false)
 
  

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme)

  useEffect(() => {
    // প্রতি সেকেন্ডে সময় আপডেট করার জন্য Interval সেট করা
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now
        .toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
      setTime(formattedTime);
    }, 1000);

    // কম্পোনেন্ট আনমাউন্ট হলে interval পরিষ্কার করা
    return () => clearInterval(interval);
  }, []);


  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center", 
  };



  return (
    <div>
    {/* nav */}
    <div className="navbar ">
      <div className="flex-1">
        <a className="btn btn-ghost text-gray-400 text-3xl">RYVEN</a>
      </div>
      <div className="flex-none">
        <label className="swap swap-rotate">
          <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
          {/* Sun icon */}
          <svg className="swap-off h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
          </svg>
          {/* Moon icon */}
          <svg className="swap-on h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
          </svg>
        </label>
        <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg> 
      </div>
    </button>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost w-20 flex justify-start border-2 border-black btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Profile" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a className="justify-between">Profile<span className="badge">New</span></a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>



    {/*  */}
    <div  className="container mx-auto   min-h-screen py-10">
      <div className="lg:px-16 relative  md:grid md:gap-4 grid-cols-9">
        {/*  */}
        {
          activeShare ? <><div className="absolute top-1 z-10 -right-10 h-[480px] p-4 rounded-2xl w-80 bg-gray-700" >
          <h1 className="text-blue-500 text-2xl mb-2 font-bold">Quick Nav</h1>
          <hr />
            <h1 className="text-white text-xl mb-2 font-semibold mt-48 flex items-center gap-1"><FaHome  />Home</h1>
            <h1 className="text-white text-xl mb-2 font-semibold flex items-center gap-1"><IoIosNotifications   />Notification</h1>
            <h1 className="text-white text-xl mb-2 font-semibold flex items-center gap-1"><FaTasks   />All Task</h1>
            <h1 className="text-white text-xl mb-2 font-semibold flex items-center gap-1"><GiRank3   />Rank</h1>
            <h1 className="text-white text-xl mb-2 font-semibold flex items-center gap-1"><CgProfile   />Profile</h1>
            <hr className="my-2"/>
            <h1 onClick={()=> setActiveShare(false)} className="text-white cursor-pointer text-xl mb-2 font-semibold flex items-center gap-1"><FaArrowLeft   />Back</h1>
        </div></> :<></>
        }
        
        {/*  */}
{/*  */}
        <div className="col-span-5">
          <div className={`p-3 text-white  ${theme === "light"? "bg-gray-200" :"bg-gray-900"} rounded-xl `}>
            <div className="flex justify-between">
              <h4>Your task</h4>
              <div>Filter | All tasks</div>
            </div>
            <div>
              {/*  */}
              <div className="p-2 border-[1px] border-gray-300 flex items-center mt-3 rounded-md justify-around" >
                <div className="bg-white rounded-full btn btn-sm "><MdOutlineScience size={19}/>                </div>
                <div>
                  <h3 className={`text-xs flex gap-1 font-bold  ${theme === "light"? "text-black" :"text-white"} `}>Science Lab Report <IoTimerOutline /></h3>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"} `}>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={`flex ${theme === "light"? "text-black" :"text-white"} items-center text-sm gap-1`}>
                <BsCoin />
                  1 Coin
                </div>
                <div>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"}`}>02-30</p>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"}`}>11:30PM</p>
                </div>
                <button className="bg-white text-black btn btn-sm">Details</button>
              </div>
              {/*  */}

              {/*  */}
              <div className="p-2 border-[1px] border-gray-300 flex items-center mt-3 rounded-md justify-around" >
                <div className="bg-white rounded-full btn btn-sm "><MdPostAdd  size={19}/>                </div>
                <div>
                  <h3 className={`text-xs flex gap-1 font-bold  ${theme === "light"? "text-black" :"text-white"} `}>Science Lab Report <IoTimerOutline /></h3>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"} `}>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={`flex ${theme === "light"? "text-black" :"text-white"} items-center text-sm gap-1`}>
                <BsCoin />
                  1 Coin
                </div>
                <div>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"}`}>02-30</p>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"}`}>11:30PM</p>
                </div>
                <button className="bg-white text-black btn btn-sm">Details</button>
              </div>
              {/*  */}


              {/*  */}
              <div className="p-2 border-[1px] border-gray-300 flex items-center mt-3 rounded-md justify-around" >
                <div className="bg-white rounded-full btn btn-sm "><IoCalculatorSharp  size={19}/>                </div>
                <div>
                  <h3 className={`text-xs flex gap-1 font-bold  ${theme === "light"? "text-black" :"text-white"} `}>Science Lab Report <IoTimerOutline /></h3>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"} `}>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={`flex ${theme === "light"? "text-black" :"text-white"} items-center text-sm gap-1`}>
                <BsCoin />
                  1 Coin
                </div>
                <div>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"}`}>02-30</p>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"}`}>11:30PM</p>
                </div>
                <button className="bg-white text-black btn btn-sm">Details</button>
              </div>
              {/*  */}


              {/*  */}
              <div className="p-2 border-[1px] border-gray-300 flex items-center mt-3 rounded-md justify-around" >
                <div className="bg-white rounded-full btn btn-sm "><IoLanguage   size={19}/>                </div>
                <div>
                  <h3 className={`text-xs flex gap-1 font-bold  ${theme === "light"? "text-black" :"text-white"} `}>Science Lab Report <IoTimerOutline /></h3>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"} `}>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={`flex ${theme === "light"? "text-black" :"text-white"} items-center text-sm gap-1`}>
                <BsCoin />
                  1 Coin
                </div>
                <div>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"}`}>02-30</p>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"}`}>11:30PM</p>
                </div>
                <button className="bg-white text-black btn btn-sm">Details</button>
              </div>
              {/*  */}



              {/*  */}
              <div className="p-2 border-[1px] border-gray-300 flex items-center mt-3 rounded-md justify-around" >
                <div className="bg-white rounded-full btn btn-sm "><MdPostAdd size={19}/>                </div>
                <div>
                  <h3 className={`text-xs flex gap-1 font-bold  ${theme === "light"? "text-black" :"text-white"} `}>Science Lab Report <IoTimerOutline /></h3>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"} `}>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={`flex ${theme === "light"? "text-black" :"text-white"} items-center text-sm gap-1`}>
                <BsCoin />
                  1 Coin
                </div>
                <div>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"}`}>02-30</p>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"}`}>11:30PM</p>
                </div>
                <button className="bg-white text-black btn btn-sm">Details</button>
              </div>
              {/*  */}




              {/*  */}
              <div className="p-2 border-[1px] border-gray-300 flex items-center mt-3 rounded-md justify-around" >
                <div className="bg-white rounded-full btn btn-sm "><IoLanguage  size={19}/>                </div>
                <div>
                  <h3 className={`text-xs flex gap-1 font-bold  ${theme === "light"? "text-black" :"text-white"} `}>Science Lab Report <IoTimerOutline /></h3>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"} `}>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={`flex ${theme === "light"? "text-black" :"text-white"} items-center text-sm gap-1`}>
                <BsCoin />
                  1 Coin
                </div>
                <div>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"}`}>02-30</p>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"}`}>11:30PM</p>
                </div>
                <button className="bg-white text-black btn btn-sm">Details</button>
              </div>
              {/*  */}




              {/*  */}
              <div className="p-2 border-[1px] border-gray-300 flex items-center mt-3 rounded-md justify-around" >
                <div className="bg-white rounded-full btn btn-sm "><MdOutlineScience size={19}/>                </div>
                <div>
                  <h3 className={`text-xs flex gap-1 font-bold  ${theme === "light"? "text-black" :"text-white"} `}>Science Lab Report <IoTimerOutline /></h3>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"} `}>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={`flex ${theme === "light"? "text-black" :"text-white"} items-center text-sm gap-1`}>
                <BsCoin />
                  1 Coin
                </div>
                <div>
                  <p className="text-xs text-red-400">02-30</p>
                  <p className="text-xs text-red-400">11:30PM</p>
                </div>
                <button className="bg-white text-black btn btn-sm">Details</button>
              </div>
              {/*  */}



              {/*  */}
              <div className="p-2 border-[1px] border-gray-300 flex items-center mt-3 rounded-md justify-around" >
                <div className="bg-white rounded-full btn btn-sm "><IoLanguage  size={19}/>                </div>
                <div>
                  <h3 className={`text-xs flex gap-1 font-bold  ${theme === "light"? "text-black" :"text-white"} `}>Science Lab Report <IoTimerOutline /></h3>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"} `}>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={`flex ${theme === "light"? "text-black" :"text-white"} items-center text-sm gap-1`}>
                <BsCoin />
                  1 Coin
                </div>
                <div>
                  <p className="text-xs text-green-400">02-30</p>
                  <p className="text-xs text-green-400">11:30PM</p>
                </div>
                <button className="bg-green-400 text-white btn btn-sm">Complete</button>
              </div>
              {/*  */}



              {/*  */}
              <div className="p-2 border-[1px] border-gray-300 flex items-center mt-3 rounded-md justify-around" >
                <div className="bg-white rounded-full btn btn-sm "><IoCalculatorSharp size={19}/>                </div>
                <div>
                  <h3 className={`text-xs flex gap-1 font-bold  ${theme === "light"? "text-black" :"text-white"} `}>Science Lab Report <IoTimerOutline /></h3>
                  <p className={`text-xs  ${theme === "light"? "text-black" :"text-white"} `}>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={`flex ${theme === "light"? "text-black" :"text-white"} items-center text-sm gap-1`}>
                <BsCoin />
                  1 Coin
                </div>
                <div>
                  <p className="text-xs text-green-400">02-30</p>
                  <p className="text-xs text-green-400">11:30PM</p>
                </div>
                <button className="bg-green-400 text-white btn btn-sm">Complete</button>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
{/*  */}



        <div className="col-span-4">
          <div className="bg-gray-800 p-4 rounded-xl   text-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
              <TbCoinPoundFilled  className="text-yellow-400" size={34}/>
              <h1 className="text-2xl font-semibold">Child progress</h1>
              </div>
              <select name="" className="bg-transparent text-sm text-gray-300" >
                <option >Weekly</option>
              </select>
            </div>
            {/*  */}
            <div className="mt-14">
              <div className="flex justify-between"><h1 className="text-2xl font-semibold">Task Completed</h1>
              <h1 className="text-3xl font-semibold">81%</h1></div>
              <div className="p-2 bg-white w-full rounded-xl mt-2"></div>
            </div>
          </div>

          <div className="py-3 px-10 bg-gradient-to-br shadow-md shadow-white from-gray-700 mt-4 rounded-xl via-black to-black">
            <p className="text-lg text-white font-semibold">Timer</p>
            <h1 className="text-7xl text-center font-bold text-white mt-9">{time}</h1>
          </div>

          <div className="relative h-[260px] mt-4 rounded-xl " style={backgroundStyle}>
            <div className="bg-black p-3 h-full bg-opacity-60">
            <div className="flex justify-between items-center text-white">  
              <div className="flex items-center gap-1"><TbCoinPoundFilled  className="text-yellow-400" size={34}/>    
              <h1 className="text-2xl font-bold ">24</h1>
               </div>  
               <p className="text-2xl ">Points history</p>
               </div>
               {/*  */}

               <div>
                <h1 className="text-xl text-center mt-5 text-white font-semibold">Challenge yourself with puzzles, <br /> races , and fun rewards!</h1>
                 <div className="flex justify-center mt-3">
                 <button className="btn bg-gradient-to-l from-blue-950 font-bold text-lg border-none via-blue-900 text-white to-blue-800">Play now</button> 
                 </div>
               </div>
{/*  */}
<button onClick={()=> setActiveShare(!activeShare)} className=" absolute top-40 -right-6 bg-blue-800 p-3 rounded-full text-white"><IoMdShare size={26}/></button>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
