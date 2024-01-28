import { Entity } from "../../core/entitites/entity";
import { UniqueEntityId } from "../../core/entitites/unique-entity-id";

interface InstructorProps {
  name: string;
}
export class Instructor extends Entity<InstructorProps> {
  static create(props: InstructorProps, id?: UniqueEntityId){
    const student = new Instructor(props, id)

    return student
  }
}
