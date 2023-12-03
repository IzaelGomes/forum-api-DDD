import { Answer } from "../entities/answer"

interface AnswerQuestionUseCaseRequest {
    instructorId: string
    question: string
    content: string
}




export class AnswerQuestionUseCase {
    execute({content,instructorId, question}:AnswerQuestionUseCaseRequest) {
        const answer = new Answer(content)

        return answer
    }
}