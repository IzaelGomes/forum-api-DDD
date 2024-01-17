import { Entity } from "../../core/entitites/entity";
import { UniqueEntityId } from "../../core/entitites/unique-entity-id";

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
}
