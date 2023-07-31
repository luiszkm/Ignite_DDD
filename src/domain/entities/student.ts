import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
interface IStudentProps {
  name: string;
}
export class Student  extends Entity <IStudentProps> {
  static create(props: IStudentProps, id?: UniqueEntityId) {
    const student = new Student({
      ...props,
    },id)

    return student
  }
}