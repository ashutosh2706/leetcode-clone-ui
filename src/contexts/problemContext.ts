import { createContext } from "react";
import ProblemInfo from "../types/problemInfo";



export const ProblemContext = createContext<ProblemInfo>({
    pid: "pid",
    title: "title",
    description: [],
    likeCount: 0,
    dislikeCount: 0,
    examples: [],
    difficulty: "difficulty",
    constraints: [],
    favourite: false,
});