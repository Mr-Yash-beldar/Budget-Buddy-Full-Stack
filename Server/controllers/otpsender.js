const otpGenerator = require('otp-generator');
const OTP = require('../models/OTP');
const User = require('../models/user');


exports.getOTP = async (req, res) => {
  try {
    console.log(req.body);
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required to send OTP',
      });
    }

    const checkPresent =
      (await User.findOne({ email }));

    if (checkPresent) {
      return res.status(401).json({
        success: false,
        message: 'User already registered',
      });
    }

    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log('OTP generated: ', otp);

    let result = await OTP.findOne({ uniqueCode: otp });
    console.log(result);

    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      result = await OTP.findOne({ uniqueCode: otp });
    }

    const otpPayload = { email, otp };
    const otpBody = await OTP.insertOne(otpPayload);

    console.log('OTP Body', otpBody);

    res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: 'Error occurred while sending OTP',
      error: error.message,
    });
  }
};

exports.getOTPByEmail = async  (req, res) =>{
    try {
        const email = req.params.email;
        const otpData = await OTP.findOne({ email });

        if (!otpData) {
            return res.status(404).json({ message: "OTP not found" });
        }

        res.status(200).json({ otp: otpData.otp, createdAt: otpData.createdAt });
    } catch (error) {
        console.log("Error retrieving OTP:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
