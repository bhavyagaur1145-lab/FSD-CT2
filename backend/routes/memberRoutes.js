const express = require("express");
const Member = require("../models/Member");
const upload = require("../utils/upload");

const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { fullName, role, email, phone, department, year, bio } = req.body;

    if (!fullName || !role || !email || !phone) {
      return res.status(400).json({
        message: "Full name, role, email, and phone are required.",
      });
    }

    const member = await Member.create({
      fullName,
      role,
      email,
      phone,
      department,
      year,
      bio,
      image: req.file ? req.file.filename : "",
    });

    return res.status(201).json(member);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create member.",
      error: error.message,
    });
  }
});

router.get("/", async (_req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    return res.json(members);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch members.",
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ message: "Member not found." });
    }

    return res.json(member);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch member details.",
      error: error.message,
    });
  }
});

module.exports = router;

