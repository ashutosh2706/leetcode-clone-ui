import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import EditorPrefs from "../../types/editorPrefs";

const EDITOR_FONT_SIZES = ["12", "14", "16", "18", "20"];
const EDITOR_THEMES = ['vscodeDark', 'githubDark', 'sublime', 'tokyoNight'];

interface EditorSettingsProps {
    editorPrefs: EditorPrefs;
    setEditorPrefs: Dispatch<SetStateAction<EditorPrefs>>;
    onClose: () => void;
}

interface EditorSettingsDropDownProps {
    value: string;
    currentSelection: string;
    onChangeCallback: (newSelection: string) => void;
}

export default function EditorSettings({ editorPrefs, setEditorPrefs, onClose }: EditorSettingsProps) {

    const [fontDropdownOpen, setFontDropdownOpen] = useState(false);
    const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
    const [fontSize, setFontSize] = useState(editorPrefs.fontSize);
    const [theme, setTheme] = useState(editorPrefs.theme);

    useEffect(() => setEditorPrefs({...editorPrefs, fontSize, theme}), [theme, fontSize]);

    return (
        <>
            <div className='text-white z-40'>
                <div aria-modal='true' role='dialog' className='fixed inset-0 overflow-y-auto z-modal'>
                    <div className='flex min-h-screen items-center justify-center px-4'>
                        {/* overlay */}
                        <div
                            className='opacity-100'
                            onClick={onClose}   // close the dialog when clicked outside
                        >
                            <div className='fixed inset-0 bg-gray-8 opacity-60'></div>
                        </div>

                        <div className='my-8 inline-block min-w-full transform rounded-[13px] text-left transition-all bg-overlay-3 md:min-w-[420px] shadow-level4 shadow-lg p-0 bg-[rgb(40,40,40)] w-[600px] !overflow-visible opacity-100 scale-100'>
                            {/* settings header */}
                            <div className='flex items-center border-b px-5 py-4 text-base font-medium border-dark-divider-border-2'>
                                Editor Settings
                                <button
                                    className='ml-auto cursor-pointer rounded transition-all'
                                    onClick={onClose}
                                >
                                    <X />
                                </button>
                            </div>

                            <div className='px-6 pt-4 pb-6'>
                                <div className='mt-6 flex justify-between first:mt-0'>
                                    <div className='w-[340px]'>
                                        <h3 className=' text-base font-medium'>Font size</h3>
                                        <h3 className='text-label-3 text-sm  mt-1.5'>
                                            Choose your preferred font size.
                                        </h3>
                                    </div>
                                    <div className='w-[170px]'>
                                        <div className='relative'>
                                            <button
                                                onClick={() => {
                                                    setFontDropdownOpen(!fontDropdownOpen)
                                                    setThemeDropdownOpen(false);
                                                }}
                                                className='flex cursor-pointer items-center rounded px-3 py-1.5 text-left focus:outline-none whitespace-nowrap bg bg-dark-fill-3 hover:bg-dark-fill-2 active:bg-dark-fill-3 w-full justify-between'
                                                type='button'
                                            >
                                                {editorPrefs.fontSize}
                                                <ChevronDown />
                                            </button>
                                            {/* Show dropdown for fontsizes */}
                                            {fontDropdownOpen && (
                                                <ul
                                                    className='absolute mt-1 max-h-56 overflow-auto rounded-lg p-2 z-50 focus:outline-none shadow-lg   w-full bg-dark-layer-1'
                                                    style={{
                                                        filter: "drop-shadow(rgba(0, 0, 0, 0.04) 0px 1px 3px) drop-shadow(rgba(0, 0, 0, 0.12) 0px 6px 16px)",
                                                    }}
                                                >
                                                    {EDITOR_FONT_SIZES.map((fontSize, idx) => (
                                                        <EditorSettingsDropDown
                                                            key={idx}
                                                            value={fontSize}
                                                            currentSelection={String(editorPrefs.fontSize)}
                                                            onChangeCallback={(newFontSize: string) => {
                                                                setFontSize(Number(newFontSize));
                                                            }}
                                                        />
                                                    ))}
                                                </ul>
                                            )}

                                        </div>
                                    </div>
                                </div>
                                {/* add more settings here */}
                                <div className='mt-6 flex justify-between first:mt-0'>
                                    <div className='w-[340px]'>
                                        <h3 className=' text-base font-medium'>Theme</h3>
                                        <h3 className='text-label-3 text-sm  mt-1.5'>
                                            Choose your editor theme.
                                        </h3>
                                    </div>
                                    <div className='w-[170px]'>
                                        <div className='relative'>
                                            <button
                                                onClick={() => {
                                                    setThemeDropdownOpen(!themeDropdownOpen)
                                                    setFontDropdownOpen(false);
                                                }}
                                                className='flex cursor-pointer items-center rounded px-3 py-1.5 text-left focus:outline-none whitespace-nowrap bg bg-dark-fill-3 hover:bg-dark-fill-2 active:bg-dark-fill-3 w-full justify-between'
                                                type='button'
                                            >
                                                {editorPrefs.theme}
                                                <ChevronDown />
                                            </button>
                                            {/* Show dropdown for theme */}
                                            {themeDropdownOpen && (
                                                <ul
                                                    className='absolute mt-1 max-h-56 overflow-auto rounded-lg p-2 z-50 focus:outline-none shadow-lg   w-full bg-dark-layer-1'
                                                    style={{
                                                        filter: "drop-shadow(rgba(0, 0, 0, 0.04) 0px 1px 3px) drop-shadow(rgba(0, 0, 0, 0.12) 0px 6px 16px)",
                                                    }}
                                                >
                                                    {EDITOR_THEMES.map((theme, idx) => (
                                                        <EditorSettingsDropDown
                                                            key={idx}
                                                            value={theme}
                                                            currentSelection={String(editorPrefs.theme)}
                                                            onChangeCallback={(newTheme: string) => {
                                                                setTheme(newTheme);
                                                            }}
                                                        />
                                                    ))}
                                                </ul>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


function EditorSettingsDropDown({ value, currentSelection, onChangeCallback }: EditorSettingsDropDownProps) {

    return (
        <li className='relative flex h-8 cursor-pointer select-none py-1.5 pl-2 text-label-2 dark:text-dark-label-2 hover:bg-dark-fill-3 rounded-lg'>
            <div
                className={`flex h-5 flex-1 items-center pr-2 ${currentSelection === value ? "font-medium" : ""}`}
                onClick={() => onChangeCallback(value)}>
                <div className='whitespace-nowrap text-sm'>{value}</div>
            </div>
            <span className={`text-blue dark:text-dark-blue flex items-center pr-2 ${currentSelection === value ? "visible" : "invisible"}`}>
                <Check className="w-5 h-5" />
            </span>
        </li>
    )
}