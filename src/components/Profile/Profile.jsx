/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import gsap from "gsap";

function Profile() {
  
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [tagisClicked, setTageIsClicked] = useState(false);

  function tagsClicked(){
    setTageIsClicked(!tagisClicked);
  }

  function tagClickedOnKeybaord(e) {
    if (e.key === "Enter") {
      setTageIsClicked(!tagisClicked);
    }
  }
  
  useEffect(() => {
    if (tagisClicked) {
      gsap.fromTo(
        ".inputField",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.inOut" }
      );
      gsap.to(".addBtn", {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(".inputField", {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        ".addBtn",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.inOut" }
      );
    }
  }, [tagisClicked]);
  


  return (
    <>
      <div className="bg-white rounded-sm flex justify-between items-center px-10 py-5  h-[88vh]">
        <div className="flex flex-col justify-center items-center">
          <div>
            <img
              className="h-60 w-60 rounded-full object-cover border-slate-500 border-2 mb-4 cursor-pointer hover:ring-4 hover:ring-slate-300/30 duration-300 transition ease-in-out"
              src="https://images.pexels.com/photos/5427090/pexels-photo-5427090.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </div>
          <div className="flex gap-3 justify-center items-center mb-4">
            <button className="border-2 px-5 py-2 font-semibold border-green-700 rounded-md bg-white text-green-700 cursor-pointer hover:scale-[102%] transition duration-200 active:scale-95 ease-in-out hover:bg-green-700 hover:text-white">
              Remove image
            </button>
            <button className="border-2 px-6 py-2 font-semibold border-green-700 rounded-md bg-white text-green-700 cursor-pointer hover:scale-[102%] transition duration-200 active:scale-95 ease-in-out hover:bg-green-700 hover:text-white">
              Update image
            </button>
          </div>
          <div className="w-full rounded-md bg-black px-4 py-2 flex flex-col justify-start items-start gap-2">
            <p className="text-white text-2xl font-bold font-['Segoe UI'] mb-2 text-left">
              Tags you follow
            </p>
            <div className="flex flex-col gap-3 text-md text-slate-300 pb-5">
              <div className="flex">
                <p className="text-red-600">#</p>csharp
              </div>
              <div className="flex">
                <p className="text-blue-600">#</p>dotnet
              </div>
              <div className="flex">
                <p className="text-green-600">#</p>programming
              </div>
              <div className="flex">
                <p className="text-purple-600">#</p>productivity
              </div>
            </div>
            <div className="w-full justify-end items-center">
              <div onClick={tagsClicked} className={`addBtn text-white font-semibold bg-green-700 hover:bg-green-800 hover:scale-[102%] active:scale-95 duration-300 ease-in-out cursor-pointer rounded-md text-md px-5 py-1 text-center ${tagisClicked ? `hidden` : `visible`}`}>
                add
              </div>
              <input onKeyDown={tagClickedOnKeybaord} type="text" placeholder="enter tag" className={`inputField text-slate-600 font-semibold bg-white cursor-text rounded-md text-md px-5 py-[6px] focus:border-none w-full ${tagisClicked ? `visible` : `hidden`}`} />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col justify-start items-start gap-1 w-full">
            <p className="text-green-700 text-base font-semibold">Name:</p>
            <div className="relative w-full">
              <input
                type="text"
                id="floating_outlined"
                className="block border-2 border-slate-800 px-2.5 pb-2.5 pt-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                value={name} // Binding value to state variable
                onChange={(e) => setName(e.target.value)} // Updating state on change
              />
              <label
                htmlFor="floating_outlined"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Enter Name
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-1 w-full">
            <p className="text-green-700 text-base font-semibold">
              Tell about yourself:
            </p>
            <div className="relative w-full">
              <input
                type="text"
                id="floating_outlined1"
                className="block border-2 border-slate-800 px-2.5 pb-2.5 pt-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                value={bio} // Binding value to state variable
                onChange={(e) => setBio(e.target.value)} // Updating state on change
              />
              <label
                htmlFor="floating_outlined1"
                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Enter Bio.
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <p className="text-green-700 text-base font-semibold">Socials:</p>
            <div className="flex justify-center w-full items-center gap-2">
              <button className="active:scale-95 rounded-sm border-2 border-green-700 text-green-700 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300 ease-in-out px-5 py-1 font-semibold">
                Linkedin
              </button>
              <button className="active:scale-95 rounded-sm border-2 border-green-700 text-green-700 bg-white hover:bg-slate-800 hover:text-white hover:border-slate-800 transition duration-300 ease-in-out px-5 py-1 font-semibold">
                Github
              </button>
              <button className="active:scale-95 rounded-sm border-2 border-green-700 text-green-700 bg-white hover:bg-blue-700 hover:text-white hover:border-blue-700 transition duration-300 ease-in-out px-5 py-1 font-semibold">
                Twitter
              </button>
            </div>
          </div>
          <button className="bg-green text-white text-center active:scale-95">
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
