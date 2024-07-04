export default function LoadingSkeleton() {
    return (
        <div className='flex items-center space-x-20 mt-4 px-6'>
            <div className='w-8 h-8 shrink-0 rounded-full bg-dark-layer-1'></div>
            <div className='h-7 sm:w-52  w-36 bg-dark-layer-1'></div>
            <div className='h-7 sm:w-52  w-36 bg-dark-layer-1'></div>
            <div className='h-7 sm:w-52 w-36 bg-dark-layer-1'></div>
            <div className='w-8 h-7 shrink-0 rounded-sm bg-dark-layer-1'></div>
            <span className='sr-only'>Loading...</span>
        </div>
    );
}