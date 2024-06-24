"use client";
import { useQuiz } from "@/app/context/QuizContext";
import { data } from "@/app/data/data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Result = () => {
  const { selectedAnswers, setResultLink } = useQuiz();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const level = searchParams.get("level");
  const domainName = "https://filum-ai-test.vercel.app";

  let result;
  useEffect(() => {
    if (selectedAnswers.length === 0) {
      if (searchParams.has("level")) {
        router.push(`/questions/result?level=${level}`);
      } else {
        return router.push("/");
      }
    }
  }, [selectedAnswers, searchParams, router]);

  useEffect(() => {
    if (result) {
      // setResultLink(`${pathname}?level=${result.level}`);
      setResultLink(`${domainName}${pathname}?level=${result.level}`);
    }
  }, [result, pathname]);

  if (level) {
    result = data.results.find((result) => result.level === parseInt(level));
  } else if (selectedAnswers.length === 0) {
    return null;
  } else {
    const totalScore = selectedAnswers.reduce(
      (acc, curr) => acc + curr.answer.score,
      0
    );

    result = data.results.find(
      (result) => totalScore > result.range[0] && totalScore < result.range[1]
    );
  }

  return (
    <div className="text-white">
      <div className="flex items-center gap-4 flex-row">
        <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center">
          <img src={result.icon} alt={result.name} className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm uppercase font-medium">
            Voice of customers - cấp độ {result.level}
          </h1>
          <h2 className="text-2xl font-bold uppercase ">{result.name}</h2>
        </div>
      </div>

      {/* Description */}
      <div className="mt-4">
        <p className="text-base text-gray-300">{result.description.text}</p>
      </div>
    </div>
  );
};

export default Result;
