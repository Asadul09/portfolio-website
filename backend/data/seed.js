import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Profile from '../models/Profile.js';
import { seedProjects, seedSkills, seedProfile } from './seedData.js';

dotenv.config();

const runSeed = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      console.error('❌ MONGO_URI is missing in backend/.env');
      process.exit(1);
    }

    console.log('Connecting to MongoDB Atlas...');
    await mongoose.connect(uri);
    console.log('Connected! Purging existing portfolio collections...');

    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Profile.deleteMany({});

    console.log('Inserting seed profile...');
    await Profile.create(seedProfile);

    console.log(`Inserting ${seedProjects.length} seed projects...`);
    await Project.insertMany(seedProjects);

    console.log(`Inserting ${seedSkills.length} seed skills...`);
    await Skill.insertMany(seedSkills);

    console.log('🎉 Database successfully seeded with portfolio data!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during database seeding:', error.message);
    process.exit(1);
  }
};

runSeed();
