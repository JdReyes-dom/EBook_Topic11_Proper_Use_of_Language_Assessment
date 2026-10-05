/* ==========================================================================
   FRS GENERAL KNOWLEDGE QUIZ — QUESTION BANK
   Digital Values | 10 Questions | Topic 11: Power of Words
   Layout: 2 Identification · 2 Application · 3 Comprehension · 3 Analysis
   ========================================================================== */

const QUIZ_QUESTIONS = [
  /* ---------- IDENTIFICATION (2) ---------- */
  {
    id: 1,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'Who are the three close friends in the story?',
    choices: { a: 'Dash, Toby, and Leo', b: 'Maya, Toby, and Sam', c: 'Dash, Toby, and Maya', d: 'Dash, Leo, and Sam' },
    correct: 'c'
  },
  {
    id: 2,
    grade: 'Digital Values',
    subject: 'Identification',
    question: 'What exactly happened to Toby while they were playing at the park?',
    choices: {
      a: 'He lost his smartphone in the grass.',
      b: 'He tripped over a root and fell flat into the mud.',
      c: 'He won a running race against his friends.',
      d: 'He got into a loud argument with Dash.'
    },
    correct: 'b'
  },

  /* ---------- APPLICATION (2) ---------- */
  {
    id: 3,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'If your friend trips and falls in front of everyone, just like Toby did, what is the best thing you should do?',
    choices: {
      a: 'Take a quick video so everyone can laugh at it later.',
      b: 'Point and laugh at them loudly so they know it\'s a joke.',
      c: 'Ask if they are okay, help them up, and make sure they aren\'t hurt.',
      d: 'Run away and pretend you don\'t know them.'
    },
    correct: 'c'
  },
  {
    id: 4,
    grade: 'Digital Values',
    subject: 'Application',
    question: 'Imagine you see an embarrassing photo of a classmate in a group chat. According to the lesson in the story, how should you react?',
    choices: {
      a: 'Reply with laughing emojis to join in on the fun.',
      b: 'Forward the photo to your other friends who aren\'t in the chat.',
      c: 'Print the photo out to show people who don\'t have phones.',
      d: 'Do not laugh or share it, and remember that we must use respectful language online.'
    },
    correct: 'd'
  },

  /* ---------- COMPREHENSION (3) ---------- */
  {
    id: 5,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'What did Dash do immediately after Toby took a clumsy fall?',
    choices: {
      a: 'He helped Toby stand up and wiped his clothes.',
      b: 'He ran to get help from a teacher.',
      c: 'He ignored Toby and continued playing in the grass.',
      d: 'He took a picture of Toby\'s fall and posted it in the class group chat.'
    },
    correct: 'd'
  },
  {
    id: 6,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'How did Toby feel when he saw his classmates replying with laughing emojis in the group chat?',
    choices: {
      a: 'He felt proud of his funny fall.',
      b: 'He thought it was a great joke and laughed with them.',
      c: 'He felt deeply hurt and embarrassed.',
      d: 'He felt angry at Maya.'
    },
    correct: 'c'
  },
  {
    id: 7,
    grade: 'Digital Values',
    subject: 'Comprehension',
    question: 'Why was Toby crying in the cafeteria the next morning?',
    choices: {
      a: 'Because he was still physically hurt from his fall at the park.',
      b: 'Because classmates were whispering about him and someone taped the photo to his locker.',
      c: 'Because he forgot to bring his lunch to school.',
      d: 'Because Maya yelled at him in the hallway.'
    },
    correct: 'b'
  },

  /* ---------- ANALYSIS (3) ---------- */
  {
    id: 8,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'Why did Maya decide to confront Dash in the cafeteria?',
    choices: {
      a: 'She wanted to show Dash that his harmless prank had turned into cruel bullying.',
      b: 'She was angry that Dash didn\'t include her in the picture.',
      c: 'Toby asked her to go fight Dash for him.',
      d: 'She wanted Dash to share the photo on other social media apps.'
    },
    correct: 'a'
  },
  {
    id: 9,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'What was the main reason Dash finally deleted the photo from the group chat?',
    choices: {
      a: 'His phone was running out of storage space.',
      b: 'A teacher caught him and forced him to delete it.',
      c: 'He felt guilty and realized his careless words hurt his friend\'s dignity.',
      d: 'Maya threatened to stop being his friend if he didn\'t.'
    },
    correct: 'c'
  },
  {
    id: 10,
    grade: 'Digital Values',
    subject: 'Analysis',
    question: 'What is the most important lesson or theme of this story?',
    choices: {
      a: 'You should never run in the park because you might get muddy.',
      b: 'Words and jokes have power, and a good joke shouldn\'t hurt someone else\'s feelings.',
      c: 'Smartphones should be banned from schools and parks.',
      d: 'It is okay to laugh at your friends as long as you delete the picture eventually.'
    },
    correct: 'b'
  }
];

/* Utility: get questions filtered by grade range (inclusive) */
function getQuestionsForGrades(minGrade, maxGrade) {
  return QUIZ_QUESTIONS.filter(
    q => q.grade >= minGrade && q.grade <= maxGrade
  );
}

/* Utility: find a question by id */
function getQuestionById(id) {
  return QUIZ_QUESTIONS.find(q => q.id === id) || null;
}

/* Utility: check if an answer is correct */
function isAnswerCorrect(questionId, answerKey) {
  const q = getQuestionById(questionId);
  if (!q || !answerKey) return false;
  return q.correct === answerKey.toLowerCase();
}

/* Export for use in other scripts (global scope) */
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
window.getQuestionsForGrades = getQuestionsForGrades;
window.getQuestionById = getQuestionById;
window.isAnswerCorrect = isAnswerCorrect;