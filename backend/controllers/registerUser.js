const Candidate = require("../models/candidate.model");
const User = require("../models/user.model");

const generateAccessAndRefreshToken = async (user) => {
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.refreshToken = refreshToken;
  const loggedInUser = await user.save();

  return { accessToken, refreshToken, loggedInUser };
};

exports.registerUser = async (req, res) => {
  try {
    const { name, adhaarNumber, password } = req.body;

    const userExist = await User.find({ adhaarNumber });

    if (userExist.length) {
      return res.status(400).json({
        success: false,
        userExist,
        message: "User already exists",
      });
    }

    await User.create({ name, adhaarNumber, password });

    const user = await User.find({ adhaarNumber }).select("-password");

    if (!user) {
      return res.status(500).json({
        success: false,
        message: "Failed to register user",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    // extract data from request body
    const { adhaarNumber, password } = req.body;

    // check if fields are empty
    if (!adhaarNumber || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide adhaar and password",
      });
    }

    // check if user exist or not
    const user = await User.findOne({ adhaarNumber });
    console.log(user);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    if (!(await user.isPasswordCorrect(password))) {
      return res.status(400).json({
        success: false,
        message: "Password is incorrect",
      });
    }

    const { accessToken, loggedInUser } = await generateAccessAndRefreshToken(
      user
    );

    loggedInUser.password = null;
    loggedInUser.refreshToken = null;

    res
      .status(200)
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
      })
      .json({
        success: true,
        accessToken: accessToken,
        user: loggedInUser,
        message: "Logged In Success",
      });
  } catch (error) {
    console.log("Something went wrong", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.voteForCandidate = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const party = await Candidate.findById(req.body.candidateId);

    if (!party) {
      return res.status(400).json({
        success: false,
        message: "Candidate not found",
      });
    }

    if (user.isVoted) {
      return res.status(400).json({
        success: false,
        message: "You have already voted",
      });
    }

    party.votes.push(user._id);
    party.totalVotes += 1;
    user.votedTo = party._id;
    user.isVoted = true;

    await party.save();
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Voted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getVotedCandidate = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate("votedTo")
      .select("votedTo");
    console.log(user);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.refreshToken = null;
    await user.save();

    res.clearCookie("accessToken");
    console.log("Logged Out Success");

    res.status(200).json({
      success: true,
      message: "Logged Out Success",
    });
  } catch (error) {
    console.log("Something went wrong", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
