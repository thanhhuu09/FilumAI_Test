"use client";
import { Suspense } from "react";
import { useQuiz } from "@/app/context/QuizContext";
import Result from "@/components/Result";
import { useRouter, useSearchParams } from "next/navigation";

export default function ResultPage() {
  const { selectedAnswers } = useQuiz();
  const router = useRouter();
  const searchParams = useSearchParams();

  const level = searchParams.get("level");
  if (selectedAnswers.length === 0) {
    if (searchParams.has("level")) {
      router.push(`/questions/result?level=${level}`);
    } else {
      return router.push("/");
    }
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto p-4 text-white flex gap-7 flex-col mt-10">
        <h1 className="text-sm font-semibold text-gray-400 uppercase mb-4 text-center">
          ĐÁNH GIÁ MỨC ĐỘ TRƯỞNG THÀNH <br />
          VỀ QUẢN TRỊ TRẢI NGHIỆM KHÁCH HÀNG
        </h1>
        <div className="rounded-md p-4 w-full bg-[#395273]">
          <Result level={level} />
        </div>
      </div>
    </Suspense>
  );
}
