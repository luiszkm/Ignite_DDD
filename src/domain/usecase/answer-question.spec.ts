import { describe, expect, it } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import { AnswerRepositopry } from "../repositories/answer-repository";
import { Answer } from "../entities/answer";

const fakeAnswerRepository: AnswerRepositopry = {
  create: async (answer: Answer) => {
    return
  }
}
describe(('Answer Question'), () => {
  it('should be able to answer a question',async () => {
    const answerQuestionUseCase = new AnswerQuestionUseCase(fakeAnswerRepository)
    const answer = answerQuestionUseCase.execute({
      content: 'Answer content',
      instructorId: 'instructor-id',
      questionId: 'question-id'
    })
    expect((await answer).content).toEqual('Answer content')
  })
})