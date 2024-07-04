import Editorial from "./editorial";
import Example from "./example";

export interface Problem {
    id?: number;
    pid: string;
    title: string;
    description: string[];
    examples: Example[];
    editorial?: Editorial[];
    constraints: string[];
    difficulty: string;
    category: string;
    order?: number;
    likeCount: number;
    dislikeCount: number;
    videoId?: string;
}

// we have to store test cases separately with problemId
// many to many mapping.. one user can solve multiple problems and each problem can
// be solved by many users      junction table for userId <-> problemId
// category id and category Name in separate table
// verdict id and name in new table
// difficulty id and name in new table