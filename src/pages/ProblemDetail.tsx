import { useParams } from "react-router"
import Toolbar from "../components/Common/Toolbar";
import Workspace from "../components/Workspace";
import { ProblemContext } from "../contexts/problemContext";
import { mockProblems } from "../data/mockProblems";
import ProblemInfo from "../types/problemInfo";

export default function ProblemDetail() {

    const { problemId } = useParams();

    // fetch problem here
    // fetch logged in user info here
    // check if problem is liked and favourite
    // problem attempted

    const problemDetailsFromApi: ProblemInfo = {
        title: mockProblems[0].title,
        pid: problemId ?? '',
        description: mockProblems[0].description,
        difficulty: mockProblems[0].difficulty,
        examples: mockProblems[0].examples,
        constraints: mockProblems[0].constraints,
        likeCount: mockProblems[0].likeCount,
        dislikeCount: mockProblems[0].dislikeCount,
        liked: true,
        solved: true,
        favourite: true,
    };

    return (
        <>
            <div className="overflow-y-hidden h-screen">
                <Toolbar problemPage={true} />
                <ProblemContext.Provider value={problemDetailsFromApi}>
                    <Workspace />
                </ProblemContext.Provider>
            </div>
        </>
    )
}