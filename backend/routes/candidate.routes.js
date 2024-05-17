const express = require("express");
const {
  registerCandidate,
  getCandidates,
} = require("../controllers/registerCandidate");
const router = express.Router();

router.post("/register-candidate", registerCandidate);
router.get("/get-candidates", getCandidates);

module.exports = router;
