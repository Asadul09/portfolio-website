import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      default: 'Alex Rivera',
    },
    roleTitle: {
      type: String,
      default: 'Full Stack MERN Developer',
    },
    taglines: {
      type: [String],
      default: [
        'Full Stack Developer',
        'MERN Stack Enthusiast',
        'Open Source Contributor',
        'UI/UX Craftsman',
      ],
    },
    bio: {
      type: String,
      default:
        'Passionate full-stack software engineer specializing in modern React ecosystems, high-throughput Node.js microservices, and elegant MongoDB database architectures.',
    },
    email: {
      type: String,
      default: 'contact@example.com',
    },
    phone: {
      type: String,
      default: '+1 (555) 234-5678',
    },
    location: {
      type: String,
      default: 'San Francisco, CA (Open to Remote)',
    },
    yearsOfExperience: {
      type: Number,
      default: 3,
    },
    completedProjects: {
      type: Number,
      default: 25,
    },
    happyClients: {
      type: Number,
      default: 18,
    },
    socialLinks: {
      github: { type: String, default: 'https://github.com' },
      linkedin: { type: String, default: 'https://linkedin.com' },
      twitter: { type: String, default: 'https://x.com' },
      resume: { type: String, default: '#' },
    },
    experiences: [
      {
        role: String,
        company: String,
        period: String,
        location: String,
        description: String,
        technologies: [String],
      },
    ],
    education: [
      {
        degree: String,
        institution: String,
        period: String,
        details: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema);

export default Profile;
