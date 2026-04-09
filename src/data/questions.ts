export interface ExamQuestion {
  id: number;
  question: string;
  options: string[];
  correct_option: string;
  explanation: string;
  exam_tag?: string;
}

export const examQuestions: ExamQuestion[] = Array.from({ length: 150 }, (_, i) => {
  const type = i % 3;
  if (type === 0) {
    // Alphabet position questions
    const letter = String.fromCharCode(65 + (i % 26));
    const pos = (i % 26) + 1;
    const wrong1 = pos > 1 ? pos - 1 : pos + 3;
    const wrong2 = pos + 1 > 26 ? 1 : pos + 1;
    const wrong3 = pos + 2 > 26 ? 2 : pos + 2;
    return {
      id: i + 1,
      question: `What is the position of the letter '${letter}' in the English alphabet?`,
      options: [`${pos}`, `${wrong1}`, `${wrong2}`, `${wrong3}`].sort(() => Math.random() - 0.5),
      correct_option: `${pos}`,
      explanation: `The letter '${letter}' is the ${pos}${pos === 1 ? "st" : pos === 2 ? "nd" : pos === 3 ? "rd" : "th"} letter of the English alphabet.`,
      exam_tag: i % 5 === 0 ? "CGL Tier II - 3 March 2023" : i % 7 === 0 ? "SSC CHSL 2022" : undefined,
    };
  } else if (type === 1) {
    // Reverse alphabet questions
    const letter = String.fromCharCode(65 + (i % 26));
    const reversePos = 27 - ((i % 26) + 1);
    const reverseLetter = String.fromCharCode(65 + reversePos - 1);
    const w1 = String.fromCharCode(65 + ((reversePos) % 26));
    const w2 = String.fromCharCode(65 + ((reversePos + 1) % 26));
    const w3 = String.fromCharCode(65 + ((reversePos + 2) % 26));
    return {
      id: i + 1,
      question: `What is the reverse (opposite) letter of '${letter}' in the English alphabet?`,
      options: [reverseLetter, w1, w2, w3].sort(() => Math.random() - 0.5),
      correct_option: reverseLetter,
      explanation: `The reverse of '${letter}' (position ${(i % 26) + 1}) is '${reverseLetter}' (position ${reversePos}). A + Z = 27, so opposite = 27 - position.`,
      exam_tag: i % 6 === 0 ? "SSC MTS 2023" : undefined,
    };
  } else {
    // Coding pattern questions
    const shift = (i % 5) + 1;
    const baseLetter = String.fromCharCode(65 + (i % 20));
    const coded = String.fromCharCode(65 + ((i % 20 + shift) % 26));
    const w1 = String.fromCharCode(65 + ((i % 20 + shift + 1) % 26));
    const w2 = String.fromCharCode(65 + ((i % 20 + shift + 2) % 26));
    const w3 = String.fromCharCode(65 + ((i % 20 + shift - 1 + 26) % 26));
    return {
      id: i + 1,
      question: `If each letter is coded by shifting +${shift} positions, what is the code for '${baseLetter}'?`,
      options: [coded, w1, w2, w3].sort(() => Math.random() - 0.5),
      correct_option: coded,
      explanation: `'${baseLetter}' shifted by +${shift} positions gives '${coded}'.`,
      exam_tag: i % 4 === 0 ? "CGL Tier I - 2023" : undefined,
    };
  }
});

// Sanitization: strip OCR brackets like [1], [2] etc.
export function sanitize(str: string): string {
  return str.replace(/\[\d+\]/g, "").replace(/^Q:\d+\s*/i, "").trim();
}

// Generate alphabet value questions for practice
export function generateAlphabetQuestion() {
  const idx = Math.floor(Math.random() * 26);
  const letter = String.fromCharCode(65 + idx);
  const correct = idx + 1;
  const options = new Set<number>([correct]);
  while (options.size < 4) {
    options.add(Math.floor(Math.random() * 26) + 1);
  }
  return {
    letter,
    correct,
    options: Array.from(options).sort(() => Math.random() - 0.5),
  };
}

// Generate reverse letter questions for practice
export function generateReverseQuestion() {
  const idx = Math.floor(Math.random() * 26);
  const letter = String.fromCharCode(65 + idx);
  const reverseIdx = 25 - idx;
  const correct = String.fromCharCode(65 + reverseIdx);
  const options = new Set<string>([correct]);
  while (options.size < 4) {
    options.add(String.fromCharCode(65 + Math.floor(Math.random() * 26)));
  }
  return {
    letter,
    correct,
    options: Array.from(options).sort(() => Math.random() - 0.5),
  };
}
