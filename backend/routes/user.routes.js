const express = require("express");
const {
  registerUser,
  login,
  logout,
  voteForCandidate,
  getVotedCandidate,
} = require("../controllers/registerUser");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login", login);
router.post("/vote-for-candidate", auth, voteForCandidate);
router.get("/get-voted-candidate", auth, getVotedCandidate);
router.post("/logout", auth, logout);

module.exports = router;
