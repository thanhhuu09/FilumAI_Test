"use client";

import { QuizProvider } from "./context/QuizContext";

export default function App({ children }) {
  return <QuizProvider>{children}</QuizProvider>;
}
