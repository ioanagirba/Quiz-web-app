import { Quiz } from "../components/quiz_template/Quiz"
import {  questionsQuizMath } from "../mocks/questionMocks"

export const Math = () => {
    return(
     <div>
        <Quiz questions={questionsQuizMath}/>

    </div>
    )
}