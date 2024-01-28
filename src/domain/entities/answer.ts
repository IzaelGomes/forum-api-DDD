import { Entity } from "../../core/entitites/entity";
import { UniqueEntityId } from "../../core/entitites/unique-entity-id";
import { Optional } from "../../core/types/optional";

interface AnswerProps {
  authorId: UniqueEntityId;
  questionId: UniqueEntityId;
  content: string;
  createdAt: Date;
  updateAt?: Date;
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content;
  }

  get questionId() {
    return this.props.questionId;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updateAt() {
    return this.props.updateAt;
  }

  private touch() {
    this.props.updateAt = new Date();
  }

  get excerpt() {
    return this.content.substring(0, 120).trimEnd().concat("...");
  }

  set content(content: string) {
    this.props.content = content;
    this.touch();
  }

  static create(
    props: Optional<AnswerProps, "createdAt">,
    id?: UniqueEntityId
  ) {
    const question = new Answer(
      {
        ...props,
        createdAt: new Date(),
      },
      id
    );

    return question;
  }
}
