import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AnimatePresence } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import SplashScreen from "@/pages/SplashScreen";
import LearnTab from "@/pages/LearnTab";
import LearnVerbalScreen from "@/pages/LearnVerbalScreen";
import PracticeTab from "@/pages/PracticeTab";
import VerbalPracticeScreen from "@/pages/VerbalPracticeScreen";
import SubTopicsScreen from "@/pages/SubTopicsScreen";
import DurationScreen from "@/pages/DurationScreen";
import TimedGameScreen from "@/pages/TimedGameScreen";
import ResultsScreen from "@/pages/ResultsScreen";
import ExamsTab from "@/pages/ExamsTab";
import VerbalPYQScreen from "@/pages/VerbalPYQScreen";
import ExamSetupScreen from "@/pages/ExamSetupScreen";
import ExamGameScreen from "@/pages/ExamGameScreen";
import ExamReportScreen from "@/pages/ExamReportScreen";
import MockExamSetupScreen from "@/pages/MockExamSetupScreen";
import MockExamGameScreen from "@/pages/MockExamGameScreen";
import MockExamReportScreen from "@/pages/MockExamReportScreen";
import MySpaceScreen from "@/pages/MySpaceScreen";
import MistakeJournalScreen from "@/pages/MistakeJournalScreen";
import BookmarksScreen from "@/pages/BookmarksScreen";
import AboutTab from "@/pages/AboutTab";
import AlphabetValuesScreen from "@/pages/AlphabetValuesScreen";
import ReverseLetterPairsScreen from "@/pages/ReverseLetterPairsScreen";
import PrivacyScreen from "@/pages/PrivacyScreen";
import CursorGlow from "@/components/CursorGlow";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/learn" element={<LearnTab />} />
        <Route path="/learn/verbal" element={<LearnVerbalScreen />} />
        <Route path="/learn/alphabet-values" element={<AlphabetValuesScreen />} />
        <Route path="/learn/reverse-pairs" element={<ReverseLetterPairsScreen />} />
        <Route path="/practice" element={<PracticeTab />} />
        <Route path="/practice/verbal" element={<VerbalPracticeScreen />} />
        <Route path="/practice/coding" element={<SubTopicsScreen />} />
        <Route path="/practice/subtopics/:topic" element={<SubTopicsScreen />} />
        <Route path="/practice/duration/:type" element={<DurationScreen />} />
        <Route path="/practice/game/:type/:mins" element={<TimedGameScreen />} />
        <Route path="/practice/results" element={<ResultsScreen />} />
        <Route path="/exams" element={<ExamsTab />} />
        <Route path="/exams/pyq/verbal" element={<VerbalPYQScreen />} />
        <Route path="/exams/setup" element={<ExamSetupScreen />} />
        <Route path="/exams/setup/:category" element={<ExamSetupScreen />} />
        <Route path="/exams/game/:category/:count" element={<ExamGameScreen />} />
        <Route path="/exams/game/:count" element={<ExamGameScreen />} />
        <Route path="/exams/report" element={<ExamReportScreen />} />
        <Route path="/mock/setup" element={<MockExamSetupScreen />} />
        <Route path="/mock/game/:duration/:count" element={<MockExamGameScreen />} />
        <Route path="/mock/report" element={<MockExamReportScreen />} />
        <Route path="/myspace" element={<MySpaceScreen />} />
        <Route path="/mistakes" element={<MistakeJournalScreen />} />
        <Route path="/bookmarks" element={<BookmarksScreen />} />
        <Route path="/about" element={<AboutTab />} />
        <Route path="/about/privacy" element={<PrivacyScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <CursorGlow />
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto relative min-h-screen">
            <AnimatedRoutes />
            <BottomNav />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
