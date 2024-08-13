const express = require('express');
const subscriberController = require('../controllers/subscriberController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Subscriber
 *   description: Subscriber management
 */

router.get('/subscriber', subscriberController.getSubscribers);
/**
 * @swagger
 * /subscriber/create-otp:
 *   post:
 *     summary: Create opt 
 *     tags: [Subscriber]
 *     requestBody:
*       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               countryCode:
 *                 type: string
 *                 description: CountryCode.
 *                 example: US
 *               phone:
 *                 type: string
 *                 description: Phone number.
 *                 example: +12653256878
 *     responses:
 *       200:
 *         description: Success 
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
router.post('/subscriber/create-otp', subscriberController.createOtp);
/**
 * @swagger
 * /subscriber/verify-otp:
 *   post:
 *     summary: Verify opt 
 *     tags: [Subscriber]
 *     requestBody:
*       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pincode:
 *                 type: string
 *                 description: pincode.
 *                 example: 123456
 *               phone:
 *                 type: string
 *                 description: Phone number.
 *                 example: +12653256878
 *     responses:
 *       200:
 *         description: Success 
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
router.post('/subscriber/verify-otp', subscriberController.verify_otp);
/**
 * @swagger
 * /subscriber/isusernameavailable/{username}:
 *   get:
 *     summary: Retrieve a single JSONPlaceholder user.
 *     tags: [Subscriber]
 *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success 
 *         content:
 *           application/json:
 *               schema:
 *               type: string
 */
router.get('/subscriber/isusernameavailable/:username', subscriberController.isusernameavailable);


module.exports = router;