import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entitites/entity";
import { UniqueEntityId } from "../../core/entitites/unique-entity-id";

interface QuestionProps {
  bestAnswerId?: UniqueEntityId
  authorId: UniqueEntityId;
  title: string;
  content: string;
  slug: Slug;
  createdAt: Date;
  updateAt?: Date;
}

export class Question extends Entity<QuestionProps> {
 
}
