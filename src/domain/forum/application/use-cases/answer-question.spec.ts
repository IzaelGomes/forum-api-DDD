import { InMemoryAnswerRepository } from '../../../../../test/repositories/in-memory-answer-repository'
import { AnswerQuestionUseCase } from './answer-question-use-case'

let inMemoryAnswerRepository: InMemoryAnswerRepository
let sut: AnswerQuestionUseCase
describe('Create Answer', () => {
  beforeEach(() => {
    inMemoryAnswerRepository = new InMemoryAnswerRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswerRepository)
  })

  afterEach(() => {
    inMemoryAnswerRepository.clean()
  })

  test('should be able to create an answer', async () => {
    const { answer } = await sut.execute({
      content: 'teste',
      instructorId: '1',
      questionId: '1',
    })

    expect(answer.content).toBe('teste')
    expect(inMemoryAnswerRepository.items[0].id).toEqual(answer.id)
  })
})
