import Example from "./example";

export default interface ProblemInfo {
    title: string;
    pid: string;
    description: string[];
    likeCount: number;
    dislikeCount: number;
    examples: Example[];
    difficulty: string;
    constraints: string[];
    liked?: boolean;
    solved?: boolean;
    favourite: boolean;
}