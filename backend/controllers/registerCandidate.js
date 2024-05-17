const Candidate = require("../models/candidate.model");

exports.registerCandidate = async (req, res) => {
  try {
    const { name, party } = req.body;

    if (!name || !party) {
      return res.status(400).json({
        success: false,
        message: "Please provide name and party",
      });
    }

    const partyExist = await Candidate.find({ party });
    console.log("Exist ->", partyExist);

    if (partyExist.length) {
      return res.status(400).json({
        success: false,
        message: "Party already exists",
      });
    }

    const newCandidate = await Candidate.create({ name, party });

    if (!newCandidate) {
      return res.status(500).json({
        success: false,
        message: "Failed to register candidate",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Candidate registered successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    return res.status(200).json({ candidates });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
