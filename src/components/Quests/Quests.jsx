/* eslint-disable no-unused-vars */
import React from "react";
import CreateQuest from "../Card_Components/Create_Quest";

function Quests() {
  return (
    <div className="bg-[#111111] rounded-sm flex flex-col justify-between items-start px-10 py-5 h-[88vh]">
      <div className="w-full flex justify-between items-center mb-5">
        <p className="text-xl font-semibold text-white">Your Quests</p>
        <button className="rounded-md bg-white border-2 border-green-700 text-green-700 px-5 py-1 hover:bg-green-700 hover:text-white transition duration-300 ease-in-out hover:scale-[102%] active:scale-95">
          Create Quest
        </button>
      </div>
      {/* Insert the card component over here. */}
      <div className="h-full w-full overflow-y-scroll gap-3" style={{
        scrollbarWidth: 'none',
      }}>
      <CreateQuest />
      <CreateQuest />
      <CreateQuest />
      <CreateQuest />
      <CreateQuest />
      <CreateQuest />
      <CreateQuest />
      </div>
    </div>
  );
}

export default Quests;
