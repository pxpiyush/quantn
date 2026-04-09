export interface MistakeEntry {
  question: string;
  options: string[];
  correct_option: string;
  explanation?: string;
  exam?: string;
  userAnswer: string;
  category: string;
  timestamp: number;
}

const STORAGE_KEY = "numen-mistakes";

function load(): MistakeEntry[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function save(entries: MistakeEntry[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function saveMistake(entry: MistakeEntry) {
  const all = load();
  if (all.some((m) => m.question === entry.question)) return;
  all.push(entry);
  save(all);
}

export function getMistakes(): MistakeEntry[] {
  return load();
}

export function getMistakesByCategory(category: string): MistakeEntry[] {
  return load().filter((m) => m.category === category);
}

export function removeMistake(question: string) {
  save(load().filter((m) => m.question !== question));
}

export function clearMistakes() {
  localStorage.removeItem(STORAGE_KEY);
}