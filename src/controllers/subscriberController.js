// const { response } = require('../app');
const SubscriberService = require('../services/subscriberService');

exports.getSubscribers = async (req, res, next) => {
    try {
        const subscribers = await SubscriberService.getAllSubscriber();
        res.status(200).json(subscribers);
    } catch (error) {
        console.log(error);
    }
};

exports.createOtp = async (req, res, next) => {
    try {
        const body = req.body;
        if (!body)
            return res.status(400).send('Request body is required');
        if (!body.countryCode || body.countryCode === '')
            return res.status(400).send('countryCode required');
        if (!body.phone || body.phone === '')
            return res.status(400).send('phone required');

        const responseService = await SubscriberService.create_otp(body.countryCode, body.phone);

        res.status(200).json(responseService);
    } catch (error) {
        console.log(error);
    }
};

exports.isusernameavailable = async (req, res, next) => {
    try {
        const username = req.params.username;
        if (!username)
            res.status(400).send('username is required');

        const response = await SubscriberService.isusernameavailable(username);

        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.verify_otp = async (req, res, next) => {
    try {
        if (!req.body)
            res.status(400).send('body is required');
        if (!req.body.pincode || req.body.pincode === '')
            res.status(400).send('pincode is required');
        if (!req.body.phone || req.body.phone === '')
            res.status(400).send('phone is required');

        const response = await SubscriberService.verify_otp(req.body.pincode, req.body.phone);

        res.status(200).json(response);
    } catch (error) {

    }
}