import Project from '../models/Project.js';
import { getDBStatus } from '../config/db.js';
import { seedProjects } from '../data/seedData.js';

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req, res) => {
  try {
    const { category, featured } = req.query;

    if (getDBStatus()) {
      let query = {};
      if (category && category !== 'All') {
        query.category = category;
      }
      if (featured === 'true') {
        query.featured = true;
      }

      let projects = await Project.find(query).sort({ order: 1, createdAt: -1 });

      // If database is empty, seed it
      if (projects.length === 0 && !category && !featured) {
        projects = await Project.insertMany(seedProjects);
      }

      return res.json({
        success: true,
        count: projects.length,
        data: projects,
        source: 'database',
      });
    }

    // Fallback mode
    let filtered = [...seedProjects];
    if (category && category !== 'All') {
      filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    if (featured === 'true') {
      filtered = filtered.filter((p) => p.featured);
    }

    return res.json({
      success: true,
      count: filtered.length,
      data: filtered,
      source: 'demo_fallback',
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ success: false, message: 'Server error', data: seedProjects });
  }
};

// @desc    Get single project by ID
// @route   GET /api/projects/:id
// @access  Public
export const getProjectById = async (req, res) => {
  try {
    if (getDBStatus()) {
      const project = await Project.findById(req.params.id);
      if (!project) {
        return res.status(404).json({ success: false, message: 'Project not found' });
      }
      return res.json({ success: true, data: project });
    }

    const project = seedProjects.find(
      (p, idx) => p._id === req.params.id || idx.toString() === req.params.id
    );
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    return res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create new project
// @route   POST /api/projects
// @access  Public
export const createProject = async (req, res) => {
  try {
    if (!getDBStatus()) {
      return res.status(400).json({
        success: false,
        message: 'Cannot create project: MongoDB Atlas is not connected yet.',
      });
    }

    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Public
export const updateProject = async (req, res) => {
  try {
    if (!getDBStatus()) {
      return res.status(400).json({
        success: false,
        message: 'Cannot update project: MongoDB Atlas is not connected yet.',
      });
    }

    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.json({ success: true, data: project });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Public
export const deleteProject = async (req, res) => {
  try {
    if (!getDBStatus()) {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete project: MongoDB Atlas is not connected yet.',
      });
    }

    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.json({ success: true, message: 'Project removed successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
