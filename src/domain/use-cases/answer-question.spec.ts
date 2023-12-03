import {expect, test} from "vitest"
import { Answer } from "../entities/answer"
import { AnswerQuestionUseCase } from "./answer-question-use-case"

test('create an answer', () => {
    const answerQuestion = new AnswerQuestionUseCase()

   const answer =  answerQuestion.execute({
        content:'teste',
        instructorId:'1', 
        question:'1'
    })

    expect(answer.content).toBe('teste')
})