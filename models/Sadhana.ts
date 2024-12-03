import mongoose, { Schema, model, models } from 'mongoose';
import { Sadhana } from '../types/Sadhana';

const SadhanaSchema = new Schema<Sadhana>({
  date: { type: String, required: true },
  wakeUpTime: { type: String, required: true },
  sleepTime: { type: String, required: true },
  chantingRounds: { type: Number, required: true },
  bookReadingDuration: { type: Number, required: true },
  lectureDuration: { type: Number, required: true },
  chantingCompletionTime: { type: String, required: true },
});

export default models.Sadhana || model<Sadhana>('Sadhana', SadhanaSchema);
