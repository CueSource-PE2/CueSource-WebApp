/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function CreateQuest_page() {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
    };

    const handleAddTag = () => {
        if (selectedTags.length < 4 && selectedOption !== '') {
            setSelectedTags([...selectedTags, selectedOption]);
            setSelectedOption('');
        }
    };

    const handleConfirm = () => {
        console.log("Selected Tags:", selectedTags);
    };

    return (
        <>
            <div className='py-5 px-1 flex justify-center items-start rounded-md bg-[#111111] w-full h-full mb-3 cursor-pointer'>
            <div className='p-5 flex flex-col justify-start items-start rounded-md bg-slate-200 w-full h-full cursor-pointer'>
                <h2 className='text-green-700 font-medium text-base mb-5 border-b-2 border-green-700'>Enter your Bid Details:</h2>
                <div className='flex flex-col justify-start items-start gap-1 w-full mb-2'>
                    <p className='text-green-700 font-medium text-sm'>Bid Title:</p>
                    <input type="text" placeholder='Enter name.' className='w-full py-2 px-4 rounded-md border-2 border-slate-300 text-green-600 text-sm font-medium' />
                </div>
                <div className='flex flex-col justify-start items-start gap-1 w-full mb-2'>
                    <p className='text-green-700 font-medium text-sm'>Bid Description:</p>
                    <input type="text" placeholder='Enter description.' className='w-full h-[70px] px-4 rounded-md border-2 border-slate-300 text-green-600 text-sm font-medium' />
                </div>
                <div className='flex justify-between items-start w-full mb-2'>
                    <div className='flex flex-col justify-between items-start w-[40%] gap-1'>
                    <p className='text-green-700 font-medium text-sm'>Bid Price:</p>
                    <input type="text" placeholder='Enter Price for work.' className='w-full py-2 px-4 rounded-md border-2 border-slate-300 text-green-600 text-sm font-medium' />
                    </div>
                    <div className='flex flex-col justify-between items-start w-[40%] gap-1'>
                    <p className='text-green-700 font-medium text-sm'>Issue Link:</p>
                    <input type="text" placeholder='Enter Link to the issue' className='w-full py-2 px-4 rounded-md border-2 border-slate-300 text-green-600 text-sm font-medium' />
                    </div>
                </div>
                    <div className='flex flex-col justify-start items-start gap-1 w-full mb-8'>
                        <label htmlFor="tags" className='text-green-700 font-medium text-sm'>Choose tags (only 4)</label>
                        <div className='flex w-full justify-between items-center'>
                        <select name="tags" value={selectedOption} onChange={handleSelectChange} className='w-[40%] h-[35px]'>
                            <optgroup className='text-green-700' label="Frontend">
                                <option value="HTML">HTML</option>
                                <option value="CSS5">CSS5</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="React Js">React Js</option>
                                <option value="Next Js">Next Js</option>
                            </optgroup>
                            <optgroup label='Backend' className='text-blue-700'>
                                <option value="Node Js">Node Js</option>
                                <option value="Express Js">Express Js</option>
                                <option value="MongoDB">MongoDB</option>
                                <option value="SQL">SQL</option>
                            </optgroup>
                            <optgroup label='Languages' className='text-violet-700'>
                                <option value="Python">Python</option>
                                <option value="Java">Java</option>
                                <option value="C++">C++</option>
                                <option value="C#">C#</option>
                            </optgroup>
                            <optgroup label='Ai and Ml' className='text-yellow-700'>
                                <option value="Tensorflow">Tensorflow</option>
                                <option value="Keras">Keras</option>
                                <option value="Pytorch">Pytorch</option>
                                <option value="Scikit-learn">Scikit-learn</option>
                            </optgroup>
                        </select>
                        <div className='flex justify-start items-start gap-2 px-5 py-1 h-[35px] bg-white w-[40%] rounded-md'>
                        {selectedTags.map((tag, index) => (
                            <p key={index} className="text-green-700 font-medium text-sm">{tag} &nbsp;</p>
                        ))}
                    </div>
                        </div>
                        <div className='flex w-[40%] justify-start items-start gap-3'>
                        <button onClick={handleAddTag} className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded-md mt-2">Add Tag</button>
                        <button onClick={handleConfirm} className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded-md mt-2">Confirm</button>
                        </div>
                    </div>
                    <div className='w-full flex justify-end items-end'>
                    <button className='px-5 py-1 rounded-md text-white bg-green-700 hover:bg-green-800 active:scale-95 transition-all duration-300 ease-in-out font-semibold'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateQuest_page;
