import Split from "react-split";
import PreferenceNav from "./PreferenceNav";
import CodeMirror from "@uiw/react-codemirror"
import { vscodeDark } from "@uiw/codemirror-theme-vscode"
import { githubDark } from "@uiw/codemirror-theme-github"
import { sublime } from "@uiw/codemirror-theme-sublime"
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night"
import { javascript } from "@codemirror/lang-javascript"
import { cpp } from "@codemirror/lang-cpp"
import { java } from "@codemirror/lang-java"
import { python } from "@codemirror/lang-python"
import { ChevronUp, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import EditorPrefs from "../../../types/editorPrefs";

export default function CodePlayground() {

    /**
     * @constant
     */
    const EDITOR_PREFS = 'editor_prefs';
    /**/

    const boilerPlate = 
`class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
    
    }
};`
    const [splitSize, setSplitSize] = useState([60, 40]);   // default split size
    const [isCollapsed, setIsCollapsed] = useState(false);

    const defaultEditorPrefs: EditorPrefs = {
        fontSize: 14,
        language: 'C++',
        theme: 'vscodeDark',
    }

    const mapTheme: { [key: string]: typeof vscodeDark | typeof githubDark | typeof sublime | typeof tokyoNight } = {
        vscodeDark,
        githubDark,
        sublime,
        tokyoNight
    }

    

    const [editorPrefs, setEditorPrefs] = useState<EditorPrefs>(() => {
        const storedEditorPrefs = localStorage.getItem(EDITOR_PREFS);
        return storedEditorPrefs ? JSON.parse(storedEditorPrefs) : defaultEditorPrefs;
    });


    useEffect(() => {
        localStorage.setItem(EDITOR_PREFS, JSON.stringify(editorPrefs));
    }, [editorPrefs]);

    const handleCollapse = () => {
        isCollapsed ? setSplitSize([60,40]) : setSplitSize([100, 0]);
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden">
            <PreferenceNav editorPrefs={editorPrefs} setEditorPrefs={setEditorPrefs}/>
            <Split className="h-[calc(100vh-104px)]" direction="vertical" sizes={splitSize} minSize={60} onDragEnd={newSize => setSplitSize(newSize)}>
                {/* Code Editor */}
                <div className="w-full overflow-auto">
                    <CodeMirror
                        value={boilerPlate}
                        theme={mapTheme[editorPrefs.theme]}
                        extensions={[cpp(), java(), python(), javascript()]}
                        style={{ fontSize: editorPrefs.fontSize }}
                    />
                </div>
                {/* Test Cases */}
                <div className="w-full px-1 overflow-auto overflow-x-hidden flex flex-col relative">
                    <div className="text-white w-full px-5 overflow-auto">
                        <div className="flex h-10 items-center space-x-6">
                            <div className="relative flex h-full flex-col justify-center cursor-pointer">
                                <div className="text-base font-medium leading-5 text-white">TestCases</div>
                                <hr className="absolute bottom-0 h-0.5 w-full rounded-full bg-white border-none" />
                            </div>
                        </div>

                        <div className="flex">
                            {/* Case 1 */}
                            <div className="mr-3 items-start mt-2 text-white">
                                <div className="flex flex-wrap gap-y-4 items-center">
                                    <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">
                                        Case 1
                                    </div>
                                </div>
                            </div>

                            {/* Case 2 */}
                            <div className="mr-3 items-start mt-2 text-white">
                                <div className="flex flex-wrap gap-y-4 items-center">
                                    <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">
                                        Case 2
                                    </div>
                                </div>
                            </div>

                            {/* Case 3 */}
                            <div className="mr-3 items-start mt-2 text-white">
                                <div className="flex flex-wrap gap-y-4 items-center">
                                    <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">
                                        Case 3
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="font-semibold my-4">
                            <p className="font-medium text-sm mt-4 text-white">nums</p>
                            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2" contentEditable={false}>
                                [2,7,11,15]
                            </div>
                        </div>
                        <div className="font-semibold my-4">
                            <p className="font-medium text-sm mt-4 text-white">target</p>
                            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2" contentEditable={false}>
                                9
                            </div>
                        </div>
                    </div>
                </div>
            </Split>
            <div className="absolute bottom-[60px] w-full bg-dark-layer-1">
                <div className='my-[10px] flex justify-between w-full px-5'>
                    <div className='mr-2 flex flex-1 flex-nowrap items-center space-x-4 '>
                        <button className='px-3 py-1.5 font-medium items-center transition-all inline-flex bg-dark-fill-3 text-sm hover:bg-dark-fill-2 text-dark-label-2 rounded-lg pl-3 pr-2' onClick={handleCollapse}>
                            Console
                            <div className='ml-1 transform transition flex items-center'>
                                {isCollapsed ? (<ChevronUp />) : (<ChevronDown />)}
                            </div>
                        </button>
                    </div>
                    <div className='ml-auto flex items-center space-x-4'>
                        <button
                            className='px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-dark-fill-3  hover:bg-dark-fill-2 text-dark-label-2 rounded-lg'
                            onClick={() => alert('run')}>
                            Run
                        </button>
                        <button
                            className='px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-dark-green-s hover:bg-green-3 rounded-lg'
                            onClick={() => alert('submit')}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}