const { HWAY_URL } = require('../config/config');
const axios = require('axios');
const APICONTROLLER = 'subscriber';

exports.getAllSubscriber = () => [{
    "username": "admin",
    "email": "admin@demo.com",
    "password": "1234"
}];

exports.isusernameavailable = async (username) => {
    try {
        const url = `${HWAY_URL}${APICONTROLLER}/isusernameavailable/${username}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return error;
    }
};

exports.create_otp = async (countryCode, phone) => {
    try {
        const url = `${HWAY_URL}${APICONTROLLER}/create-otp`;
        // return url;
        const postData = {
            countryCode: countryCode,
            phone: phone
        };
        //return postData;
        const response = await axios.post(url, postData, {
            timeout: 50000
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

exports.verify_otp = async (pincode, phone) => {
    try {
        const url = `${HWAY_URL}${APICONTROLLER}/verify-otp`;
        const postData = {
            pincode: pincode,
            phone: phone
        };
        const response = await axios.post(url,postData);
        return response.data;
    } catch (error) {

    }
};
