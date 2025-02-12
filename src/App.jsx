import Navbar from "./Shared/Navbar";
import { BsCoin } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

 

function App() {
  return (
    <div>
    <Navbar/>
    <div  className="container mx-auto bg-black py-10">
      <div className="lg:px-16 md:grid md:gap-3 grid-cols-9">
        <div className="col-span-5">
          <div className="p-3 text-white bg-gray-800 rounded-xl ">
            <div className="flex justify-between">
              <h4>Your task</h4>
              <div>Filter | All tasks</div>
            </div>
            <div>
              {/*  */}
              <div className="p-2 border-[1px] border-gray-300 flex items-center mt-3 rounded-md justify-around" >
                <div className="bg-white rounded-full btn btn-sm "><MdOutlineScience size={19}/>                </div>
                <div>
                  <h3 className="text-xs font-bold">Science Lab Report </h3>
                  <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="flex items-center gap-1">
                <BsCoin />
                  1 Coin
                </div>
                <div>
                  <p className="text-xs text-gray-400">02-30</p>
                  <p className="text-xs text-gray-400">11:30PM</p>
                </div>
                <button className="bg-white text-black btn btn-sm">Details</button>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        <div className="col-span-4"></div>
      </div>
    </div>
    </div>
  );
}

export default App;
