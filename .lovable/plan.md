

# Plan: Mistake Journal, Question Bookmarking, and Simulated Exam Environment

## Overview

Three new features to enhance exam preparation:
1. **Mistake Journal** — Auto-saves wrong answers, lets users retry weak questions
2. **Question Bookmarking** — Bookmark questions during exams/practice, review later
3. **Simulated Exam Environment** — Mock tests with negative marking and section timing

All data persists in `localStorage` (consistent with existing offline-first approach).

---

## Feature 1: Mistake Journal

**New files:**
- `src/lib/mistake-journal.ts` — localStorage CRUD for mistakes
  - Stores: `{ question, options, correct_option, explanation, exam, userAnswer, category, timestamp }`
  - Functions: `saveMistake()`, `getMistakes()`, `clearMistakes()`, `getMistakesByCategory()`
  - Deduplicates by question text

- `src/pages/MistakeJournalScreen.tsx` — Full page to review mistakes
  - Filter by category (Coding & Decoding / Alphabet Test)
  - Shows each wrong question with user's answer vs correct answer (reuse `QuestionReviewCard` pattern)
  - "Retry Mistakes" button — starts a mini exam with only mistake questions
  - "Clear All" with confirmation
  - Weakness pattern summary at top (e.g., "12 mistakes in Coding & Decoding, 5 in Alphabet")

**Modified files:**
- `src/pages/ExamGameScreen.tsx` — After answering wrong, call `saveMistake()`
- `src/pages/TimedGameScreen.tsx` — Same, save wrong answers
- `src/pages/AboutTab.tsx` — Add "Mistake Journal" tile linking to `/mistakes`
- `src/App.tsx` — Add route `/mistakes`

---

## Feature 2: Question Bookmarking

**New files:**
- `src/lib/bookmarks.ts` — localStorage CRUD
  - Stores: `{ question, options, correct_option, explanation, exam, category, timestamp }`
  - Functions: `toggleBookmark()`, `isBookmarked()`, `getBookmarks()`, `clearBookmarks()`
  - Key by question text hash

- `src/pages/BookmarksScreen.tsx` — View all bookmarked questions
  - Filter by category
  - "Practice Bookmarks" button to start exam with only bookmarked questions
  - Remove individual bookmarks with swipe or tap

**Modified files:**
- `src/pages/ExamGameScreen.tsx` — Add a small bookmark icon (top-right of question card). Tap to toggle bookmark for current question
- `src/pages/AboutTab.tsx` — Add "Bookmarks" tile linking to `/bookmarks`
- `src/App.tsx` — Add route `/bookmarks`

---

## Feature 3: Simulated Exam Environment

**New files:**
- `src/pages/MockExamSetupScreen.tsx` — Setup page for mock exams
  - Choose duration (30min, 60min, 90min)
  - Choose question count (50, 100)
  - Toggle negative marking on/off (default on, -0.25 per wrong answer)
  - Shows marking scheme: +1 correct, -0.25 wrong, 0 skipped
  - "Start Mock" button

- `src/pages/MockExamGameScreen.tsx` — Full mock exam experience
  - Countdown timer (not stopwatch) with warning at 5min remaining
  - Question palette/navigator — small numbered grid showing answered/unanswered/bookmarked status
  - Same question UI as ExamGameScreen but with countdown pressure
  - Auto-submit when timer hits 0
  - Skip and Submit buttons (existing pattern)

- `src/pages/MockExamReportScreen.tsx` — Enhanced report with scoring
  - Score calculation: `correct * 1 - wrong * 0.25`
  - Section breakdown if mixed categories
  - Time per question average
  - Reuse existing report card pattern

**Modified files:**
- `src/pages/ExamsTab.tsx` — Add "Mock Test" tile at top of exam list with distinct styling
- `src/App.tsx` — Add routes: `/mock/setup`, `/mock/game/:duration/:count`, `/mock/report`
- `src/components/BottomNav.tsx` — Add `/mock` paths to hidden paths list

---

## Technical Details

- **localStorage keys**: `reazn-mistakes`, `reazn-bookmarks` (JSON arrays)
- **Bookmark icon in game**: Small `Bookmark`/`BookmarkCheck` from lucide-react, positioned top-right of question card
- **Mock exam timer**: Uses same `useRef` + `setInterval` pattern from `TimedGameScreen`
- **Negative marking**: Configurable via state passed through route, default -0.25
- **Question palette**: A collapsible grid of numbered circles, color-coded (green=answered, gray=unanswered, yellow=bookmarked)
- **No new dependencies needed** — all built with existing framer-motion, lucide-react, react-router

