export const PATHS = {
  // Auth
  LOGIN: "/login",
  REGISTER: "/register",

  // Dashboard
  DASHBOARD: "/",

  // Exams
  EXAMS: "/exams",
  EXAM_CREATE: "/exams/create",
  EXAM_TAKE: (examId: string) => `/exams/${examId}/take`,
  EXAM_DETAIL: (examId: string) => `/exams/${examId}`,

  // Results
  RESULTS: "/results",
  RESULT_DETAIL: (resultId: string) => `/results/${resultId}`,
} as const;
