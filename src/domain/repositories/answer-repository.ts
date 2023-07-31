import { Answer } from "../entities/answer";


export interface AnswerRepositopry {
  create(answer: Answer): Promise<void>;
}