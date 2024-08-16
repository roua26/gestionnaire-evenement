const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');

router.get('/', eventController.getEvents);
router.post('/creat', eventController.createEvent);
router.put('/update/:id', eventController.updateEvent);
router.delete('/delet/:id', eventController.deleteEvent);
router.get('/getrecord/:id', eventController.getRecord);

module.exports = router;