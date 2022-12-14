const { Router } = require('express');
const { createVideo, deleteVideo } = require('../Controllers/videos.controllers');

const router = Router();

router.post('/videos', createVideo);
router.delete('/videos/:id', deleteVideo);

module.exports = router;