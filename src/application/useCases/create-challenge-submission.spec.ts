import { CreateChallengeSubmission } from './create-challenge-submission';
import { InMemoryStudentsRepository } from '../../../tests/repositories/in-memory-students-repository';
import { InMemoryChallengeRepository } from '../../../tests/repositories/in-memory-challenge-repository';
import { Student } from '../../domain/entities/student';
import { Challenge } from '../../domain/entities/challenge';

describe('Create challenge submission use case', () => {
    it('should be abble to create a new challenge submission', async () => {
        const studentsRepository = new InMemoryStudentsRepository();
        const challengesRepository = new InMemoryChallengeRepository();
        const submission = new CreateChallengeSubmission(
            studentsRepository,
            challengesRepository
        );

        const student = Student.create({
            name: 'Anderson', 
            email: 'anderson@example.com'
        })
        const challenge = Challenge.create({
            title: 'Challenge', 
            instructionsUrl: 'https://example.com'
        });
        
        studentsRepository.items.push(student);
        challengesRepository.items.push(challenge);

        const response = await submission.execute({
            studentId: student.id, 
            challengeId: challenge.id
        });

        expect(response).toBeTruthy();
    })
})