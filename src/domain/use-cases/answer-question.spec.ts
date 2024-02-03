import { AnswerQuestionUseCase } from './answer-question-use-case'
import { AnswersRepository } from '../repositories/answer-repository'
import { Answer } from '../entities/answer'

const fakeAnswerRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    console.log('fake')
  },
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    content: 'teste',
    instructorId: '1',
    questionId: '1',
  })

  expect(answer.content).toBe('teste')
})
