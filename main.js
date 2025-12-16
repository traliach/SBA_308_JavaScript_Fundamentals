// SBA 308: JavaScript Fundamentals (sandbox starter data)

// extra console warnings without changing the required final output.
const DEBUG = false;
function debugWarn(message) {
  if (DEBUG) console.warn(message);
}

function round3(num) {
  return Number(Number(num).toFixed(3));
}

function toValidDate(dateString) {
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return null;
  return d;
}

function validateInputs(course, ag, submissions) {
  if (!course || !ag || !submissions) {
    throw new Error("Missing required inputs.");
  }

  if (ag.course_id !== course.id) {
    throw new Error("Invalid input: course_id does not match course.id");
  } else {
    // keep going
  }
}

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getLearnerData(course, ag, submissions) {
  // Step 2 stub: we’ll implement the real logic incrementally.
  validateInputs(course, ag, submissions);
  return [];
}

let result = [];
try {
  result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
} catch (err) {
  // Keep the required output clean; no extra logs by default.
  result = [];
}

console.log(result);


