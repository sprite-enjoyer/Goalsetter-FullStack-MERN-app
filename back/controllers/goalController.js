const asyncHandler = require('express-async-handler');

// @desc  Get Goals
// @route GET /api/goals

const { set } = require("express/lib/response");

// @access  Private
const getGoals = asyncHandler (async (req, res) => {
  req.status(200).json({message: 'get goals'});
  console.log('get request made');
});

// @desc  Post Goals
// @route POST /api/goals/
// @access  Private
const setGoal = asyncHandler (async (req, res) => {
  if(!req.body.text){
    res.status(400);
    throw new Error('please enter a text')
  }
  res.status(200).json({message: "set goal"});
  console.log('post request made');
});

// @desc  Update Goal
// @route PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler (async (req, res) => {
  res.status(200).json({message: `update goal ${req.params.id}`});
  console.log('put request made');
});

// @desc  Delete Goal
// @route DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler (async (req, res) => {
  res.status(200).json({message: `delete goal ${req.params.id}`});
  console.log('delete request made');
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}