/**
 * DEMO DATA for Student Dashboard
 * All data here is sample/placeholder data only.
 * Replace with real API responses when backend auth routes are connected.
 */

export const DEMO_STUDENT = {
  id: 'STU-2026-089',
  name: 'Sophia Bennett',
  grade: 'Grade 11 - Science',
  admissionNumber: 'STU-2026-089',
  email: 'sophia.bennett@smartschool.edu',
  phone: '+1 (555) 019-2834',
  avatar: null, // Will show initials avatar when null
  section: 'Section A',
  rollNumber: '11',
  parentName: 'Eleanor Bennett',
  joinedDate: 'June 2021',
};

export const DEMO_STATS = {
  attendance: {
    percentage: 87,
    present: 142,
    absent: 21,
    total: 163,
    trend: '+2.1% this month',
    trendPositive: true,
  },
  performance: {
    gpa: 8.4,
    grade: 'A',
    rank: 7,
    totalStudents: 42,
    trend: '+0.3 from last term',
    trendPositive: true,
  },
  assignments: {
    pending: 4,
    submitted: 18,
    overdue: 1,
    total: 23,
    trend: '1 due today',
    trendPositive: false,
  },
  upcomingClasses: {
    today: 5,
    nextClass: 'Physics at 2:00 PM',
    trend: 'Next: Physics @ 2 PM',
    trendPositive: true,
  },
};

export const DEMO_ATTENDANCE_SUMMARY = [
  { month: 'Aug', present: 24, absent: 2, percentage: 92 },
  { month: 'Sep', present: 22, absent: 4, percentage: 85 },
  { month: 'Oct', present: 25, absent: 1, percentage: 96 },
  { month: 'Nov', present: 18, absent: 7, percentage: 72 },
  { month: 'Dec', present: 14, absent: 2, percentage: 88 },
];

export const DEMO_SUBJECTS = [
  { subject: 'Physics', marks: 88, maxMarks: 100, grade: 'A', teacher: 'Dr. Robert Hayes' },
  { subject: 'Chemistry', marks: 76, maxMarks: 100, grade: 'B+', teacher: 'Ms. Clara Singh' },
  { subject: 'Mathematics', marks: 92, maxMarks: 100, grade: 'A+', teacher: 'Mr. David Okafor' },
  { subject: 'Biology', marks: 81, maxMarks: 100, grade: 'A', teacher: 'Dr. Priya Nair' },
  { subject: 'English', marks: 85, maxMarks: 100, grade: 'A', teacher: 'Ms. Julia Adams' },
  { subject: 'Computer Sc.', marks: 95, maxMarks: 100, grade: 'A+', teacher: 'Mr. Samuel Lee' },
];

export const DEMO_ASSIGNMENTS = [
  {
    id: 1,
    title: 'Thermodynamics Problem Set',
    subject: 'Physics',
    dueDate: '2026-11-21',
    status: 'pending',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Organic Chemistry Lab Report',
    subject: 'Chemistry',
    dueDate: '2026-11-19',
    status: 'overdue',
    priority: 'high',
  },
  {
    id: 3,
    title: 'Integration Exercises – Ch. 7',
    subject: 'Mathematics',
    dueDate: '2026-11-24',
    status: 'pending',
    priority: 'medium',
  },
  {
    id: 4,
    title: 'Essay: Climate & Ecosystems',
    subject: 'Biology',
    dueDate: '2026-11-25',
    status: 'pending',
    priority: 'medium',
  },
  {
    id: 5,
    title: 'Shakespearean Analysis',
    subject: 'English',
    dueDate: '2026-11-15',
    status: 'submitted',
    priority: 'low',
  },
  {
    id: 6,
    title: 'React App – School Project',
    subject: 'Computer Sc.',
    dueDate: '2026-11-30',
    status: 'pending',
    priority: 'medium',
  },
];

export const DEMO_TIMETABLE = {
  Monday: [
    { time: '8:00 AM', subject: 'Physics', teacher: 'Dr. Hayes', room: 'Lab 2' },
    { time: '9:00 AM', subject: 'Mathematics', teacher: 'Mr. Okafor', room: 'Room 14' },
    { time: '10:30 AM', subject: 'English', teacher: 'Ms. Adams', room: 'Room 7' },
    { time: '12:30 PM', subject: 'Chemistry', teacher: 'Ms. Singh', room: 'Lab 1' },
    { time: '2:00 PM', subject: 'Computer Sc.', teacher: 'Mr. Lee', room: 'IT Lab' },
  ],
  Tuesday: [
    { time: '8:00 AM', subject: 'Biology', teacher: 'Dr. Nair', room: 'Lab 3' },
    { time: '9:00 AM', subject: 'Physics', teacher: 'Dr. Hayes', room: 'Room 10' },
    { time: '10:30 AM', subject: 'Mathematics', teacher: 'Mr. Okafor', room: 'Room 14' },
    { time: '12:30 PM', subject: 'English', teacher: 'Ms. Adams', room: 'Room 7' },
    { time: '2:00 PM', subject: 'Chemistry', teacher: 'Ms. Singh', room: 'Lab 1' },
  ],
  Wednesday: [
    { time: '8:00 AM', subject: 'Mathematics', teacher: 'Mr. Okafor', room: 'Room 14' },
    { time: '9:00 AM', subject: 'Computer Sc.', teacher: 'Mr. Lee', room: 'IT Lab' },
    { time: '10:30 AM', subject: 'Biology', teacher: 'Dr. Nair', room: 'Lab 3' },
    { time: '12:30 PM', subject: 'Physics', teacher: 'Dr. Hayes', room: 'Lab 2' },
    { time: '2:00 PM', subject: 'English', teacher: 'Ms. Adams', room: 'Room 7' },
  ],
  Thursday: [
    { time: '8:00 AM', subject: 'Chemistry', teacher: 'Ms. Singh', room: 'Lab 1' },
    { time: '9:00 AM', subject: 'Biology', teacher: 'Dr. Nair', room: 'Lab 3' },
    { time: '10:30 AM', subject: 'Physics', teacher: 'Dr. Hayes', room: 'Room 10' },
    { time: '12:30 PM', subject: 'Computer Sc.', teacher: 'Mr. Lee', room: 'IT Lab' },
    { time: '2:00 PM', subject: 'Mathematics', teacher: 'Mr. Okafor', room: 'Room 14' },
  ],
  Friday: [
    { time: '8:00 AM', subject: 'English', teacher: 'Ms. Adams', room: 'Room 7' },
    { time: '9:00 AM', subject: 'Chemistry', teacher: 'Ms. Singh', room: 'Lab 1' },
    { time: '10:30 AM', subject: 'Computer Sc.', teacher: 'Mr. Lee', room: 'IT Lab' },
    { time: '12:30 PM', subject: 'Biology', teacher: 'Dr. Nair', room: 'Lab 3' },
    { time: '2:00 PM', subject: 'Mathematics', teacher: 'Mr. Okafor', room: 'Room 14' },
  ],
};

export const DEMO_ANNOUNCEMENTS = [
  {
    id: 1,
    title: 'Mid-Term Examination Schedule Published',
    body: 'The mid-term examination timetable for all classes has been released. Students are advised to check the academic portal for their personal exam schedule and begin preparation.',
    date: '2026-11-18',
    category: 'Exam',
    priority: 'high',
    author: 'Academic Office',
  },
  {
    id: 2,
    title: 'Science Fair – Registrations Open',
    body: 'Annual school Science Fair registrations are now open. Students in Grades 10–12 can submit their project proposals through the school portal by November 30th.',
    date: '2026-11-16',
    category: 'Event',
    priority: 'medium',
    author: 'Science Department',
  },
  {
    id: 3,
    title: 'Library Hours Extended During Exams',
    body: 'The school library will remain open until 7:00 PM on all weekdays from November 20th to December 15th to support student exam preparation.',
    date: '2026-11-14',
    category: 'General',
    priority: 'low',
    author: 'Library Services',
  },
  {
    id: 4,
    title: 'Sports Day – November 29',
    body: 'Annual Sports Day will be held on November 29th on the school grounds. Students who wish to participate in track events should register with the Physical Education department.',
    date: '2026-11-12',
    category: 'Sports',
    priority: 'medium',
    author: 'Sports Committee',
  },
];

export const DEMO_ACTIVITIES = [
  {
    id: 1,
    action: 'Submitted assignment',
    detail: 'Shakespearean Analysis – English',
    time: '2 hours ago',
    icon: 'assignment',
  },
  {
    id: 2,
    action: 'Marked present',
    detail: 'Physics – 8:00 AM session',
    time: 'Today, 8:05 AM',
    icon: 'attendance',
  },
  {
    id: 3,
    action: 'Result published',
    detail: 'Computer Science Unit Test: 95/100',
    time: 'Yesterday',
    icon: 'result',
  },
  {
    id: 4,
    action: 'New announcement',
    detail: 'Mid-Term exam schedule available',
    time: 'Yesterday',
    icon: 'announcement',
  },
  {
    id: 5,
    action: 'Assignment overdue',
    detail: 'Organic Chemistry Lab Report',
    time: '2 days ago',
    icon: 'overdue',
  },
];

export const SUBJECT_COLORS = {
  Physics: '#fbbf24',
  Chemistry: '#f59e0b',
  Mathematics: '#d97706',
  Biology: '#fcd34d',
  English: '#ca8a04',
  'Computer Sc.': '#fde047',
};
