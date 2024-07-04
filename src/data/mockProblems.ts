import { Problem } from "../types/problem";

export const mockProblems: Problem[] = [
	{
		pid: "two-sum",
		title: "1. Two Sum",
		difficulty: "Easy",
		category: "Array",
		order: 1,
		videoId: "",
		constraints: [
			`\\(2 \\leqslant nums.length \\leqslant 10^{4}\\)`,
			`\\(-10^{9} \\leqslant nums[i] \\leqslant 10^{9}\\)`,
			`\\(-10^{9} \\leqslant target \\leqslant 10^{9}\\)`,
			`Only one valid answer exists.`
		],
		description: [
			`Given an array of integers <code>nums</code> and an integer <code>target</code>, return&nbsp;
			<em>indices of the two numbers such that they add up to</em> <code>target</code>.`
			,
			`You may assume that each input would have <strong>exactly one solution</strong>, and you
			may not use the same element twice.`	
			,
			`You can return the answer in any order.`	
		],
		examples: [
			{	
				pid: 'two-sum',
				input: `nums = [2,7,11,15], target = 9`,
				output: `[0,1]`,
				explanation: `Because nums[0] + nums[1] == 9, we return [0, 1].`
			},
			{	
				pid: 'two-sum',
				input: `nums = [3,2,4], target = 6`,
				output: `[1,2]`,
				explanation: `Because nums[1] + nums[2] == 6, we return [1, 2].`
			},
			{	
				pid: 'two-sum',
				input: `nums = [3,3], target = 6`,
				output: `[0,1]`,
			}
		],
		likeCount: 120,
		dislikeCount: 2,
	},
	{
		pid: "reverse-linked-list",
		title: "Reverse Linked List",
		difficulty: "Hard",
		category: "Linked List",
		order: 2,
		videoId: "",
		constraints: [],
		description: [],
		examples: [
			{
				input: '',
				output: '',
				pid: 'reverse-linked-list',
				imgUrl: ''
			},
			{
				input: '',
				output: '',
				pid: 'reverse-linked-list',
				imgUrl: ''
			},
			{
				input: '',
				output: '',
				pid: 'reverse-linked-list',
				imgUrl: ''
			}
		],
		likeCount: 0,
		dislikeCount: 0,
	},
	{
		pid: "jump-game",
		title: "Jump Game",
		difficulty: "Medium",
		category: "Dynamic Programming",
		order: 3,
		videoId: "",
		constraints: [],
		description: [],
		examples: [],
		likeCount: 0,
		dislikeCount: 0,
	},
	{
		pid: "valid-parentheses",
		title: "Valid Parentheses",
		difficulty: "Easy",
		category: "Stack",
		order: 4,
		videoId: "",
		constraints: [],
		description: [],
		examples: [],
		likeCount: 0,
		dislikeCount: 0,
	},
	{
		pid: "search-a-2d-matrix",
		title: "Search a 2D Matrix",
		difficulty: "Medium",
		category: "Binary Search",
		order: 5,
		videoId: "ZfFl4torNg4",
		constraints: [],
		description: [],
		examples: [],
		likeCount: 0,
		dislikeCount: 0,
	},
	{
		pid: "container-with-most-water",
		title: "Container With Most Water",
		difficulty: "Medium",
		category: "Two Pointers",
		order: 6,
		videoId: "",
		constraints: [],
		description: [],
		examples: [],
		likeCount: 0,
		dislikeCount: 0,
	},
	{
		pid: "merge-intervals",
		title: "Merge Intervals",
		difficulty: "Medium",
		category: "intervals",
		order: 7,
		videoId: "",
		constraints: [],
		description: [],
		examples: [],
		likeCount: 0,
		dislikeCount: 0,
	},
	{
		pid: "maximum-depth-of-binary-tree",
		title: "Maximum Depth of Binary Tree",
		difficulty: "Easy",
		category: "Tree",
		order: 8,
		videoId: "",
		constraints: [],
		description: [],
		examples: [],
		likeCount: 0,
		dislikeCount: 0,
	},
	{
		pid: "best-time-to-buy-and-sell-stock",
		title: "Best Time to Buy and Sell Stock",
		difficulty: "Easy",
		category: "Array",
		order: 9,
		videoId: "",
		constraints: [],
		description: [],
		examples: [],
		likeCount: 0,
		dislikeCount: 0,
	},
	{
		pid: "subsets",
		title: "Subsets",
		difficulty: "Medium",
		category: "Backtracking",
		order: 10,
		videoId: "",
		constraints: [],
		description: [],
		examples: [],
		likeCount: 0,
		dislikeCount: 0,
	},
];