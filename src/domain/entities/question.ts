import { Slug } from "./value-objects/slug";
import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/@types/optiona";

interface IQuestionProps {
  authorId: UniqueEntityId,
  bestAnswerId?: UniqueEntityId,
  title: string,
  content: string,
  slug: Slug,
  createdAt: Date,
  updatedAt?: Date,
}
export class Question extends Entity<IQuestionProps>{
  get title() {
    return this.props.title
  }
  get slug() {
    return this.props.slug
  }
  get content() {
    return this.props.content
  }
  get bestAnswerId() {
    return this.props.bestAnswerId
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
  set bestAnswerId(bestAnswerId: UniqueEntityId | undefined) {
    this.props.bestAnswerId = bestAnswerId
    this.touch()
  }
  set title(title: string) {
    this.props.title = title
    this.props.slug = Slug.createFromText(title)
    this.touch()
  }
  static create(props: Optional<IQuestionProps, 'createdAt'| 'slug'>,
    id?: UniqueEntityId) {
    const question = new Question({
      ...props,
      createdAt: new Date(),
      slug:props.slug || Slug.createFromText(props.title)
    }, id)
    return question
  }
}