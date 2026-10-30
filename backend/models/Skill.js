import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      trim: true,
    },
    category: {
      type: String,
      enum: ['AI & Machine Learning', 'Frontend', 'Backend', 'Database', 'Tools & Analytics', 'Tools & DevOps', 'Other'],
      required: true,
      default: 'AI & Machine Learning',
    },
    proficiency: {
      type: Number,
      min: 0,
      max: 100,
      default: 80,
    },
    iconName: {
      type: String,
      default: 'Code',
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema);

export default Skill;
