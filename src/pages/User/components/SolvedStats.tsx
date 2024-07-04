import ProgressBar from '@ramonak/react-progress-bar'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';


export default function SolvedStats() {

    const solvedStats = {
        easy: [50, 150],
        medium: [350, 500],
        hard: [23, 100],
        solved: 300,
        total: 700,
    };

    return (
        <div className="bg-dark-layer-1 rounded-lg py-4 px-6 mb-4">
            <h2 className="text-base mb-4 text-dark-label-2">Solved Problems</h2>
            <div className='flex flex-row py-1'>
                <div className='w-2/5 flex items-center justify-center'>
                    <div style={{ width: 150, height: 150 }}>
                        <CircularProgressbarWithChildren value={solvedStats.solved} maxValue={solvedStats.total}
                            strokeWidth={4} styles={{
                                path: {
                                    stroke: '#EAB308',
                                },
                                trail: {
                                    stroke: '#383838',
                                }
                            }}>
                            <div className='text-3xl text-dark-label-2'>{solvedStats.solved}</div>
                            <div className='text-dark-label-2'>Solved</div>
                        </CircularProgressbarWithChildren>
                    </div>
                </div>
                <div className='w-full mx-4'>
                    <div className='flex flex-row justify-between mb-1'>
                        <span className='text-sm text-dark-label-2'>Easy</span>
                        <div>
                            <span className='text-lg text-dark-label-2 font-medium'>{solvedStats.easy[0]}</span>
                            <span className='text-dark-gray-6 ps-1'>/{solvedStats.easy[1]}</span>
                        </div>
                        <div className='text-base text-dark-gray-6'>
                            <span className='text-sm font-medium'>Beats&nbsp;{`97.32%`}</span>
                        </div>
                    </div>
                    <ProgressBar completed={solvedStats.easy[0]} maxCompleted={solvedStats.easy[1]}
                        bgColor='#00B8A3' baseBgColor='#383838' borderRadius="12px" height='10px'
                        isLabelVisible={false} className='mb-4' animateOnRender={true} />
                    <div className='flex flex-row justify-between mb-1'>
                        <span className='text-sm text-dark-label-2'>Medium</span>
                        <div>
                            <span className='text-lg text-dark-label-2 font-medium'>{solvedStats.medium[0]}</span>
                            <span className='text-dark-gray-6 ps-1'>/{solvedStats.medium[1]}</span>
                        </div>
                        <div className='text-base text-dark-gray-6'>
                            <span className='text-sm font-medium'>Beats&nbsp;{`88.20%`}</span>
                        </div>
                    </div>
                    <ProgressBar completed={solvedStats.medium[0]} maxCompleted={solvedStats.medium[1]}
                        bgColor='#EAB308' baseBgColor='#383838' borderRadius="12px" height='10px'
                        isLabelVisible={false} className='mb-4' animateOnRender={true} />
                    <div className='flex flex-row justify-between mb-1'>
                        <span className='text-sm text-dark-label-2'>Hard</span>
                        <div>
                            <span className='text-lg text-dark-label-2 font-medium'>{solvedStats.hard[0]}</span>
                            <span className='text-dark-gray-6 ps-1'>/{solvedStats.hard[1]}</span>
                        </div>
                        <div className='text-base text-dark-gray-6'>
                            <span className='text-sm font-medium'>Beats&nbsp;{`93.21%`}</span>
                        </div>
                    </div>
                    <ProgressBar completed={solvedStats.hard[0]} maxCompleted={solvedStats.hard[1]}
                        bgColor='#FF375F' baseBgColor='#383838' borderRadius="12px" height='10px'
                        isLabelVisible={false} animateOnRender={true} />
                </div>
            </div>
        </div>
    )
}