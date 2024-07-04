import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Problem } from "../../types/problem";
import { mockProblems } from "../../data/mockProblems";
import { Empty, Select, message } from "antd";
import Toolbar from "../../components/Common/Toolbar";
import { ChevronLeft, ChevronRight, CircleCheckBig, X, FileVideo } from "lucide-react";
import { useNavigate } from "react-router";
import YouTube from "react-youtube";
import { useState } from "react";
import GlobalSearch from "./components/GlobalSearch";
import LoadingSkeleton from "./components/LoadingSkeleton";


/**
 * 
 * @todo: Implement pagination, searching and sorting
 * @todo: sorting based on question difficulty
 */

export default function ProblemsTable() {

    const loadingProblems = false;
    const navigate = useNavigate();
    const columnHelper = createColumnHelper<Problem>();


    const [messageApi, contextHolder] = message.useMessage();
    const [isYoutubeOpen, setIsYoutubeOpen] = useState(false);
    const [videoId, setVideoId] = useState<string>();
    const solvedProblems = ["two-sum", "reverse-linked-list"];


    const defaultColumns = [

        columnHelper.accessor('pid', {
            cell: info => {
                const problemId = info.getValue();
                return (solvedProblems.includes(problemId) && <CircleCheckBig className="w-5 h-5 stroke-green-500" />)
            },
            header: "Status"
        }),
        columnHelper.accessor('title', {
            cell: info => {
                return (
                    <span className='hover:text-blue-600 cursor-pointer'>
                        {info.getValue()}
                    </span>
                )
            },
            header: "Title"
        }),
        columnHelper.accessor('difficulty', {
            cell: info => {
                if (info.getValue() === 'Easy') {
                    return (
                        <span className="text-green-500">Easy</span>
                    )
                } else if (info.getValue() === 'Medium') {
                    return (
                        <span className="text-yellow-500">Medium</span>
                    )
                } else {
                    return (
                        <span className="text-dark-pink">Hard</span>
                    )
                }
            },
            header: "Difficulty"
        }),
        columnHelper.accessor('category', {
            cell: info => info.getValue(),
            header: "Category"
        }),
        columnHelper.accessor('videoId', {
            cell: info => {
                return (
                    info.getValue() && <FileVideo className="cursor-pointer stroke-blue-500" />
                )
            },
            header: "Solution"
        })
    ]

    const table = useReactTable({
        data: mockProblems,
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel()
    })


    return (
        <>
            {contextHolder}
            <main className="bg-dark-layer-2 min-h-screen">
                <Toolbar />
                <h1 className='text-xl text-center text-white dark:text-gray-400 font-medium uppercase mt-10 mb-10'>All Problems</h1>
                <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
                    <div className="flex items-center justify-between mb-5 mx-auto w-7/12">
                        {/* Searching */}
                        <div className="text-base w-auto">
                            <GlobalSearch debounce={500} initValue={""} onChange={(value) => console.log(value)} />
                        </div>
                        {/* Pagination */}
                        <div className="flex items-center gap-2">
                            <button onClick={() => { table.previousPage() }} disabled={!table.getCanPreviousPage()} className="text-lg font-bold rounded-lg p-1 border border-gray-500 px-2 disabled:opacity-30 disabled:cursor-not-allowed">
                                <ChevronLeft className="w-7 h-7 stroke-white" />
                            </button>
                            <button onClick={() => { table.nextPage() }} disabled={!table.getCanNextPage()} className="text-lg font-bold rounded-lg p-1 border border-gray-500 px-2 disabled:opacity-30 disabled:cursor-not-allowed">
                                <ChevronRight className="w-7 h-7 stroke-white" />
                            </button>
                            <span className="items-center gap-1 hidden md:flex text-white">
                                <div>Page </div>
                                <div>{table.getState().pagination.pageIndex + 1} of {" "}{table.getPageCount()}</div>
                            </span>
                            <Select
                                defaultValue='10'
                                style={{ width: 110 }}
                                onChange={(value) => table.setPageSize(Number(value))}
                                options={[
                                    { value: '10', label: '10 / page' },
                                    { value: '20', label: '20 / page' },
                                    { value: '30', label: '30 / page' },
                                ]}
                            />
                        </div>
                    </div>
                    {loadingProblems ? (
                        <div className='max-w-[1200px] mx-auto sm:w-2/3 w-full animate-pulse mt-24'>
                            {[...Array(10)].map((_, idx) => (
                                <LoadingSkeleton key={idx} />
                            ))}
                        </div>
                    ) : (
                        <div>
                            <table className='text-sm text-left text-gray-500 dark:text-gray-400 md:w-7/12 max-w-[1200px] mx-auto'>
                                <thead className='text-base text-gray-400 uppercase border-b '>
                                    {table.getHeaderGroups().map((headerGroup) => (
                                        <tr key={headerGroup.id}>
                                            {
                                                headerGroup.headers.map(header => (
                                                    <th key={header.id} className={header.id === '1' ? "px-1 py-3 w-0 font-medium tracking-wide whitespace-nowrap" : "px-6 py-3 w-0 font-medium tracking-wide whitespace-nowrap"} colSpan={header.colSpan}>
                                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                                    </th>
                                                ))
                                            }
                                        </tr>
                                    ))}
                                </thead>
                                {table.getRowModel().rows.length ? (
                                    <tbody>
                                        {
                                            table.getRowModel().rows.map((row, index) => (
                                                <tr key={row.id} className={index % 2 == 1 ? "bg-dark-layer-1" : ""}>
                                                    {
                                                        row.getVisibleCells().map(cell => (
                                                            <td key={cell.id} className="px-6 py-4 whitespace-nowrap md:text-base text-sm text-white" onClick={() => {
                                                                if (cell.column.id === 'title') {
                                                                    // ensuring this code executes only when title is clicked
                                                                    const row = cell.row;
                                                                    const problemId = row.getAllCells().find(cell => cell.column.id === 'pid')?.getValue();
                                                                    navigate("/problem/" + problemId);
                                                                } else if (cell.column.id === 'videoId') {
                                                                    setVideoId(String(cell.getValue()));
                                                                    setIsYoutubeOpen(true);
                                                                }
                                                            }}>
                                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                            </td>
                                                        ))
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                ) : (<tr><td colSpan={5} className="p-5 text-center md:text-xl text-sm"><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="" imageStyle={{ height: 100 }} /></td></tr>)
                                }
                            </table>
                            {isYoutubeOpen && <div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center'>
                                <div className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute'></div>
                                <div className='w-full z-50 h-full px-6 relative max-w-4xl'>
                                    <div className='w-full h-full flex items-center justify-center relative'>
                                        <div className='w-full relative'>
                                            <X fontSize={"35"} className='cursor-pointer absolute -top-16 right-0 stroke-white w-8 h-8' onClick={() => setIsYoutubeOpen(!isYoutubeOpen)} />
                                            <YouTube videoId={videoId} loading='lazy' iframeClassName='w-full min-h-[500px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}