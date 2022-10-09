import { Queue, Worker } from 'bullmq';
import ModGenerate from './generate';

const QUEUE_NAME = 'default';

if (!process.env.REDIS_HOST) console.warn('REDIS_HOST is not defined');
const connection = {
  host: process.env.REDIS_HOST,
};

export const queue = new Queue(QUEUE_NAME, { connection });

const worker = new Worker(
  QUEUE_NAME,
  async (job) => {
    if (job.name === 'generateSubmissions') {
      const submission = await ModGenerate.submission();
      console.log(submission);
    }
  },
  { connection }
);

type JobName = 'generateSubmissions';

export const enqueue = async (job: JobName, data?: any) => {
  await queue.add(job, data);
};
