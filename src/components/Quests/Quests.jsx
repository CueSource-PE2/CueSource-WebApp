/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CreateQuest from "../Card_Components/Create_Quest";
import Quest_Details from "./Quest_Details";
import CreateQuest_page from "./CreateQuest_page";

function Quests() {
    const [isClicked, setIsClicked] = useState(false);
    const [isDetailsViewed, setIsDetailsViewed] = useState(false);

    function clickedQuest() {
        setIsClicked(!isClicked);
        setIsDetailsViewed(false); // Reset the details view state
    }

    function viewQuestDetails() {
        setIsDetailsViewed(true);
    }

    function closeQuestDetails() {
        setIsDetailsViewed(false);
    }

    return (
        <div className="bg-[#111111] rounded-sm flex flex-col justify-between items-start px-10 py-5 h-[88vh]">
            <div className="w-full flex justify-between items-center mb-5">
                <p className="text-xl font-semibold text-white">{isClicked ? 'Create your Quest' : 'Your Quests'}</p>
                <button onClick={clickedQuest} className="rounded-md bg-white border-2 border-green-700 text-green-700 px-5 py-1 hover:bg-green-700 hover:text-white transition duration-300 ease-in-out hover:scale-[102%] active:scale-95">
                    {isClicked ? `Back` : `Create Quest`}
                </button>
            </div>
            <div className={`h-full w-full overflow-y-scroll gap-3`} style={{ scrollbarWidth: 'none' }}>
                {isDetailsViewed ? <Quest_Details onClose={closeQuestDetails} /> : null}
                {isClicked ? null : <CreateQuest viewQuestDetails={viewQuestDetails} />}
                {isClicked ? <CreateQuest_page /> : null}
            </div>
        </div>
    );
}

export default Quests;
