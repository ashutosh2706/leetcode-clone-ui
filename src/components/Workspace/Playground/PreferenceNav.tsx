import { Settings, Expand, ChevronDown } from "lucide-react"
import { Tooltip } from "antd"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import EditorPrefs from "../../../types/editorPrefs";
import EditorSettings from "../../Modals/EditorSettings";


interface PreferenceNavProps {
    editorPrefs: EditorPrefs;
    setEditorPrefs: Dispatch<SetStateAction<EditorPrefs>>;
}


const CODE_LANGUAGES = ['cpp', 'java', 'python', 'javascript'];

export default function PreferenceNav({ editorPrefs, setEditorPrefs }: PreferenceNavProps) {

    const [selectedLang, setSelectedLang] = useState(editorPrefs.language);
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [showEditorSettings, setShowEditorSettings] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleFullScreen = () => {
        isFullScreen ? document.exitFullscreen() : document.documentElement.requestFullscreen();
        setIsFullScreen(!isFullScreen);
    }

    const handleLanguageChange = (lang: string): void => {
        setSelectedLang(lang);
        setShowLanguageDropdown(!showLanguageDropdown);
    }

    // handle language change here
    useEffect(() => setEditorPrefs({ ...editorPrefs, language: selectedLang }), [selectedLang]);

    return (
        <>
            <div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full'>
                <div className='flex items-center text-white relative'>
                    <button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-base'
                        onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}>
                        <div className='flex items-center justify-center px-1'>
                            <div className='text-xs text-label-2 dark:text-dark-label-2'>{selectedLang === 'cpp' ? 'C++' : selectedLang === 'java' ? 'Java' : selectedLang === 'python' ? 'Python' : 'JavaScript'}</div>
                            <ChevronDown className="ms-1 h-4 w-4" />
                        </div>
                    </button>
                    {showLanguageDropdown && (
                        <div className="absolute z-10 bg-dark-layer-1 top-8">
                            {
                                CODE_LANGUAGES.map((language: string, index: number) => (
                                    <button key={index}
                                        className="w-full px-3 py-2 text-sm text-dark-label-2 hover:bg-dark-fill-2 rounded-sm"
                                        onClick={() => handleLanguageChange(language)}>
                                        {language === 'cpp' ? 'C++' : language === 'java' ? 'Java' : language === 'python' ? 'Python' : 'JavaScript'}
                                    </button>
                                ))
                            }
                        </div>
                    )}
                </div>

                <div className='flex items-center m-2 me-5 gap-5'>
                    <div className="h-5 w-5 text-dark-gray-7 font-bold text-lg cursor-pointer">
                        <Tooltip title="Settings" color={"gray"} placement="bottom" arrow={false}>
                            <Settings className="h-5 w-5" onClick={() => setShowEditorSettings(!showEditorSettings)} />
                        </Tooltip>
                    </div>
                    <div className="h-5 w-5 text-dark-gray-7 font-bold text-lg cursor-pointer">
                        <Tooltip title="Fullscreen" color={"gray"} placement="bottom" arrow={false}>
                            <Expand className="w-5 h-5" onClick={handleFullScreen}/>
                        </Tooltip>
                    </div>
                </div>
            </div>
            {showEditorSettings && <EditorSettings editorPrefs={editorPrefs} setEditorPrefs={setEditorPrefs} onClose={() => setShowEditorSettings(!showEditorSettings)} />}
        </>
    )
}