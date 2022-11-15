const { Router } = require('express');
const { getAllCourses, getAllCoursesWithVideos, getAllCoursesWithCategories, createCourse, updateCourse } = require('../Controllers/courses.controllers');

const router = Router();

router.get('/courses', getAllCourses);

router.get('/courses/videos', getAllCoursesWithVideos);

router.get('/courses/categories', getAllCoursesWithCategories);

router.post('/courses', createCourse);

router.put('/courses/:id', updateCourse);

module.exports = router;