import { CreateQuestionUseCase } from './create-question-use-case'
import { InMemoryQuestionRepository } from '../../../../../test/repositories/in-memory-question-repository'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionRepository)
  })

  afterEach(() => {
    inMemoryQuestionRepository.clean()
  })

  test('it should be able to create a question', async () => {
    const { question } = await sut.execute({
      content: 'teste',
      authorId: '1',
      title: 'qual o melhor curso?',
    })

    expect(question.id).toBeTruthy()
    expect(inMemoryQuestionRepository.items[0].id).toEqual(question.id)
  })
})
