import { Question, Rating, ResultData } from 'src/types';

export const service = {
  async fetchQuestions(): Promise<Question[]> {
    const res = await fetch(`http://localhost:3001/questions`);
    const data = await res.json();

    return data;
  },

  async fetchRating(): Promise<Rating[]> {
    const res = await fetch(`http://localhost:3001/rating`);
    const data = await res.json();

    return data;
  },

  async sendResult(data: ResultData): Promise<void> {
    const res = await fetch(`http://localhost:3001/rating`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('res ', res);
  },

  async deleteUserResult(id: number): Promise<void> {
    const res = await fetch(`http://localhost:3001/rating/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();

    return data;
  },
};
