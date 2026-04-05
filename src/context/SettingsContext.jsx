import React, { createContext, useContext, useState } from 'react';

/* ── Available languages ── */
export const LANGUAGES = {
  en: { label: 'English', flag: '🇬🇧' },
  uk: { label: 'Українська', flag: '🇺🇦' },
};

/* ── Translations ── */
const TRANSLATIONS = {
  en: {
    // Header / nav
    dashboard: 'Dashboard',
    habits: 'Habits',
    history: 'History',
    inspiration: '✨ Inspiration',
    todayProgress: "Today's Progress",
    done: 'Done',
    buildBetter: 'Build better habits every day',
    appTitle: 'Habit',
    appTitleAccent: 'Tracker',

    // Footer
    footerCopy: '© 2026 HabitTracker Premium.',
    privacy: 'Privacy',
    terms: 'Terms',
    dayCompleted: "🎉 Day completed! You're crushing it!",
    progress: '📈 Progress',
    habitsDone: 'habits done.',
    language: 'Language',

    // Dashboard
    yourProgressDashboard: 'Your Progress Dashboard',
    recentActivity: 'Recent Activity',
    markedAsDone: 'marked as done on',
    at: 'at',
    noActivity: 'No activity yet.',
    viewFullHistory: 'View Full History →',
    manageHabits: 'Manage Habits',

    // Stats labels
    completedToday: 'Completed Today',
    bestStreak: 'Best Streak',
    days: 'Days',
    totalLogged: 'Total Logged',
    overallProgress: 'Overall Progress',

    // HabitsPage
    addNewHabit: 'Add New Habit',
    dailyHabits: 'Daily Habits',
    filterAll: 'All',
    filterActive: 'Active',
    filterCompleted: 'Completed',

    // AddHabitForm
    habitPlaceholder: 'E.g. Drink Water, Exercise…',
    addHabitBtn: 'Add Habit',
    catHealth: 'Health',
    catFitness: 'Fitness',
    catLearning: 'Learning',
    catMindfulness: 'Mindfulness',
    catWork: 'Work',

    // HabitCard
    dayStreak: 'day streak',
    statusDone: '✓ Done',
    statusPending: '⏳ Pending',
    readMore: 'Read More →',

    // HabitDetail
    habitDetails: 'Habit Details',
    habitNotFound: 'Habit Not Found',
    habitNotFoundDesc: "We couldn't find a habit with the ID:",
    backToList: '← Back to list',
    goBack: '← Go Back',
    category: 'Category',
    currentStreak: 'Current Streak',
    statusCompleted: '✓ Completed',

    // HistoryPage
    completionHistory: 'Completion History',
    completedBadge: 'Completed',
    emptyHistory: 'Your history is empty. Complete your first habit to see it here! 🎯',

    // AboutPage
    aboutApp: 'About this App',
    aboutDesc: 'This Habit Tracker is designed to help you build and maintain positive daily habits. Use the dashboard to track your progress, log completions to build streaks, and stay motivated.',
    dailyInspiration: 'Daily Inspiration ✨',
    inspirationSubtitle: 'Motivational quotes fetched live from a public API',
    fetchingInspiration: 'Fetching inspiration…',
    couldNotLoad: 'Could not load quotes',

    // NotFound
    pageNotFound: 'Page Not Found',
    pageNotFoundDesc: "The page you are looking for doesn't exist or has been moved.",
    returnToDashboard: 'Return to Dashboard',
  },

  uk: {
    // Header / nav
    dashboard: 'Головна',
    habits: 'Звички',
    history: 'Історія',
    inspiration: '✨ Натхнення',
    todayProgress: 'Прогрес сьогодні',
    done: 'Виконано',
    buildBetter: 'Будуй кращі звички щодня',
    appTitle: 'Habit',
    appTitleAccent: 'Tracker',

    // Footer
    footerCopy: '© 2026 HabitTracker Premium.',
    privacy: 'Конфіденційність',
    terms: 'Умови',
    dayCompleted: '🎉 День завершено! Чудова робота!',
    progress: '📈 Прогрес',
    habitsDone: 'звичок виконано.',
    language: 'Мова',

    // Dashboard
    yourProgressDashboard: 'Ваш прогрес',
    recentActivity: 'Остання активність',
    markedAsDone: 'позначено як виконано',
    at: 'о',
    noActivity: 'Активності ще немає.',
    viewFullHistory: 'Переглянути всю історію →',
    manageHabits: 'Управляти звичками',

    // Stats labels
    completedToday: 'Виконано сьогодні',
    bestStreak: 'Найкраща серія',
    days: 'Днів',
    totalLogged: 'Всього записів',
    overallProgress: 'Загальний прогрес',

    // HabitsPage
    addNewHabit: 'Додати нову звичку',
    dailyHabits: 'Щоденні звички',
    filterAll: 'Всі',
    filterActive: 'Активні',
    filterCompleted: 'Виконані',

    // AddHabitForm
    habitPlaceholder: 'Напр. Пити воду, Вправи…',
    addHabitBtn: 'Додати звичку',
    catHealth: 'Здоров\'я',
    catFitness: 'Фітнес',
    catLearning: 'Навчання',
    catMindfulness: 'Медитація',
    catWork: 'Робота',

    // HabitCard
    dayStreak: 'днів поспіль',
    statusDone: '✓ Виконано',
    statusPending: '⏳ Очікує',
    readMore: 'Детальніше →',

    // HabitDetail
    habitDetails: 'Деталі звички',
    habitNotFound: 'Звичку не знайдено',
    habitNotFoundDesc: 'Не вдалося знайти звичку з ID:',
    backToList: '← До списку',
    goBack: '← Назад',
    category: 'Категорія',
    currentStreak: 'Поточна серія',
    statusCompleted: '✓ Виконано',

    // HistoryPage
    completionHistory: 'Історія виконання',
    completedBadge: 'Виконано',
    emptyHistory: 'Ваша історія порожня. Виконайте першу звичку, щоб побачити її тут! 🎯',

    // AboutPage
    aboutApp: 'Про застосунок',
    aboutDesc: 'HabitTracker допомагає формувати та підтримувати позитивні щоденні звички. Використовуй дашборд для відстеження прогресу, фіксуй виконання для накопичення серій і залишайся мотивованим.',
    dailyInspiration: 'Щоденне натхнення ✨',
    inspirationSubtitle: 'Мотиваційні цитати в реальному часі з публічного API',
    fetchingInspiration: 'Завантаження натхнення…',
    couldNotLoad: 'Не вдалося завантажити цитати',

    // NotFound
    pageNotFound: 'Сторінку не знайдено',
    pageNotFoundDesc: 'Сторінка, яку ви шукаєте, не існує або була переміщена.',
    returnToDashboard: 'Повернутись на головну',
  },
};

/* ── Context ── */
const SettingsContext = createContext(null);

/* ── Provider ── */
export const SettingsProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('app-language') || 'en';
  });

  const changeLanguage = (lang) => {
    if (LANGUAGES[lang]) {
      setLanguage(lang);
      localStorage.setItem('app-language', lang);
    }
  };

  const t = (key) => TRANSLATIONS[language]?.[key] ?? TRANSLATIONS['en'][key] ?? key;

  return (
    <SettingsContext.Provider value={{ language, changeLanguage, t, LANGUAGES }}>
      {children}
    </SettingsContext.Provider>
  );
};

/* ── Custom hook ── */
export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used inside a SettingsProvider');
  }
  return context;
};

export default SettingsContext;
