import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      default: 'MD Asadul Islam',
    },
    roleTitle: {
      type: String,
      default: 'Software Engineer · Full-Stack MERN Developer',
    },
    taglines: {
      type: [String],
      default: [
        'Full-Stack MERN Developer',
        'AI & Web Applications Engineer',
        'BSc in CSE from AUST',
        'IEEE Published AI Researcher',
      ],
    },
    bio: {
      type: String,
      default:
        'Software Engineer and Full-Stack MERN Developer with a BSc in Computer Science and Engineering from Ahsanullah University of Science and Technology (AUST). Experienced in crafting scalable web applications, integrating modern AI models (like GPT-4o mini and OpenRouter), building secure RESTful microservices, and conducting machine learning research with first-author IEEE publication.',
    },
    email: {
      type: String,
      default: 'asadulislam.dev@gmail.com',
    },
    phone: {
      type: String,
      default: '+880 1XXXXXXXXX',
    },
    location: {
      type: String,
      default: 'Dhaka, Bangladesh',
    },
    yearsOfExperience: {
      type: Number,
      default: 1,
    },
    completedProjects: {
      type: Number,
      default: 12,
    },
    happyClients: {
      type: Number,
      default: 8,
    },
    socialLinks: {
      github: { type: String, default: 'https://github.com/Asadul09' },
      linkedin: { type: String, default: 'https://www.linkedin.com/in/a-j-asad-408839270/' },
      twitter: { type: String, default: 'https://x.com' },
      portfolio: { type: String, default: 'https://portfolio-react-lac-eta.vercel.app' },
      resume: { type: String, default: '#' },
    },
    researchPublications: [
      {
        title: String,
        venue: String,
        status: String,
        summary: String,
        tags: [String],
        link: String,
      },
    ],
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
