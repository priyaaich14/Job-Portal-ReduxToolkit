
import { Schema,model } from 'mongoose';
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['candidate', 'recruiter'], required: true },
  profile: { type: Schema.Types.Mixed },
}, { timestamps: true });

export default model('User', userSchema);
