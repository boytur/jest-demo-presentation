// controllers/calculatorController.js
const express = require("express");
const router = express.Router();
const calculatorService = require("../services/calculatorService");

// API สำหรับบวก
router.get("/add", (req, res) => {
  // รับค่าจาก query string
  const { a, b } = req.query;

  // คำนวนผลลัพธ์
  const result = calculatorService.add(Number(a), Number(b));

  // ตอบกลับ client
  res.json({ result });
});

// API สำหรับลบ
router.get("/subtract", (req, res) => {
  const { a, b } = req.query;
  const result = calculatorService.subtract(Number(a), Number(b));
  res.json({ result });
});

// API สำหรับคูณ
router.get("/multiply", (req, res) => {
  const { a, b } = req.query;
  const result = calculatorService.multiply(Number(a), Number(b));
  res.json({ result });
});

// API สำหรับหาร
router.get("/divide", (req, res) => {
  const { a, b } = req.query;
  try {
    const result = calculatorService.divide(Number(a), Number(b));
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ส่งออก router เพื่อใช้ใน app.js
module.exports = router;
