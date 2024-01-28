import { randomUUID } from "node:crypto";
import { UniqueEntityId } from "./unique-entity-id";

export class Entity<TProps> {
  private _id: UniqueEntityId;

  protected props: TProps;

  get id() {
    return this._id;
  }

  constructor(props: TProps, id?: UniqueEntityId) {
    this.props = props;
    this._id = id ?? new UniqueEntityId();
  }
}
