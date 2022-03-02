import { Submission } from '../../domain/entities/submission';
import { StudentsRepository } from '../repositories/StudentsRepository';
import { ChallengeRepository } from '../repositories/ChallengeRepository';

type CreateChallengeSubmissionRequest =  {
    studentId: string;

    challengeId: string;
}

export class CreateChallengeSubmission {
    constructor(
      private studentsRepository : StudentsRepository,
      private challengeRepository: ChallengeRepository
    ) {}

    async execute({ studentId, challengeId } : CreateChallengeSubmissionRequest ) {
        const studend = await this.studentsRepository.findById(studentId);
        if(!studend) {
          throw new Error(`Student not found with id ${studentId}`);
        }
        const challenge = await this.challengeRepository.findById(challengeId);
        if(!challenge) {
          throw new Error(`Challenge not found with id ${challengeId}`);
        }
        const submission = Submission.create({ studentId, challengeId });
        return submission;
    }
}