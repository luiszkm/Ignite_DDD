import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Answer } from "../entities/answer";
import { AnswerRepositopry } from "../repositories/answer-repository";

interface IAnswerQuestionUseCase{
  instructorId: string;
  questionId: string;
  content: string;
}
export class AnswerQuestionUseCase {
  constructor (
    public answerRepository: AnswerRepositopry
  ){}
 async execute({instructorId,questionId,content}:IAnswerQuestionUseCase){
    const answer =  Answer.create({
      content,
      questionId: new UniqueEntityId(questionId),
      authorId: new UniqueEntityId(instructorId),
      })
      await this.answerRepository.create(answer)
    return answer
  }
}