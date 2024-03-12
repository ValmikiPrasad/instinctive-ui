import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LinearProgress from "@mui/material/LinearProgress";
import StarRateSharpIcon from "@mui/icons-material/StarRateSharp";

function App() {
  return (
    <>
      <div className="bg-sky-100 flex items-center justify-center gap-10 h-60 rounded-3xl border-2 border-slate-600  main">
        <div className="w-72 ml-1 border-1 rounded-3xl bg-white h-52 first">
          <StarRateSharpIcon className="text-lg  text-yellow-400 mt-3 p-1 rounded-full -mr-32 flex items-center justify-center star" />
          <div className="flex items-center justify-center -mt-2 lp">
          <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0gmUvqqeEZExJF1-5BJxdWfpO6hx6MInjkg&usqp=CAU"
                alt=""
                className="h-32 w-32 object-fill rounded-full -mb-2 -mt-5"
              />
          </div>
          <div className='line '>
          <LinearProgress
              variant="determinate"
              value={50}
              className="text-sky-500 rounded-full"
            />
          </div>
            
        </div>
        <div className="w-full border-1 rounded-3xl border-yellow-700 h-52 ">
          <MoreHorizIcon className="-mr-60 text-sky-500" />
          <div className=" flex-col mt-2">
            <div className="flex items-center justify-center w-32 text-orange-600 text-sm font-bold bg-white pt-3 pb-3 h-4 rounded-1xl after rounded-md ">
              After Effects
            </div>
            <div className="w-max mt-3 text-3xl text-blue-700 font-bold x ">
              <div>Animation in UI</div>
              <div className="-ml-2">Design (Part 2)</div>
            </div>
            <div className="mt-8 flex gap-8 text-xs text-sky-500">
              <div className="flex items-center justify-center gap-1 font-medium">
                <AccountCircleOutlinedIcon /> Vishal Pulikottil
              </div>
              <div className="flex items-center justify-center gap-1 font-medium">
                <AccessTimeIcon /> 15 minutes
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
