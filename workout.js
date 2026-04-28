import mongoose from 'mongoose';

const WorkoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  exerciseName: { type: String, required: true },
  sets: [{
    reps: Number,
    weight: Number,
  }],
  date: { type: Date, default: Date.now },
  category: { type: String, enum: ['Push', 'Pull', 'Legs', 'Cardio', 'Full Body'] }
});

export default mongoose.models.Workout || mongoose.model('Workout', WorkoutSchema);
