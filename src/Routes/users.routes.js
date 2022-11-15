const { Router } = require('express');
const { getUserById, getUsersWithCourses, createUser, updateUser, addUsersCourse } = require('../Controllers/users.controllers');


const router = Router();

router.get('/users/:id', getUserById);

router.get('/users/:id/courses', getUsersWithCourses);

router.post('/users', createUser);

router.post('/users/:courseId', addUsersCourse);

router.put('/users/:id', updateUser);

module.exports = router;