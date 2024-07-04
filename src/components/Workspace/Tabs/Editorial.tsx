import CodeMirror from "@uiw/react-codemirror"
import { cpp } from "@codemirror/lang-cpp"
import { Copy, Check } from "lucide-react"
import { githubDark } from "@uiw/codemirror-theme-github"
import { Tooltip } from "antd"
import { useState } from "react"

export default function Editorial() {

    const code =
        `class Solution {
    public:
        vector<int> twoSum(vector<int> &nums, int target) {
            unordered_map<int, int> hash;
            for (int i = 0; i < nums.size(); i++) {
                hash[nums[i]] = i;
            }
            for (int i = 0; i < nums.size(); i++) {
                int complement = target - nums[i];
                if (hash.find(complement) != hash.end() && hash[complement] != i) {
                    return {i, hash[complement]};
                }
            }
            return {};
        }
};`

    const [codeCopied, setCodeCopied] = useState(false);

    const handleCodeCopy = () => {
        navigator.clipboard.writeText(code);
        setCodeCopied(true);
        setTimeout(() => setCodeCopied(false), 2000);
    }

    return (
        <div className="flex px-2 py-4 h-full w-full overflow-y-auto">
            <div className="px-5 h-[calc(100vh-105px)] overflow-auto max-w-4xl min-w-[400px]">
                <div className="w-full">
                    <div className="flex space-x-4">
                        <div className='flex-1 mr-2 text-xl text-white font-medium'>Editorial</div>
                    </div>
                </div>
                {/* Approach title */}
                <div className="w-full mt-5">
                    <span className="text-white text-lg">1.&nbsp;Two pass hash table</span>
                </div>
                <div className='text-white mt-5 w-full'>
                    {/* explanation */}
                    <p className='mt-3 text-sm'>
                        A simple implementation uses two iterations. In the first iteration, we add each element's value as a key and its index as a value to the hash table. Then, in the second iteration, we check if each element's complement <code>(target - nums[i])</code> exists in the hash table. If it does exist, we return current element's index and its complement's index. Beware that the complement must not be <code>nums[i]</code> itself!
                    </p>
                    <div className="flex items-center justify-between mt-10">
                        <div className='flex-1 mr-2 text-lg text-white font-base'>Implementation:</div>
                        <Tooltip title={codeCopied ? "Copied" : "Copy"} color={"gray"} placement="top" arrow={false}>
                            {codeCopied ?
                                <Check className="stroke-dark-label-2 w-5 h-5 hover:cursor-auto" />
                                :
                                <Copy className="stroke-dark-label-2 w-5 h-5 hover:cursor-pointer" onClick={handleCodeCopy} />
                            }
                        </Tooltip>
                    </div>
                    {/* code */}
                    <div className="border border-gray-500 p-0.5 rounded-lg my-5">
                        <CodeMirror
                            value={code}
                            theme={githubDark}
                            extensions={[cpp()]}
                            style={{ fontSize: 14 }}
                            editable={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}