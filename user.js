import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  image: String,
  role: { type: String, enum: ['admin', 'member'], default: 'member' },
  membershipType: { type: String, enum: ['Basic', 'Premium', 'Elite', 'None'], default: 'None' },
  weight: { type: Number, default: 0 }, // For tracking progress
  height: { type: Number, default: 0 },
  joinedAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
