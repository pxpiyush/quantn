import rawQuestions from "./coding-decoding-questions.json";
import { type PYQQuestion } from "./pyq-questions";

// Normalize the JSON structure to match PYQQuestion format
export const codingDecodingQuestions: PYQQuestion[] = (rawQuestions as any[]).map((q) => ({
  question_id: q.question_id,
  question: q.question,
  options: Object.values(q.options) as string[],
  correct_option: q.options[q.correct_option] as string,
  explanation: q.explanation,
  exam: q.exam || undefined,
}));
