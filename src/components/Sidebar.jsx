import { AlignJustify, Plus, Info, History, Settings } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { Context } from '../redux/context';

const Sidebar = () => {
  const [MenuToggle, setMenuToggle] = useState(false);
  const {allPrompts} = useContext(Context);

  return (
    <div
      className={`bg-[#F0F4F9] min-h-screen p-5 flex flex-col gap-5 transition-all duration-300 ease-in-out ${
        MenuToggle ? 'w-16' : 'w-1/3'
      }`}
    >
      <div
        className="cursor-pointer hover:text-neutral-900 transition-all duration-100"
        onClick={() => setMenuToggle(!MenuToggle)}
      >
        <AlignJustify />
      </div>
      
      <div className="my-auto flex flex-col items-center">
        <button className="bg-slate-200 p-4 my-3 flex gap-2 rounded-md shadow-md">
          <Plus />
          {!MenuToggle && 'New Chat'}
        </button>
        
        <div className="text-pretty my-2">
          <h2 className="font-semibold my-1 text-2xl">{!MenuToggle && 'Recent'}</h2>
          {!MenuToggle && (
            allPrompts?.map((prompt,idx)=>(
              <p className="text-neutral-500 my-1 text-ellipsis" key={idx}>{prompt}</p>
            ))
          )}
        </div>
      </div>

      <div className="my-auto flex flex-col gap-4">
        <div className="flex gap-3 items-center my-1">
          <Info />
          {!MenuToggle && 'Help'}
        </div>
        <div className="flex gap-3 items-center my-1">
          <History />
          {!MenuToggle && 'Activity'}
        </div>
        <div className="flex gap-3 items-center my-1">
          <Settings />
          {!MenuToggle && 'Settings'}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
