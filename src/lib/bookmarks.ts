export interface BookmarkEntry {
  question: string;
  options: string[];
  correct_option: string;
  explanation?: string;
  exam?: string;
  category: string;
  timestamp: number;
}

const STORAGE_KEY = "numen-bookmarks";

function load(): BookmarkEntry[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function save(entries: BookmarkEntry[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function toggleBookmark(entry: BookmarkEntry): boolean {
  const all = load();
  const idx = all.findIndex((b) => b.question === entry.question);
  if (idx >= 0) {
    all.splice(idx, 1);
    save(all);
    return false;
  }
  all.push(entry);
  save(all);
  return true;
}

export function isBookmarked(question: string): boolean {
  return load().some((b) => b.question === question);
}

export function getBookmarks(): BookmarkEntry[] {
  return load();
}

export function getBookmarksByCategory(category: string): BookmarkEntry[] {
  return load().filter((b) => b.category === category);
}

export function removeBookmark(question: string) {
  save(load().filter((b) => b.question !== question));
}

export function clearBookmarks() {
  localStorage.removeItem(STORAGE_KEY);
}