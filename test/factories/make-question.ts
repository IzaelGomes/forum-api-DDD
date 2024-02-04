import { UniqueEntityId } from '@/core/entitites/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    content: 'teste',
    title: 'example-question',
    slug: Slug.create('example-question'),
    authorId: new UniqueEntityId('2'),
    ...override,
  })

  return question
}
