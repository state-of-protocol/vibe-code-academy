const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'students.json');

// ---------- Middleware ----------
app.use(express.json());

// Serve static files (HTML, CSS, JS, courses/)
app.use(express.static(__dirname));

// ---------- Helper ----------
function readStudents() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeStudents(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

function generateId(student) {
  const now = new Date();
  const y = String(now.getFullYear()).slice(-2);
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const rand = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `VCA-${y}${m}${d}-${rand}`;
}

// ---------- API Routes ----------

/**
 * POST /api/students
 * Body: { fullName, email, phone, address, github, social, portfolio,
 *         linkedin, course, experience, motivation, referral }
 * Returns: { success, student { id, ...data } }
 */
app.post('/api/students', (req, res) => {
  const { fullName, email, phone, course, experience, motivation } = req.body;

  // Validation
  if (!fullName || !fullName.trim()) {
    return res.status(400).json({ success: false, error: 'Nama penuh diperlukan.' });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, error: 'E-mel tidak sah.' });
  }
  if (!phone || !/^[\d\s\-+()]{7,20}$/.test(phone)) {
    return res.status(400).json({ success: false, error: 'Nombor telefon tidak sah.' });
  }
  if (!course) {
    return res.status(400).json({ success: false, error: 'Sila pilih kursus.' });
  }
  if (!experience) {
    return res.status(400).json({ success: false, error: 'Sila pilih tahap pengalaman.' });
  }
  if (!motivation || !motivation.trim()) {
    return res.status(400).json({ success: false, error: 'Motivasi diperlukan.' });
  }

  const students = readStudents();

  // Check duplicate email
  if (students.some(s => s.email.toLowerCase() === email.toLowerCase().trim())) {
    return res.status(409).json({ success: false, error: 'E-mel ini sudah didaftarkan.' });
  }

  const id = generateId();
  const now = new Date().toISOString();

  const student = {
    id,
    fullName: fullName.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    address: (req.body.address || '').trim(),
    github: (req.body.github || '').trim(),
    social: (req.body.social || '').trim(),
    portfolio: (req.body.portfolio || '').trim(),
    linkedin: (req.body.linkedin || '').trim(),
    course,
    experience,
    motivation: motivation.trim(),
    referral: (req.body.referral || 'Tidak dinyatakan').trim(),
    submittedAt: now
  };

  students.push(student);
  writeStudents(students);

  res.json({
    success: true,
    student: {
      id: student.id,
      fullName: student.fullName,
      email: student.email,
      course: student.course,
      submittedAt: student.submittedAt
    }
  });
});

/**
 * GET /api/students/:id
 * Returns full student data for certificate
 */
app.get('/api/students/:id', (req, res) => {
  const students = readStudents();
  const student = students.find(s => s.id === req.params.id);

  if (!student) {
    return res.status(404).json({ success: false, error: 'Pelajar tidak ditemui.' });
  }

  res.json({ success: true, student });
});

/**
 * GET /api/students
 * List all students (optional, admin use)
 */
app.get('/api/students', (req, res) => {
  const students = readStudents();
  const list = students.map(s => ({
    id: s.id,
    fullName: s.fullName,
    email: s.email,
    course: s.course,
    submittedAt: s.submittedAt
  }));
  res.json({ success: true, count: list.length, students: list });
});

// ---------- Start ----------
app.listen(PORT, () => {
  console.log(`Vibe Code Academy server berjalan di http://localhost:${PORT}`);
});
