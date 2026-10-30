import Skill from '../models/Skill.js';
import { getDBStatus } from '../config/db.js';
import { seedSkills } from '../data/seedData.js';

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
export const getSkills = async (req, res) => {
  try {
    const { category } = req.query;

    if (getDBStatus()) {
      let query = {};
      if (category && category !== 'All') {
        query.category = category;
      }

      let skills = await Skill.find(query).sort({ category: 1, proficiency: -1 });

      if (skills.length === 0 && !category) {
        skills = await Skill.insertMany(seedSkills);
      }

      return res.json({
        success: true,
        count: skills.length,
        data: skills,
        source: 'database',
      });
    }

    let filtered = [...seedSkills];
    if (category && category !== 'All') {
      filtered = filtered.filter((s) => s.category.toLowerCase() === category.toLowerCase());
    }

    return res.json({
      success: true,
      count: filtered.length,
      data: filtered,
      source: 'demo_fallback',
    });
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ success: false, message: 'Server error', data: seedSkills });
  }
};

// @desc    Create new skill
// @route   POST /api/skills
// @access  Public
export const createSkill = async (req, res) => {
  try {
    if (!getDBStatus()) {
      return res.status(400).json({
        success: false,
        message: 'Cannot create skill: MongoDB Atlas is not connected yet.',
      });
    }

    const skill = await Skill.create(req.body);
    res.status(201).json({ success: true, data: skill });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
