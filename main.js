// SBA 308: JavaScript Fundamentals (sandbox starter data)

// extra console warnings without changing the required final output.
const DEBUG = true;
function debugWarn(message) {
  if (DEBUG) console.warn(message);
}

const LATE_PENALTY_RATE = 0.1;

function round3(num) {
  return Number(Number(num).toFixed(3));
}

function toValidDate(dateString) {
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return null;
  return d;
}

function applyLatePenalty(score, pointsPossible, submittedAt, dueAt) {
  let adjusted = score;

  if (submittedAt > dueAt) {
    adjusted = score - pointsPossible * LATE_PENALTY_RATE;
    if (adjusted < 0) adjusted = 0;
  } else {
    adjusted = score;
  }

  return adjusted;
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

function buildDueAssignmentLookup(ag, now) {
  const lookup = {};

  for (const assignment of ag.assignments) {
    lookup[assignment.id] = assignment;

    const dueAt = toValidDate(assignment.due_at);
    const possible = Number(assignment.points_possible);

    if (!dueAt || !Number.isFinite(possible) || possible <= 0) {
      delete lookup[assignment.id];
      continue;
    }

    if (dueAt > now) {
      delete lookup[assignment.id];
    }
  }

  return lookup;
}

function groupValidSubmissionsByLearner(submissions, dueAssignments) {
  const byLearner = new Map();

  for (const record of submissions) {
    if (!record || !record.submission) {
      debugWarn("Skipping bad submission record");
      continue;
    }

    const learnerId = Number(record.learner_id);
    const assignmentId = Number(record.assignment_id);
    const score = Number(record.submission.score);
    const submittedAt = toValidDate(record.submission.submitted_at);

    // Ignore submissions for assignments that are not due (rubric: continue).
    if (!dueAssignments[assignmentId]) continue;

    if (!Number.isFinite(learnerId) || !Number.isFinite(assignmentId)) continue;
    if (!Number.isFinite(score)) continue;
    if (!submittedAt) continue;

    if (!byLearner.has(learnerId)) byLearner.set(learnerId, []);
    byLearner.get(learnerId).push({ assignmentId, score, submittedAt });
  }

  return byLearner;
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
  const now = new Date();
  const dueAssignments = buildDueAssignmentLookup(ag, now);
  debugWarn(`Due assignments: ${Object.keys(dueAssignments).length}`);

  // DEBUG checkpoint: confirm late penalty math using the sample late submission.
  if (DEBUG) {
    const dueAt = toValidDate("2023-02-27");
    const submittedAt = toValidDate("2023-03-07");
    const adjusted = applyLatePenalty(140, 150, submittedAt, dueAt); // should be 125
    debugWarn(`Late penalty check (140/150 late) => adjusted score: ${adjusted}`);
  }

  const submissionsByLearner = groupValidSubmissionsByLearner(submissions, dueAssignments);
  if (DEBUG) {
    debugWarn(`Learners with due submissions: ${submissionsByLearner.size}`);
    for (const [learnerId, subs] of submissionsByLearner) {
      debugWarn(`Learner ${learnerId} due submissions: ${subs.length}`);
    }
  }

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


