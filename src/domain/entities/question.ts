import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entitites/entity";

interface QuestionProps {
  title: string;
  content: string;
  authorId: string;
  slug: Slug;
}

export class Question extends Entity<QuestionProps> {
 
}
