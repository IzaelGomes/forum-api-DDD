import { UniqueEntityId } from "../../core/entitites/unique-entity-id";
import { Answer } from "../entities/answer";
import { AnswersRepository } from "../repositories/answer-repository";

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    content,
    instructorId,
    questionId,
  }: AnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      authorId: new UniqueEntityId(instructorId),
      content,
      questionId: new UniqueEntityId(questionId),
    });


    await this.answersRepository.create(answer);

    return answer;
  }
}
