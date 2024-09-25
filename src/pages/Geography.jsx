import { questionsQuizGeography } from "../mocks/questionMocks"
import { Quiz } from "../components/quiz_template/Quiz"
export const Geography = () => {
    return (
        <div>
             <Quiz questions={questionsQuizGeography}/>
        </div>
    )

}