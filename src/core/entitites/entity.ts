import { randomUUID } from "node:crypto";
import { UniqueEntityId } from "./unique-entity-id";

export class Entity<TProps> {
  private _id: UniqueEntityId;

  protected props: TProps;

  get id() {
    return this._id;
  }

  constructor(props: TProps, id?: string) {
    this.props = props;
    this._id = new UniqueEntityId(id);
  }
}
