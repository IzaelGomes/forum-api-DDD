import { Slug } from './value-objects/slug'
import { Entity } from '@/core/entitites/entity'
import { UniqueEntityId } from '@/core/entitites/unique-entity-id'
import { Optional } from '@/core/types/optional'
import dayjs from 'dayjs'

interface QuestionProps {
  bestAnswerId?: UniqueEntityId
  authorId: UniqueEntityId
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updateAt?: Date
}

export class Question extends Entity<QuestionProps> {
  get content() {
    return this.props.content
  }

  get bestAnswerId() {
    return this.props.bestAnswerId
  }

  get authorId() {
    return this.props.authorId
  }

  get title() {
    return this.props.title
  }

  get slug() {
    return this.props.slug
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updateAt() {
    return this.props.updateAt
  }

  get isNew(): boolean {
    return dayjs().diff(this.createdAt, 'days') <= 3
  }

  private touch() {
    this.props.updateAt = new Date()
  }

  set title(title: string) {
    this.props.title = title
    this.props.slug = Slug.createFromText(title)
    this.touch()
  }

  set content(title: string) {
    this.props.content = title
    this.touch()
  }

  set bestAnswerId(bestAnswerId: UniqueEntityId | undefined) {
    this.props.bestAnswerId = bestAnswerId
    this.touch()
  }

  static create(
    props: Optional<QuestionProps, 'createdAt' | 'slug'>,
    id?: UniqueEntityId,
  ) {
    const question = new Question(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(props.title),
        createdAt: new Date(),
      },
      id,
    )

    return question
  }
}
