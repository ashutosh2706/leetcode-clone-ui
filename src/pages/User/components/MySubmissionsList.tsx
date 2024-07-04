import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { mockMySubmissions } from "../../../data/mockMySubmissions";
import { Empty, Select, message } from "antd";
import MySubmission from "../../../types/mySubmission";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function MySubmissionsList() {

    const columnHelper = createColumnHelper<MySubmission>();
    const [messageApi, contextHolder] = message.useMessage();
    const [isLoadingSubmissions, setIsLoadingSubmissions] = useState<boolean>(false);

    const defaultColumns = [
        columnHelper.accessor('pid', {
            cell: info => info.getValue()
        }),
        columnHelper.accessor('title', {
            cell: info => info.getValue()
        })
    ]

    const table = useReactTable({
        data: mockMySubmissions,
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <>
            {contextHolder}
            <div className="bg-dark-layer-1 shadow-lg rounded-lg p-6">
                <h2 className="text-base mb-4 text-dark-label-2">My Submissions</h2>
                <div className="grid grid-cols-52 gap-1">
                    {isLoadingSubmissions ? (
                        <div className='w-full animate-pulse'>
                            {[...Array(5)].map((_, idx) => (
                                <div className='flex items-center space-x-20 mt-4' key={idx}>
                                    <div className='h-11 w-full rounded-md bg-dark-fill-3'></div>
                                    <span className='sr-only'>Loading...</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <table className='text-left w-full mx-auto'>
                                {/* <thead className='text-base text-gray-400 uppercase border-b '>
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
                                </thead> */}
                                {table.getRowModel().rows.length ? (
                                    <tbody>
                                        {
                                            table.getRowModel().rows.map((row, index) => (
                                                <tr key={row.id} className={`cursor-pointer border border-dark-layer-2 ${index % 2 === 1 ? "" : "bg-dark-fill-3"}`}>
                                                    {
                                                        row.getVisibleCells().map(cell => (
                                                            <td key={cell.id} className="ps-0.5 py-4 md:text-base text-sm text-white" onClick={() => {
                                                                if (cell.column.id === 'title') {
                                                                    const row = cell.row;
                                                                    const problemId = row.getAllCells().find(cell => cell.column.id === 'pid')?.getValue();
                                                                    alert(problemId);
                                                                }
                                                            }}>
                                                                {cell.column.id === 'title' && flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                            </td>
                                                        ))
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                ) : (<tr><td colSpan={5} className="p-5 text-center md:text-xl text-sm"><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No Data" imageStyle={{ height: 100 }} /></td></tr>)
                                }
                            </table>
                            <div className="flex items-center justify-end gap-2 mx-auto mt-5">
                                <button onClick={() => { table.previousPage() }} disabled={!table.getCanPreviousPage()} className="text-lg font-bold rounded-lg p-1 border border-gray-500 px-2 disabled:opacity-30 disabled:cursor-not-allowed">
                                    <ChevronLeft className="w-7 h-7 stroke-white" />
                                </button>
                                <button onClick={() => { table.nextPage() }} disabled={!table.getCanNextPage()} className="text-lg font-bold rounded-lg p-1 border border-gray-500 px-2 disabled:opacity-30 disabled:cursor-not-allowed">
                                    <ChevronRight className="w-7 h-7 stroke-white" />
                                </button>
                                <span className="items-center gap-1 hidden md:flex text-white">
                                    <div>Page </div>
                                    <div>{table.getState().pagination.pageIndex + 1} / {" "}{table.getPageCount()}</div>
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>

    )
}