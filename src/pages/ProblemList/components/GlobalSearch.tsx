import { useEffect, useState } from "react";
import { Search } from "lucide-react";

interface GlobalSearchProps {
    onChange: (value: string) => void;
    debounce: number;
    initValue: string;
}

export default function GlobalSearch({ initValue, debounce, onChange }: GlobalSearchProps) {

    const [value, setValue] = useState<string>(initValue);

    useEffect(() => setValue(initValue), [initValue]);
    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => clearTimeout(timeout);

    }, [value, debounce, onChange]);

    return (
        <>
            <div className="flex border-2 border-dark-fill-2  rounded-xl items-center justify-start">
                <Search className="mx-3 h-7 w-7 stroke-white" />
                <input placeholder="Search" className="text-white rounded-xl  p-2 bg-transparent outline-none w-full duration-300" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
        </>
    )

} 