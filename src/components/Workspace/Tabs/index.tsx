import { useState } from "react"
import Description from "./Description";
import Editorial from "./Editorial";
import Submissions from "./Submissions";

export default function TabHeader() {


    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="bg-dark-layer-1">
            <div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden px-2'>
                <div className={`${activeTab === 1 ? 'bg-dark-layer-1' : 'bg-dark-layer-2'} hover:bg-dark-fill-3 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer`} onClick={() => setActiveTab(1)}>
                    Description
                </div>
                <div className={`${activeTab === 2 ? 'bg-dark-layer-1' : 'bg-dark-layer-2'} hover:bg-dark-fill-3 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer`} onClick={() => setActiveTab(2)}>
                    Editorial
                </div>
                <div className={`${activeTab === 3 ? 'bg-dark-layer-1' : 'bg-dark-layer-2'} hover:bg-dark-fill-3 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer`} onClick={() => setActiveTab(3)}>
                    Submissions
                </div>
            </div>
            {activeTab === 1 && <Description />}
            {activeTab === 2 && <Editorial />}
            {activeTab === 3 && <Submissions />}
        </div>
    )
}