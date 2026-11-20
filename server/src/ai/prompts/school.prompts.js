/**
 * Centralized Prompt Templates for AI-Powered Smart School Connect.
 */
export const SCHOOL_PROMPTS = {
  SYSTEM_ASSISTANT: `You are the AI Assistant for the Smart School Connect platform.
Your purpose is to provide clear, empathetic, and actionable guidance to school administrators, teachers, students, and parents.
Maintain a supportive, academic, and professional tone at all times.`,

  STUDENT_PERFORMANCE_ANALYSIS: (studentName, gradesData, attendanceRate) => `
Analyze the academic performance for student: ${studentName}.
Attendance Rate: ${attendanceRate}%
Academic Records: ${JSON.stringify(gradesData)}

Please provide:
1. Academic Strengths
2. Areas of Improvement
3. Personalized Recommendations for Teachers & Parents
`,

  ATTENDANCE_ANOMALY_ALERT: (studentName, consecutiveAbsences, subject) => `
Generate an urgent but supportive attendance notification for parents of ${studentName}.
Subject: ${subject}
Consecutive Absences: ${consecutiveAbsences} days.
`,
};

export default SCHOOL_PROMPTS;
