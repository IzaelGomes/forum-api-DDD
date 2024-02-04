import { CreateQuestionUseCase } from './create-question-use-case'
import { InMemoryQuestionRepository } from '../../../../../test/repositories/in-memory-question-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { Question } from '../../enterprise/entities/question'
import { Slug } from '../../enterprise/entities/value-objects/slug'
import { UniqueEntityId } from '@/core/entitites/unique-entity-id'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question by slug', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionRepository)
  })

  afterEach(() => {
    inMemoryQuestionRepository.clean()
  })

  test('it should be able to get a question by it slug', async () => {
    const newQuestion = Question.create({
      content: 'teste',
      title: 'example-question',
      slug: Slug.create('example-question'),
      authorId: new UniqueEntityId('2'),
    })

    await inMemoryQuestionRepository.create(newQuestion)

    const { question } = await sut.execute({
      slug: 'example-question',
    })
    expect(question.id).toBeTruthy()
  })
})
