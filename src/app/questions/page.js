"use client";
import Question from "@/components/Question";
import { useRouter } from "next/navigation";
import { data } from "@/app/data/data";
import { useState } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { useQuiz } from "../context/QuizContext";

export default function QuestionPage() {
  const router = useRouter();
  const { selectedAnswers } = useQuiz();
  const [currentQIndex, setCurrentQIndex] = useState(0);

  const handleNext = () => {
    if (currentQIndex === getTotalQuestions() - 1) {
      router.push("questions/result");
    } else {
      setCurrentQIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => setCurrentQIndex((prev) => prev - 1);
  console.log({ selectedAnswers });
  return (
    <div className="container mx-auto p-4 text-white text-center flex gap-7 flex-col mt-10">
      <h1 className="text-sm font-semibold text-gray-400 uppercase mb-4 text-center">
        ĐÁNH GIÁ MỨC ĐỘ TRƯỞNG THÀNH <br />
        VỀ QUẢN TRỊ TRẢI NGHIỆM KHÁCH HÀNG
      </h1>
      <div className="rounded-md p-4 w-full bg-[#395273]">
        <Question
          title={getQuestionById(currentQIndex + 1).title}
          options={getQuestionById(currentQIndex + 1).options}
          id={currentQIndex + 1}
          numberOfQuestions={getTotalQuestions()}
        />

        <div className="flex justify-between mt-4">
          <div className="flex items-center justify-center gap-2 bg-[#E9F4FF] p-2 rounded-md cursor-pointer w-fit text-blue-600">
            <IoIosArrowRoundBack />
            <button disabled={currentQIndex === 0} onClick={handlePrev}>
              Quay lại
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 bg-blue-600 p-2 rounded-md cursor-pointer w-fit">
            <button onClick={handleNext}>Tiếp theo</button>
            <IoIosArrowRoundForward />
          </div>
        </div>
      </div>
    </div>
  );
}

const getQuestionById = (questionID) => {
  const question = data.questions.find((q) => q.id === questionID);
  return question;
};

const getTotalQuestions = () => {
  return data.questions.length;
};
