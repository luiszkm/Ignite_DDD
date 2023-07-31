import { Optional } from "@/core/@types/optiona";
import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

interface IAnswerProps {
  questionId: UniqueEntityId,
  authorId: UniqueEntityId;
  content: string,
  createdAt: Date,
  updatedAt?: Date,
}
export class Answer extends Entity <IAnswerProps> {
  get content() : string{
   return this.props.content
  }
  get questionId() {
    return this.props.questionId
  }
  get authorId() {
    return this.props.authorId
  }
  get createdAt() {
    return this.props.createdAt
  }
  get updatedAt() {
    return this.props.updatedAt
  }
  get excerpt() {
    return this.props.content
    .substring(0, 120)
    .trimEnd()
    .concat('...')
  }
  private touch() {
    this.props.updatedAt = new Date()
  }
  set content(content: string) {
    this.props.content = content
    this.touch()
  }
  static create(props: Optional<IAnswerProps , 'createdAt'>, 
  id?: UniqueEntityId) {
    const answer = new Answer({
      ...props,
      createdAt: new Date(),
    },id)

    return answer
  }
}