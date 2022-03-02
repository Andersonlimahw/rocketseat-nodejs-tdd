import { ChallengeRepository } from '../../src/application/repositories/ChallengeRepository';
import { Challenge } from '../../src/domain/entities/challenge';

export class InMemoryChallengeRepository implements ChallengeRepository {
    public items: Challenge[] = [];
    async findById(id: string): Promise<Challenge> {
        const student = this.items.find(student => student.id === id);
        if(!student) {
            return null;
        }
        return student;
    }
}