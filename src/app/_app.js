"use client";

import { Suspense } from "react";
import { QuizProvider } from "./context/QuizContext";

export default function App({ children }) {
  return (
    <Suspense>
      <QuizProvider>{children}</QuizProvider>
    </Suspense>
  );
}
