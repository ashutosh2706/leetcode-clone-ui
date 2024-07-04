import { CircleCheckBig, ThumbsUp, ThumbsDown, Star, Target, CircleHelp } from "lucide-react"
import { Tooltip } from "antd"
import { useContext } from "react"
import { ProblemContext } from "../../../contexts/problemContext"
import ProblemInfo from "../../../types/problemInfo"
import { MathJax } from 'better-react-mathjax'



export default function Description() {

    const problemInfo: ProblemInfo = useContext(ProblemContext);

    return (
        <div className='flex px-2 py-4 h-[calc(100vh-105px)] overflow-y-auto'>
            <div className='px-5 w-full'>
                {/* Problem heading */}
                <div className='w-full'>
                    <div className='flex space-x-4'>
                        <div className='flex-1 mr-2 text-xl text-white font-medium'>{problemInfo.title}</div>
                    </div>
                    <div className='flex items-center mt-3'>
                        <div className={`text-olive bg-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}>
                            {problemInfo.difficulty}
                        </div>
                        <div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
                            {problemInfo.solved === undefined || problemInfo.solved === null ?
                                <Tooltip title="Unattempted">
                                    <CircleHelp className="w-5 h-5 stroke-gray-400" />
                                </Tooltip> : problemInfo.solved
                                    ?
                                    <Tooltip title="Solved">
                                        <CircleCheckBig className="w-5 h-5 stroke-green-400" />
                                    </Tooltip>
                                    :
                                    <Tooltip title="Attempted">
                                        <Target className="w-5 h-5 stroke-yellow-400" />
                                    </Tooltip>}
                        </div>
                        <Tooltip title="Like">
                            <div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6'>
                                <ThumbsUp className={`w-5 h-5 ${problemInfo.liked !== null && problemInfo.liked !== undefined && problemInfo.liked === true ? 'stroke-blue-500 fill-blue-500' : ''}`} />
                                <span className='text-xs'>{problemInfo.likeCount}</span>
                            </div>
                        </Tooltip>
                        <Tooltip title="Dislike">
                            <div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6'>
                                <ThumbsDown className={`w-5 h-5 ${problemInfo.liked !== null && problemInfo.liked !== undefined && problemInfo.liked === false ? 'stroke-blue-500 fill-blue-500' : ''}`} />
                                <span className='text-xs'>{problemInfo.dislikeCount}</span>
                            </div>
                        </Tooltip>
                        <Tooltip title="Favourite">
                            <div className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 '>
                                <Star className={`w-5 h-5 ${problemInfo.favourite ? 'stroke-yellow-500 fill-yellow-500' : ''}`} />
                            </div>
                        </Tooltip>
                    </div>

                    {/* Problem Statement(paragraphs) */}
                    <div className='text-white text-sm w-full'>
                        {problemInfo.description.map((para, index) => (
                            <p className='mt-3' key={index} dangerouslySetInnerHTML={{ __html: para }}>
                            </p>
                        ))}
                    </div>

                    {/* Examples */}
                    <div className='mt-4'>
                        {/* Example 1 */}
                        <div>
                            {problemInfo.examples.map((example, index) => (
                                <div key={index}>
                                    <p className='font-medium text-white '>Example {index + 1}: </p>
                                    <div className='example-card w-full'>
                                        <pre>
                                            <strong className='text-white'>Input: </strong>
                                            <span dangerouslySetInnerHTML={{ __html: example.input }}></span>
                                            <br />
                                            <strong>Output:</strong><span dangerouslySetInnerHTML={{ __html: example.output }}></span><br />
                                            {example.explanation && <span><strong>Explanation:</strong><span dangerouslySetInnerHTML={{ __html: example.explanation ?? '' }}></span></span>}
                                        </pre>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Constraints */}
                    <div className='my-5'>
                        <div className='text-white text-sm font-medium'>Constraints:</div>
                        <ul className='text-white ml-5 list-disc'>
                            {problemInfo.constraints.map((constraint, index) => (
                                <li className='mt-2' key={index}>
                                    <MathJax>
                                        <span className="text-sm" style={{
                                            fontWeight: '500',
                                            lineHeight: '1rem',
                                            padding: '0.125rem',
                                            color: 'rgba(239, 241, 246, 0.75)',
                                            borderRadius: '5px',
                                            backgroundColor: 'hsla(0, 0%, 100%, 0.07)',
                                            borderColor: 'rgba(247, 250, 255, 0.12)',
                                            borderWidth: '1px',
                                            fontFamily: 'sans-serif',}}>
                                            {constraint}
                                            </span>
                                    </MathJax>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}