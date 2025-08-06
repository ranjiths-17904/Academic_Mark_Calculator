import { useState } from 'react';

const gradePoints = {
  'O': 10,
  'A+': 9,
  'A': 8,
  'B+': 7,
  'B': 6,
  'C': 5,
  'P': 4,
  'F': 0,
};

const GPACalculator = () => {
  const [subjects, setSubjects] = useState([{ name: '', grade: '', credits: '' }]);
  const [gpa, setGPA] = useState(null);

  const handleChange = (index, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][field] = value;
    setSubjects(updatedSubjects);
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: '', grade: '', credits: '' }]);
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    subjects.forEach(({ grade, credits }) => {
      const point = gradePoints[grade.toUpperCase()] || 0;
      totalPoints += point * Number(credits);
      totalCredits += Number(credits);
    });
    const calculatedGPA = (totalPoints / totalCredits).toFixed(2);
    setGPA(calculatedGPA);
  };

  return (
    <div className="p-4 bg-white dark:bg-dark rounded shadow">
      {subjects.map((subject, index) => (
        <div key={index} className="flex space-x-2 mb-2">
          <input
            type="text"
            placeholder="Subject Name"
            value={subject.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Grade"
            value={subject.grade}
            onChange={(e) => handleChange(index, 'grade', e.target.value)}
            className="w-20 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Credits"
            value={subject.credits}
            onChange={(e) => handleChange(index, 'credits', e.target.value)}
            className="w-20 p-2 border rounded"
          />
        </div>
      ))}
      <button onClick={addSubject} className="mt-2 px-4 py-2 bg-primary text-white rounded">Add Subject</button>
      <button onClick={calculateGPA} className="mt-2 ml-2 px-4 py-2 bg-green-500 text-white rounded">Calculate GPA</button>
      {gpa && <div className="mt-4 text-lg">GPA: {gpa}</div>}
    </div>
  );
};

export default GPACalculator;
