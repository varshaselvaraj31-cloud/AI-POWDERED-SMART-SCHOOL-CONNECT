import { BaseAIAdapter, GeminiAdapter } from './adapters/index.js';
import { SCHOOL_PROMPTS } from './prompts/index.js';

/**
 * Main AI Engine Facade for Smart School Connect.
 */
class AIService {
  constructor(adapter = new GeminiAdapter()) {
    this.adapter = adapter;
  }

  setAdapter(adapter) {
    this.adapter = adapter;
  }

  async analyzeStudentPerformance(studentName, gradesData, attendanceRate) {
    const prompt = SCHOOL_PROMPTS.STUDENT_PERFORMANCE_ANALYSIS(studentName, gradesData, attendanceRate);
    return this.adapter.generateText(prompt);
  }

  async generateAttendanceAlert(studentName, absences, subject) {
    const prompt = SCHOOL_PROMPTS.ATTENDANCE_ANOMALY_ALERT(studentName, absences, subject);
    return this.adapter.generateText(prompt);
  }
}

export const aiService = new AIService();
export { BaseAIAdapter, GeminiAdapter, SCHOOL_PROMPTS };
export default aiService;
