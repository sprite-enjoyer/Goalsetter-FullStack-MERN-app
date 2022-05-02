const express = require('express');
const { set } = require('express/lib/response');
const router = express.Router('../routes');
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router;