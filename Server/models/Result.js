const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  code: String,
  name: String,
  grade: String,
  credits: Number,
});

const ResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  semester: { type: Number, required: true },
  subjects: [SubjectSchema],
  sgpa: Number,
  cgpa: Number,
  totalCredits: Number,
  gradePoints: Number,
}, { timestamps: true });

module.exports = mongoose.model('Result', ResultSchema);
